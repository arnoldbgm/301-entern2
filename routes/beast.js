import express from "express";
import { searchImages } from "../services/unsplash.js";
import { getArticleDescription } from "../services/wikipedia.js";
import beastsData from "../data/horned-beast.json" assert { type: 'json'}

const router = express.Router();

router.get('/beasts/enriched', async (req, res) => {
   try {
      // Procesar máximo 3 bestias para no exceder límites de API
      const limitedBeasts = beastsData.slice(0, 3);
      // Creo un arreglo para almacenar mi data con sus nuevos valores
      const enrichedBeasts = [];
      for (const beast of limitedBeasts) {
         try {
            const alternativeImage = await searchImages(beast.title);
            const wikiDescription = await getArticleDescription(beast.title);
            enrichedBeasts.push({
               ...beast,
               alternative_image: alternativeImage,
               wiki_description: wikiDescription
            });
         } catch (innerError) {
            console.error(`Error enriching beast ${beast.title}:`, innerError);
            enrichedBeasts.push({
               ...beast,
               alternative_image: null,
               wiki_description: null,
               error: `Error enriching data for ${beast.title}`
            });
         }
      }
      res.json(enrichedBeasts);
   } catch (error) {
      console.error('Error enriching beasts:', error);
      res.status(500).json({
         error: 'Error al procesar la solicitud',
         details: error.message
      });
   }
});

// GET /api/beasts/enriched/:id - obtiene una bestia enriquecida por ID
router.get("/beasts/enriched/:id", async (req, res) => {
   try {
     // Buscar la bestia por ID
     const beast = beastsData.find(b => b.id === parseInt(req.params.id));
     
     // Si no existe la bestia, devolver 404
     if (!beast) {
       return res.status(404).json({
         error: "Bestia no encontrada",
         details: `No existe una bestia con ID ${req.params.id}`
       });
     }
 
     // Obtener datos enriquecidos
     const alternativeImage = await searchImages(beast.title);
     const wikiDescription = await getArticleDescription(beast.title);
 
     // Devolver bestia enriquecida
     res.json({
       ...beast,
       alternative_image: alternativeImage,
       wiki_description: wikiDescription
     });
 
   } catch (error) {
     console.error("Error enriching beast:", error);
     res.status(500).json({
       error: "Error al procesar la solicitud",
       details: error.message
     });
   }
 });
 

export default router;

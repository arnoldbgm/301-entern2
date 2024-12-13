// Para crear una ruta
import express from "express";
import superheroes from "../data/superheroes.json" assert { type: 'json'}

const router = express.Router();

//   localhost:8080/api/superheroes
//  GET  => TRAER 
//  POST  => INSERTAR 
//  PUT - PATCH  => EDITAR
//  DELETE  => ELIMINAR
router.get("/superheroes", (req, res)=>{
   res.json(superheroes)
})

//   localhost:8080/api/superheroes/3
router.get("/superheroes/:id", (req,res)=> {
   // req.parms => parametros que envio por la url
   const { id } = req.params;
   // find 
   //  La logica para encontrar un elemento
   const singleSuperheroe = superheroes.find((elemento)=> elemento.id === parseInt(id))
   //  La logica para responder
   res.json(singleSuperheroe)
})

export default router;
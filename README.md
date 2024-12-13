# Laboratorio 07 😁🔥
## 1. Instalando nuestra data 📚
Para este laboratorio usaremos un json, para simular que tenemos una bd.
```json
[
   {
     "id": 1,
     "nombre": "Superman",
     "descripcion": "El hombre de acero, con fuerza sobrehumana, visión láser y capacidad de volar.",
     "imagen_url": "https://example.com/images/superman.jpg",
     "poderes": ["Fuerza sobrehumana", "Visión láser", "Vuelo", "Invulnerabilidad"]
   },
   {
     "id": 2,
     "nombre": "Batman",
     "descripcion": "El caballero oscuro, un detective experto con gadgets avanzados y entrenamiento extremo.",
     "imagen_url": "https://example.com/images/batman.jpg",
     "poderes": ["Habilidad de combate", "Intelecto superior", "Maestro de la tecnología"]
   },
   {
     "id": 3,
     "nombre": "Wonder Woman",
     "descripcion": "Una amazona guerrera con fuerza divina y su lazo de la verdad.",
     "imagen_url": "https://example.com/images/wonder-woman.jpg",
     "poderes": ["Fuerza sobrehumana", "Lazo de la verdad", "Habilidad de combate", "Inmortalidad"]
   },
   {
     "id": 4,
     "nombre": "Spider-Man",
     "descripcion": "El héroe arácnido, con poderes de trepar muros y lanzar telarañas.",
     "imagen_url": "https://example.com/images/spider-man.jpg",
     "poderes": ["Agilidad sobrehumana", "Trepar paredes", "Sentido arácnido", "Lanzar telarañas"]
   }
 ]
```
## Configurando las rutas 📂
Para poder trabajar con las rutas es necesario que creemos ``routes/superheroes.js``📂, con el fin de que tengamos nuestro codigo mejor estructurado.


```js
import express from 'express';
import superheroes from '../data/superheroes.json' assert { type: 'json' };

const router = express.Router();

// Obtener todas las bestias
router.get('/beasts', (req, res) => {
  res.json(superheroes);
});

export default router;
```
Ahora debemos de llamar nuestras rutas dentro de nuestro ``index.js``
> [!CAUTION]
> Cuando usas MODULEJS siempre que importes un archivo js, este debe de terminar en ``.js`` por ejemplo => ``import {router as apiSuperHeroes} from './routes/beasts.js';`` viste que al final de la importacion se encuentra la extension .js
```js
import express from 'express';
import {router as apiSuperHeroes} from './routes/beasts.js';

const app = express();
const PORT = 3000;

// Esto de aqui es tu importacion a tus rutas creadas
app.use('/api', apiSuperHeroes);


app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

```
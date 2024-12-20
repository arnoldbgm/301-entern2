// Para crear una ruta
import express from "express";
import superheroes from "../data/superheroes.json" assert { type: 'json'}

const router = express.Router();

//   localhost:8080/api/superheroes
//  GET  => TRAER 
//  POST  => INSERTAR 
//  PUT - PATCH  => EDITAR
//  DELETE  => ELIMINAR
router.get("/superheroes", (req, res) => {
   res.json(superheroes)
})

//   localhost:8080/api/superheroes/3
router.get("/superheroes/:id", (req, res) => {
   // req.parms => parametros que envio por la url
   const { id } = req.params;
   // find 
   //  La logica para encontrar un elemento
   const singleSuperheroe = superheroes.find((elemento) => elemento.id === parseInt(id))
   //  La logica para responder
   res.json(
      {
         message: "Respuesta exitosa",
         data: singleSuperheroe
      })
})

router.get("/numero-superheroes", (req, res) => {
   const numeroSuperheroes = superheroes.length
   res.json({
      message: "Peticion exitosa, el numero de superheroes es",
      numero: numeroSuperheroes
   })
})

//  req =request => solicitud => lo que solicita el cliente
//  res =response => respuesta => lo que se muestra al cliente
router.get("/pokemones", async(req, res) => {
   const data = await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
   const response = await data.json()

   res.json(response)
})

//  Quiero que me creen un endpoit de tipo GET
//  paises-del-mundo  => RESOLVER UNA PETICION A UNA API
// https://restcountries.com/v3.1/all

export default router;
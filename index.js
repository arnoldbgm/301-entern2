import express from "express"
import 'dotenv/config'
import superHeroesRouter from "./routes/superheroes.js"


const app = express();
const port = process.env.PUERTO || 8000;


//   localhost:8080/api/superheroes
app.use("/api", superHeroesRouter)

// listen ( PUERTO ,  CALLBACK)
app.listen(port, () => {
   console.log("Mi servidor esta corriendo 🔥🚀");
})
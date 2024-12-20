import express from "express"
import 'dotenv/config'
import superHeroesRouter from "./routes/superheroes.js"
import routerBeast from "./routes/beast.js"
//  Vamos a importar morgan
import morgan from "morgan";
import cors from "cors"

const app = express();
const port = 8000;

// Middleware
app.use(morgan("tiny"))
app.use(cors()) // Mi API ES PUBLICA Y CUALQUIER PERSONA PUEDE CONSUMIRLA
//   localhost:8080/api/superheroes
app.use("/api", superHeroesRouter)
app.use("/api", routerBeast)

// listen ( PUERTO ,  CALLBACK)
app.listen(port, () => {
   console.log("Mi servidor esta corriendo 🔥🚀");
   console.log("http://localhost:8000");
})
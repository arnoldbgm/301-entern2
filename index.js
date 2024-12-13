import express from "express"
import 'dotenv/config'


const app = express();
const port = process.env.PUERTO || 3000;

// get(" RUTA ", (req, res)=> {})
app.get("/", (req, res) => {
   res.send("Esta es mi api");
})


app.get("/test", (req, res) => {
   res.json({
      "name": "[TuNombre]",
      "date": "2024-10-28",
      "timestamp": Date.now()
   })
})

// listen ( PUERTO ,  CALLBACK)
app.listen(port, () => {
   console.log("Mi servidor esta corriendo 🔥🚀");
})
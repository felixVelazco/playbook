const express = require("express");

//App de express
const app = express();
app.use(express.json()); //indicar que usaremos json

const port = 3000;

//Inicializar la app
app.listen(port, ()=> {
  console.log(`Example app listening on port ${port}`); 
})
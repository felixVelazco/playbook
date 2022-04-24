const express = require("express");

//App de express
const app = express();
app.use(express.json()); //indicar que usaremos json

const port = 3000;

//HTTP methods
app.get("/v1/explorers", (req,res) =>{
  console.log(`Api explorers GET ALL requests ${new Date()}`);
  const explorer1 = {id:1, name: "felix1"};
  const explorer2 = {id:2, name: "felix2"};
  const explorer3 = {id:3, name: "felix3"};
  const explorer4 = {id:4, name: "felix4"};
  
  const explorers = [explorer1, explorer2, explorer3, explorer4];

  res.status(200).json(explorers);
})

app.get('/v1/explorers/:id', (req, res) => {
  console.log(`Api explorers GET Request ${new Date()}`);
  console.log(`getting explorer with id ${req.params.id}`);
  const explorer = {id: 1, name: "Felix"};
  // const explorer1 = {id:1, name: "felix1"};
  // const explorer2 = {id:2, name: "felix2"};
  // const explorer3 = {id:3, name: "felix3"};
  // const explorer4 = {id:4, name: "felix4"};
  
  // const explorers = [explorer1, explorer2, explorer3, explorer4];
  res.status(200).json(explorer);
})

app.post('/v1/explorers', (req, res) => {
  console.log(`Api explorers POST request ${new Date()}`);
  const requestBody = req.body //Parametros de un cliente
  res.status(201).json({message: "Created"});
  
})

//Inicializar la app
app.listen(port, ()=> {
  console.log(`Example app listening on port ${port}`); 
})
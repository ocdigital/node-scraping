const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Olá Mundo!"); //evitar a maldição do Hello World
    
});

app.listen(3000, () => {
    console.log("Aplicação rodando na porta 3000");
});


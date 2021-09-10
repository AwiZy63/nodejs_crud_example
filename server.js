require("dotenv").config();
const express = require('express');
const bodyparser = require('body-parser');
const config = require("./config.json");

// Création de l'application express
const app = express();

// Définition du port de connexion au serveur
const port = config.port;

// Analyser les requêtes de type content - application/x-www-form-urlencoded
app.use(bodyparser.urlencoded({ extended: true }))

// Analyser les requêtes de type content - application/json
app.use(bodyparser.json())

// Définition d'une route principale
app.get('/', (req, res) => {
  res.send("Hello World");
});

// Routes pour employés

const employeeRoutes = require('./src/routes/employee.routes');

// Utilisation d'un middleware

app.use('/api/v1/employees', employeeRoutes)


// Ecoute pour les requêtes
app.listen(port, () => {
  console.log(`Le serveur a démarré sur le port ${port}`);
});
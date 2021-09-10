const express = require('express');
const router = express.Router();

const employeeController = require("../controllers/employee.controller");

// Récupération de tout les employés

router.get('/', employeeController.findAll);

// Récupération de tout les employés

router.post('/', employeeController.create);

// Récupération de tout les employés

router.get('/:id', employeeController.findById);

// Récupération de tout les employés

router.put('/:id', employeeController.update);

// Récupération de tout les employés

router.delete('/:id', employeeController.delete);

module.exports = router
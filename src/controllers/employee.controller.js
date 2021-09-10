'use strict';

const Employee = require("../models/employee.model");

exports.findAll = function(req, res) {
    Employee.findAll(function(err, employee) {
        console.log("controller")
        if (err)
        res.send(err);
        console.log('res', employee);
        res.send(employee);
    });
};

exports.create = function(req, res) {
    const new_employee = new Employee(req.body);

    if (
        req.body.constructor === Object && Object.keys(req.body).length === 0 || 
        !(req.body.first_name && req.body.last_name && req.body.email && req.body.phone && req.body.organization && req.body.designation)
        ){
        res.status(400).send({ error: true, message: 'Veuillez fournir tous les champs obligatoires'});
    } else {
        Employee.create(new_employee, function(err, employee) {
            if (err)
            res.send(err);
            res.json({error: false, message: "L'employé a été créé avec succès!", data: employee});
        });
    }
};

exports.findById = function(req, res) {
    Employee.findById(req.params.id, function(err, employee) {
        if (err)
        res.send(err);
        res.json(employee);
    });
};

exports.update = function(req, res) {
    if (
        req.body.constructor === Object && Object.keys(req.body).length === 0 || 
        !(req.body.first_name && req.body.last_name && req.body.email && req.body.phone && req.body.organization && req.body.designation && req.body.salary)
    ) {
        res.status(400).send({error: true, message: 'Veuillez fournir tous les champs obligatoires'});
    } else {
        Employee.update(req.params.id, new Employee(req.body), function(err, employee) {
            if (err)
            res.send(err);
            res.json({error: false, message: 'L\'employé a bien été mis à jour'});
        });
    }
};

exports.delete = function(req, res) {
    Employee.delete( req.params.id, function(err, employee) {
        if (err)
        res.send(err);
        res.json({error:false, message: 'L\'employé a bien été supprimé'});
    });
};
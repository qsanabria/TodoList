const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Duty } = require('../models/duty');

router.get('/allDutties', (req, res) => {
    Duty.find((err, items) => {
        if (!err)  
            res.send(items);
        else
            console.log('Error getting dutties: ', err);
    });
});

router.get('/duty/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with this ID');

    Duty.findById(req.params.id, (err, item) => {
        if (!err) 
            res.send(item);
        else
            console.log('Error retrieving duty: ', err);
    });
});

router.post('/duty', (req, res) => {
    var duty = new Duty({
        name: req.body.name
    });
    duty.save((err, item) => {
        if (!err) 
            res.send(item);
        else 
            console.log('Error posting duty: ', err);
    });
});

router.put('/duty/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with this ID');

    Duty.findByIdAndUpdate(req.params.id, { $set: {name: req.body.name} }, { new: true }, (err, item) => {
        if (!err) 
            res.send(item);
        else 
            console.log('Error updating duty: ', err);
    });
});

router.delete('/duty/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with this ID');

    Duty.findByIdAndRemove(req.params.id, (err, item) => {
        if (!err) 
            res.send(item);
        else 
            console.log('Error deleting duty: ', err);
    });
});

module.exports = router;
// Imports
const express = require('express');
require('./db/mongoose.js');
const Equipment = require('./models/equipment');


const app = express();
const port = proccess.env.PORT || 3500;

app.use(express.json());

app.post('equipment', async(req, res) => {
    const equipment = new equipment(req.body)

    try {
        await user.save();
        res.status(201).send(equipment);
    } catch (e) {
        res.status(400).send(e);
    }
});
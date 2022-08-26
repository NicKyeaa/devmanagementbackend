// Imports
const express = require('express');
require('./db/mongoose.js');
const Equipment = require('./models/equipment');


const app = express();
const port = process.env.PORT || 3500;

app.use(express.json());

app.post('/equipment', async(req, res) => {
    const equipment = new Equipment(req.body)
    console.log(equipment);
    try {
        await equipment.save();
        res.status(201).send(equipment);
    } catch (e) {
        res.status(400).send(e);
    }
});

app.get('/equipment', async(req, res) => {
    try {
        const equipments = await equipment.find({})
        res.send(equipments)
    } catch (e) {
        res.status(500).send()
    }
});

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
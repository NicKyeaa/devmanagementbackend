// Imports
const express = require('express');
const cors = require('cors')
require('./db/mongoose.js');
const Equipment = require('./models/equipment');


const app = express();
const port = process.env.PORT || 3500;

app.use(cors());
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
        const equipments = await Equipment.find({})
        res.send(equipments)
        console.log('Request completed successfully'); 
    } catch (e) {
        console.log(e)
        res.status(500).send()
    }
});

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
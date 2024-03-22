const router = require('express').Router();
const Data = require('../models/data.model');

// GET route to fetch data
router.get('/', async (req, res) => {
    try {
        const data = await Data.find({}, { 'pairs.volume': 1, 'pairs.priceUsd': 1, _id: 0 });
        res.send(data[0].pairs);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send({ message: 'Internal server error' });
    }
});

// POST route to add data
router.post('/', async (req, res) => {
    try {
        const newData = req.body;
        
        await Data.insertMany(newData);
        
        res.send({ message: 'Data inserted successfully' });
    } catch (error) {
        console.error('Error inserting data:', error);
        res.send({ message: 'Internal server error' });
    }
});

module.exports = router;

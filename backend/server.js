const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const pinturasRouter = require('./routes/pinturas');
const Pintura = require('./models/pinturas');
const MONGO_URI = process.env.MONGO_URI

const PORT = process.env.PORT ?? 1234;

app.get('/', (req, res) => {
    res.send(`<h1 style="text-align:center">SERVER Node.js + Express + mongoDB.</h1><br>
    <h2 style="text-align:center">Práctica DAW. Omar Martin</h2>`);
})

mongoose
    .connect("mongodb://noah:noah1234@localhost:27017/practicaDB", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(console.log('Connected to mongoDB'))

app.use(express.json());
app.use(cors());

app.get('/pinturas', async (req, res) => {
    
    try {
        const pinturas = await Pintura.find({});

        res.json(pinturas);

    } catch (error) {
        res.send(error)
    }
})

app.get('/:id', async (req, res) => {

    try {
        const pinturas = await Pintura.find({_id: req.params.id});
        res.json(pinturas);
    } catch (error) {
        res.send(error)
    }
})

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})
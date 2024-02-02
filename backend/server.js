const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Pintura = require('./models/pinturas');
const MONGO_URI = process.env.MONGO_URI
const { register, collectDefaultMetrics, Counter, Gauge } = require('prom-client');
const PORT = process.env.PORT ?? 1234;

const app = express();

// Conectar a la base de datos
mongoose
    .connect("mongodb://noah:noah1234@mongo-container:27017/practicaDB", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(console.log('Connected to mongoDB'))
    
    //LOCAL --> mongodb://noah:noah1234@mongo-container:27017/practicaDB
    
    //DOCKER --> mongodb://noah:noah1234@localhost:27017/practicaDB
    
// Middlewares básicos
app.use(express.json());
app.use(cors());

// Definicion del timeout para recargar las métricas
collectDefaultMetrics({ timeout: 5000 });


// Contador para la ruta Home
const contadorRutaHome = new Counter({
    name: 'ruta_home_accesos_total',
    help: 'Número total de accesos a la ruta de ejemplo',
});

// Definir un contador para las peticiones a /pinturas
const contadorPeticionesPinturas = new Counter({
    name: 'peticiones_pinturas_total',
    help: 'Número total de peticiones realizadas a /pinturas',
});

// Definir métrica para el tiempo de respuesta de la petición a /pinturas
const tiempoRespuestaPeticion = new Gauge({
    name: 'ultimo_tiempo_peticion_ms',
    help: 'Tiempo de la última petición en milisegundos',
});

app.get('/metrics', async (req, res) => {
    try {
        res.set('Content-Type', register.contentType);
        const metrics = await register.metrics();
        res.end(metrics);
    } catch (error) {
        console.error('Error retrieving metrics:', error);
        res.status(500).send('Error retrieving metrics');
    }
});

// Ruta HOME
app.get('/', (req, res) => {
    contadorRutaHome.inc();
    res.send(`<h1 style="text-align:center">SERVER Node.js + Express + mongoDB.</h1><br>
    <h2 style="text-align:center">Práctica DAW. Omar Martin</h2>`);
})

// Ruta para obtener las pinturas
app.get('/pinturas', async (req, res) => {
const inicioTiempo = Date.now(); // Inicio de la petición
   contadorPeticionesPinturas.inc();
    try {
        const pinturas = await Pintura.find({});
        res.json(pinturas);
        const tiempoTotal = Date.now() - inicioTiempo; // Calculamos el tiempo entre el inicio de la peticion y cuando muestra los resultados
        tiempoRespuestaPeticion.set(tiempoTotal); // Actualiza el tiempo de la última petición
    } catch (error) {
        console.error('Error fetching pinturas:', error);
        res.status(500).send('Error fetching pinturas');
    }
})

// RUta para obtener una pintura por su id
app.get('/pinturas/:id', async (req, res) => {

    try {
        const pinturas = await Pintura.find({_id: req.params.id});
        res.json(pinturas);
    } catch (error) {
        res.send(error)
    }
})

// Activación del servidor
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})
const Pintura = require('../models/pinturas');

exports.getPinturas = async (req, res) => {

    try {

        const pinturas = await Pintura.find({});
        res.json(pinturas);

    } catch (error) {
        res.send(error)
    }
    
}
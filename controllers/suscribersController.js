// requerir los services que hacen las peticiones a la base de datos
const suscriberService = require("../services/suscribersService");

const getAllSuscribers = async (req, res) => {
    try {
        const suscriber = await Suscriber.find();
        res.send("algo");
    } catch (error) {
        console.log("algo fallo");
    }
};

const getOneSuscriber = (req, res) => {
    //hacer peticion a la base de datos
};

const createOneSuscriber = (req, res) => {
    const createdSuscriber = suscriberService.createOneSuscriber(req.body);

    res.status(201);
    res.send({ status: "ok", data: createdSuscriber });
    try {
    } catch (error) {
        console.log(error);
    }
};

const updateOneSuscriber = (req, res) => {
    res.send("update one suscriber");
};

const deleteOneSuscriber = (req, res) => {
    res.send("delete one suscriber");
};

module.exports = {
    getAllSuscribers,
    getOneSuscriber,
    createOneSuscriber,
    updateOneSuscriber,
    deleteOneSuscriber,
};

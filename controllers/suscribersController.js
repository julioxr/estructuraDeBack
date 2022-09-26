// requerir los services que hacen las peticiones a la base de datos
const suscriberService = require("../services/suscribersService");

const getAllSuscribers = async (_, res) => {
    try {
        const allSuscriber = await suscriberService.getAllSuscribers();
        res.json(allSuscriber);
    } catch (error) {
        console.log("algo fallo");
    }
};

const getOneSuscriber = async (req, res) => {
    try {
        const oneSuscriber = await suscriberService.getOneSuscriber(
            req.params.id
        );
        res.send(oneSuscriber);
    } catch (error) {
        res.send(error);
    }
    //hacer peticion a la base de datos
};

const createOneSuscriber = async (req, res) => {
    try {
        const createdSuscriber = await suscriberService.createOneSuscriber(
            req.body
        ); // esto controla las peticiones a la base de datos y retorna el objeto creado

        res.status(201);
        res.send({ status: "ok", data: createdSuscriber });
    } catch (error) {
        console.log(error);
    }
};

const updateOneSuscriber = async (req, res) => {
    try {
        const {
            body,
            params: { id },
        } = req;

        const updatedSuscriber = await suscriberService.updateOneSuscriber(
            id,
            body
        );
        res.send(updatedSuscriber);
        console.log("canal actualizado");
    } catch (error) {
        console.log(error);
        res.send(error);
    }
};

const deleteOneSuscriber = async (req, res) => {
    try {
        const deletedSuscriber = await suscriberService.deleteOneSuscriber(
            req.params.id
        );
        res.send(deletedSuscriber);
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getAllSuscribers,
    getOneSuscriber,
    createOneSuscriber,
    updateOneSuscriber,
    deleteOneSuscriber,
};

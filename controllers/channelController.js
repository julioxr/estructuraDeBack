const channelService = require("../services/channelService");

const createOneChannel = async (req, res) => {
    try {
        const channelCreated = channelService.createOneChannel(req.body);
        res.status(201);
        res.send(channelCreated);
    } catch (error) {
        console.log(error);
    }
};

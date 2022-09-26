const channelService = require("../services/channelService");

const createOneChannel = async (req, res) => {
    try {
        console.log(req.body);
        const channelCreated = channelService.createOneChannel(req.body);
        res.status(201);
        res.send(channelCreated);
        console.log(channelCreated);
    } catch (error) {
        console.log(error);
    }
};

const getAllChannels = async (req, res) => {
    try {
        const allChannels = await channelService.getAllChannels();
        res.json(allChannels);
    } catch (error) {
        console.log(error);
    }
};

const updateOneChannel = async (req, res) => {
    try {
        const {
            body,
            params: { id },
        } = req;
        const updatedChannel = await channelService.updateOneChannel(id, body);
        res.json(updatedChannel);
    } catch (error) {
        console.log(error);
    }
};

module.exports = { createOneChannel, getAllChannels, updateOneChannel };

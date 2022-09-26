const Channel = require("../models/channelSchema");

const createOneChannel = (newChannel) => {
    const channel = new Channel(newChannel);
    channel.save();
    return channel;
};

const getAllChannels = () => {
    return Channel.find();
};

const updateOneChannel = (id, changes) => {
    return Channel.findByIdAndUpdate(id, changes, { new: true });
};

module.exports = { createOneChannel, getAllChannels, updateOneChannel };

const Channel = require("../models/channelSchema");

const createOneChannel = (newChannel) => {
    const channel = new Channel(newChannel)
    channel.save()
    return channel
})
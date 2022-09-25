const { Schema, model } = require("mongoose");

const channelSchema = new Schema({
    channelName: {
        type: String,
    },
    quantityVideos: {
        type: Number,
    },
    likes: {
        type: Number,
    },
});

module.exports = model("Channel", channelSchema);

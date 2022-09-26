const { Schema, model } = require("mongoose");

const channelSchema = new Schema({
    channelName: {
        type: String,
        required: true,
    },
    quantityVideos: {
        type: Number,
        required: true,
    },
    likes: {
        type: Number,
        required: true,
    },
    suscribers: [{ type: Schema.Types.ObjectId, ref: "Suscriber" }],
});

module.exports = model("Channel", channelSchema);

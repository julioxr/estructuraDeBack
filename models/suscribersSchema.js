const { Schema, model } = require("mongoose");

const suscriberSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    suscribedToChannel: [
        {
            type: Schema.Types.ObjectId,
            ref: "Channel",
        },
    ],
    suscriberDate: {
        type: Date,
        required: true,
        default: Date.now,
    },
});

module.exports = model("Suscriber", suscriberSchema);

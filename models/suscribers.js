const mongoose = require("mongoose");

const suscriberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    suscribedToChannel: {
        type: String,
        required: true,
    },
    suscriberDate: {
        type: Date,
        required: true,
        default: Date.now,
    },
});

module.exports = mongoose.model("Suscriber", suscriberSchema);

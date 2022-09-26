const mongoose = require("mongoose");

const connection = () => {
    try {
        mongoose.connect(process.env.URIDB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("conectado a mongo");
    } catch (error) {
        console.log(error);
    }
};

module.exports = connection;

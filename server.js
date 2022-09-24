const express = require("express");
const mongoose = require("mongoose");
const app = express();
const subscriberRouter = require("./routes/suscribersRoutes");

require("dotenv").config();
const PORT = process.env.PORT || 5000;

app.use(express.json());

mongoose
    .connect(process.env.URIDB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("conectado a mongo"))
    .catch((err) => console.log(err));

app.use("/suscribers", subscriberRouter);

app.listen(PORT, () => {
    console.log("server conectado");
});

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const subscriberRouter = require("./routes/suscribersRoutes");

require("dotenv").config();

app.use(express.json());

mongoose
    .connect(process.env.URIDB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("conectado a mongo"))
    .catch((err) => console.log(err));

app.use("/suscribers", subscriberRouter);

app.listen(5000, () => {
    console.log("server conectado");
});

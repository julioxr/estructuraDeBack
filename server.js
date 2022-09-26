const express = require("express");
const connection = require("./db/connection");
const app = express();
const subscriberRouter = require("./routes/suscribersRoutes");
const channelRouter = require("./routes/channelRoutes");

require("dotenv").config();

const PORT = process.env.PORT || 5000;

app.use(express.json());
connection(); // conexion a base de datos

app.use("/suscribers", subscriberRouter);
app.use("/channels", channelRouter);

app.listen(PORT, () => {
    console.log("server conectado " + PORT);
});

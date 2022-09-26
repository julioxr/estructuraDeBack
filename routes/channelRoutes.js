const express = require("express");
const router = express.Router();
const channelController = require("../controllers/channelController");

router
    .get("/", channelController.getAllChannels)
    .post("/", channelController.createOneChannel)
    .patch("/:id", channelController.updateOneChannel);

module.exports = router;

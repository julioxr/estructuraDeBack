const express = require("express");
const router = express.Router();
const suscriberController = require("../controllers/suscribersController");

router
    .get("/", suscriberController.getAllSuscribers)
    .get("/:id", suscriberController.getOneSuscriber)
    .post("/", suscriberController.createOneSuscriber)
    .patch("/", suscriberController.updateOneSuscriber)
    .delete("/:id", suscriberController.deleteOneSuscriber);

module.exports = router;

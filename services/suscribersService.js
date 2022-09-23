const Suscriber = require("../models/suscribers");

const getAllSuscribers = () => {
    return;
};
const getOneSuscriber = () => {
    return;
};
const createOneSuscriber = (newSuscribrer) => {
    user = new Suscriber(newSuscribrer);
    user.save();
    return user;
};
const updateOneSuscriber = () => {
    return;
};
const deleteOneSuscriber = () => {
    return;
};

module.exports = {
    getAllSuscribers,
    getOneSuscriber,
    createOneSuscriber,
    updateOneSuscriber,
    deleteOneSuscriber,
};

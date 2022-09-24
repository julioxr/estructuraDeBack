// video que me ayudo a entender el tema https://www.youtube.com/watch?v=1LkmqA2BCxA&t=660s
// guia de mejores practicas sobre api https://www.freecodecamp.org/news/rest-api-design-best-practices-build-a-rest-api/
const Suscriber = require("../models/suscribers");

const getAllSuscribers = () => {
    return Suscriber.find();
};
const getOneSuscriber = (oneSuscriber) => {
    return Suscriber.findById(oneSuscriber);
};
const createOneSuscriber = (newSuscribrer) => {
    user = new Suscriber(newSuscribrer);
    user.save();
    return user;
};
const updateOneSuscriber = (id, changes) => {
    return Suscriber.findByIdAndUpdate(id, changes, { new: true });
};
const deleteOneSuscriber = (id) => {
    return Suscriber.findByIdAndDelete(id);
};

module.exports = {
    getAllSuscribers,
    getOneSuscriber,
    createOneSuscriber,
    updateOneSuscriber,
    deleteOneSuscriber,
};

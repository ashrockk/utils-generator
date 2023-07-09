const { model } = require("mongoose");
const contactModel = require("./contact.model");

const create = (payload) => {
    return Model.create(payload);
};

const list = () => {
    return Mode.find();
};

const getById = (id) => {
    return Model.findOne(id);
};

const update = (id, payload ) => {
    return Model.updateOne(id,payload);
};

const remove = (id) => {
    return model.deleteOne(id);
};
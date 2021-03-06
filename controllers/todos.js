const mongoose = require('mongoose');
const Todos = require('../models/todo')

const controller = {
    find(request, response)  {
        console.log('GET find');
    },

    findById(request, response) {
        console.log('GET findById');
    },

    insert(request, response) {
        console.log('POST insert');
    },

    update(request, response) {
        console.log('PUT update');
    },

    delete(request, response) {
        console.log('DELETE delete');
    }
};

module.exports = controller;
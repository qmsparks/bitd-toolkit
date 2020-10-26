// ANCHOR imports
const db = require('../models');

const index = (req, res) => {
    db.Component.find({}, (err, foundComponents) => {
        if (err) console.log('Error in components#index: ', err);

        if(!foundComponents.length) return res.status(200).json({"message": "No components found in db"});

        res.status(200).json({"components": foundComponents});
    })
}

const show = (req, res) => {

}

const create = (req, res) => {

}

const update = (req, res) => {

}

const destroy = (req, res) => {

}

module.exports = {
    index,
    show,
    create,
    update,
    destroy,
}
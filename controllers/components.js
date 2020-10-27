// ANCHOR imports
const db = require('../models');

// TODO refactor to async/await
const index = (req, res) => {
    db.Component.find({}, (err, foundComponents) => {
        if (err) console.log('Error in components#index: ', err);

        if(!foundComponents.length) return res.status(200).json({"message": "No components found in db"});

        res.status(200).json({"components": foundComponents});
    })
}

const show = (req, res) => {

}

const create = async (req, res) => {
    try {
        // TODO  doublecheck that the component being added is not already available to this user
        // TODO refactor to make sure these are being added to the request user's array
        const savedComponent = await db.Component.create(req.body);

        res.status(201).json({"component": savedComponent});

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 500,
            message: "Something went wrong. Please try again."
        })
    }
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
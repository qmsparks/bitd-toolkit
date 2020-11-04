// ANCHOR imports
const db = require('../models');
const utils = require('../utils');

const random  = async (req, res) => {
    try {
        console.log(req.params);

        const component = await utils.components.getComponent(req.params.tool, req.params.category)

        res.status(200).json({"component": component});
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 500,
            message: "Something went wrong. Please try again."
        })
    }
}

module.exports = {
    random,
}
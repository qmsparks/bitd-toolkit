// ANCHOR imports
const db = require('../models');
const utils = require('../utils');


const index = (req, res) => {

}

const generate = async (req, res) => {
    const tool = await utils.tools.generateTool(req.params.tool);
    res.status(200).json({"tool": tool});
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
    generate,
    create,
    update,
    destroy,
}
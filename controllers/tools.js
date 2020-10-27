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

// FIXME haha oops right now tool generation is just spitting out component names, but I've got this set up that it's looking for component ids
// obviously gonna have to reconfigure something
const create = async (req, res) => {
    try {
        const user = await db.User.findById(req.userId);
        const savedTool = await db.Tool.create(req.body);

        user.tools.push(savedTool._id);
        await user.save();

        res.status(201).json({"tool": savedTool});
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
    generate,
    create,
    update,
    destroy,
}
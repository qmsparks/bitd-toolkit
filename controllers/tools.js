// ANCHOR imports
const db = require('../models');
const utils = require('../utils');


const index = async (req, res) => {
    db.User.findById(req.userId)
        .populate({
            path: 'tools',
            populate: {path: 'components'}
        })
        .exec(function (err, foundUser){
            if (err) {
                console.log(err);
                return res.status(500).json({
                    status: 500,
                    message: "Something went wrong. please try again."
                })
            }
            console.log(foundUser);
            res.status(200).json({"tools": foundUser.tools});
        })
}


const generate = async (req, res) => {
    const tool = await utils.tools.generateTool(req.params.tool);
    res.status(200).json({"tool": tool});
}

const details = (req, res) => {
    const details = utils.tools.getDetails(req.params.tool);
    res.status(200).json({"details": details});
}

const show = (req, res) => {

}

// NOTE on the front end, will need to make sure that this request is sending component ids
const create = async (req, res) => {
    try {
        console.log(req.body)
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
    details,
    create,
    update,
    destroy,
}
// ANCHOR imports
const db = require('../models');
const utils = require('../utils');


const index = async (req, res) => {
    try {
        const foundUser = await db.User.findById(req.userId)
            .populate({
                path: 'tools',
                populate: {path: 'components'}
            });
            res.status(200).json({"tools": foundUser.tools});


    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 500,
            message: "Something went wrong. please try again."
        })
    }


}


const generate = async (req, res) => {
    const tool = await utils.tools.generateTool(req.params.tool);
    res.status(200).json({"tool": tool});
}

const details = (req, res) => {
    const details = utils.tools.getDetails(req.params.tool);
    res.status(200).json({"details": details});
}

const show = async (req, res) => {
    try {
        const foundTool = await db.Tool.findById(req.params.id)
            .populate('components');

        if (!foundTool) return res.status(200).json({"message": "No tool with that id found in db"});

        res.status(200).json({"tool": foundTool});


    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 500,
            message: "Something went wrong. please try again."
        })
    }
}

// NOTE on the front end, will need to make sure that this request is sending component ids
const create = async (req, res) => {
    try {
        const user = await db.User.findById(req.userId);
        const savedTool = await db.Tool.create(req.body);
        savedTool.user = req.userId;
        await savedTool.save();
        
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

const destroy = async (req, res) => {
    try {
        const deletedTool = await db.Tool.findById(req.params.id);
        
        if (deletedTool.user == req.userId) {
            const user = await db.User.findById(req.userId);
            await user.tools.pull(req.params.id);
            user.save()
            await db.Tool.findByIdAndDelete(req.params.id);

            res.status(200).json({"message": "Tool Deleted"});
        } 

        else {
            res.status(401).json({
                status: 401,
                message: "You are not authorized to delete this tool"
            })
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 500,
            message: "Something went wrong. Please try again."
        })
    }
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
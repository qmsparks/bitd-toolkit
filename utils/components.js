const db = require('../models');
const { getRandomComponent } = require('./tools');

/**
 * Switchboard for setting which tooltype is in question when the client requests a random component
 * @function getComponent
 * @param {*} tool 
 * @param {*} category 
 */
const getComponent = (tool, category) => {
    let tooltype = '';

    if (tool === 'score') tooltype = 'Score'; 
    if (tool === 'npc') tooltype = 'NPC';
    if (tool === 'ghost') tooltype = 'Ghost';
    if (tool === 'demon') tooltype = 'Demon';
    if (tool === 'cult') tooltype = 'Forgotten God Cult';

    return getComponentList(tooltype, category);
}

/**
 * Receives arguments from getComponent and queries the database for an array of applicable components
 * @function getComponentList
 * @param {*} tooltype 
 * @param {*} category 
 */
const getComponentList = async (tooltype, category) => {
    try {
        const components = await db.Component.find({tooltype: tooltype, category: category});
        return getRandomComponent(components);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getComponent,
}
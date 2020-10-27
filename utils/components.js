const db = require('../models');
const { getRandomComponent } = require('./tools');


const getComponent = (tool, category) => {
    let tooltype = '';

    if (tool === 'score') tooltype = 'Score'; 
    if (tool === 'npc') tooltype = 'NPC';
    if (tool === 'ghost') tooltype = 'Ghost';
    if (tool === 'demon') tooltype = 'Demon';
    if (tool === 'cult') tooltype = 'Forgotten God Cult';

    return getComponentType(tooltype, category);
}

const getComponentType = async (tooltype, category) => {
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
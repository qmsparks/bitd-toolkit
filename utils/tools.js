const db = require('../models');



const getRandomComponent = arr => {
    const randomIndex = Math.floor(Math.random() * arr.length);

    return arr[randomIndex].name;
}

const generateScore = async() => {
    try {
        const targets = await db.Component.find({tooltype: 'Score', category: 'CT'});
        const jobs = await db.Component.find({tooltype: 'Score', category: 'W'});
        const twists = await db.Component.find({tooltype: 'Score', category: 'TW'});
        const people = await db.Component.find({tooltype: 'Score', category: 'CP'});
        const factions = await db.Component.find({tooltype: 'Score', category: 'CF'})


        console.log('Client or Target: ', getRandomComponent(targets));
        console.log('Job Type: ', getRandomComponent(jobs));
        console.log('Twist or Complication: ', getRandomComponent(twists));
        console.log('Connected NPC: ', getRandomComponent(people));
        console.log('Connected Faction: ', getRandomComponent(factions));

    } catch (error) {
        console.log(error)
    }
}

generateScore();
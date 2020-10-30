const db = require('../models');

const getRandomComponent = (arr, num=1) => {
    const components = []
    for (let i = 0; i < num; i ++) {
        const randomIndex = Math.floor(Math.random() * arr.length);
        components.push(arr.splice(randomIndex, 1)[0]);
    }

    return components;
}


const generateTool = str => {
    if (str === 'score') return getScore();
    if (str === 'npc') return getNPC();
    if (str === 'ghost') return getGhost();
    if (str === 'demon') return getDemon();
    if (str === 'cult') return getCult();
}


const getScore = async() => {
    try {

        const targets = await db.Component.find({tooltype: 'Score', category: 'CT'});
        const jobs = await db.Component.find({tooltype: 'Score', category: 'W'});
        const twists = await db.Component.find({tooltype: 'Score', category: 'TW'});
        const people = await db.Component.find({tooltype: 'Score', category: 'CP'});
        const factions = await db.Component.find({tooltype: 'Score', category: 'CF'})

        const components = []
        components.push(
            getRandomComponent(targets), 
            getRandomComponent(jobs), 
            getRandomComponent(twists), 
            getRandomComponent(people), 
            getRandomComponent(factions)
        );


        return {
            "components": components,
        }

    } catch (error) {
        console.log(error)
    }
}

const getNPC = async() => {
    try {
        const looks = await db.Component.find({tooltype: 'NPC', category: 'L'});
        const goals = await db.Component.find({tooltype: 'NPC', category: 'G'});
        const methods = await db.Component.find({tooltype: 'NPC', category: 'PM'});
        const professions = await db.Component.find({tooltype: 'NPC', category: 'P'});
        const traits  = await db.Component.find({tooltype: 'NPC', category: 'T'});
        const interests = await db.Component.find({tooltype: 'NPC', category: 'I'});
        const quirks = await db.Component.find({tooltype: 'NPC', category: 'Q'});
        const heritages = await db.Component.find({tooltype: 'NPC', category: 'H'});
        const styles = await db.Component.find({tooltype: 'NPC', category: 'S'});
        const names = await db.Component.find({tooltype: 'NPC', category: 'N'});
        const surnames = await db.Component.find({tooltype: 'NPC', category: 'FN'});
        const aliases  = await db.Component.find({tooltype: 'NPC', category: 'A'});


        const components = []
        
        components.push(
            getRandomComponent(looks, 3), 
            getRandomComponent(goals), 
            getRandomComponent(methods), 
            getRandomComponent(professions), 
            getRandomComponent(traits, 3), 
            getRandomComponent(interests, 2), 
            getRandomComponent(quirks), 
            getRandomComponent(heritages), 
            getRandomComponent(styles, 2), 
            getRandomComponent(names), 
            getRandomComponent(surnames), 
            getRandomComponent(aliases)
            );

        return {
            "components": components,
        }
    } catch (error) {
        console.log(error);
    }
}

const getGhost = async() => {
    try {
        const traits = await db.Component.find({tooltype: 'Ghost', category: 'T' });
        const effects = await db.Component.find({tooltype: 'Ghost', category: 'SE' });

        const components = [];
        
        components.push(
            getRandomComponent(traits, 3),
            getRandomComponent(effects)
        );

        return {
            "components": components,
        }

    } catch (error) {
        console.log(error);
    }
}

const getDemon = async() => {
    try {
        const names = await db.Component.find({tooltype: 'Demon', category: 'N'});
        const features = await db.Component.find({tooltype: 'Demon', category: 'F'});
        const aspects = await db.Component.find({tooltype: 'Demon', category: 'AS'});
        const affinities= await db.Component.find({tooltype: 'Demon', category: 'AF'});
        const desires = await db.Component.find({tooltype: 'Demon', category: 'D'});

        const components = [];
        components.push(
            getRandomComponent(names),
            getRandomComponent(features),
            getRandomComponent(aspects),
            getRandomComponent(affinities),
            getRandomComponent(desires)
        );

        return {
            "components": components,
        }
    } catch (error) {
        console.log(error);
    }
}

const getCult = async() => {
    try {
        const gods = await db.Component.find({tooltype: 'Forgotten God Cult', category: 'G'});
        const practices = await db.Component.find({tooltype: 'Forgotten God Cult', category: 'P'});

        const components = [];
        components.push(
            getRandomComponent(gods),
            getRandomComponent(practices)
        );

        return {
            "components": components,
        }
    } catch (error) {
        console.log(error);
    }
}


// FIXME return an array of individual objects instead of one object, just to make the front end a littl easier
const getDetails = tooltype => {
    if (tooltype === 'score') {
        return {
            "Client or Target": 1,
            "Job Type": 1,
            "Twist or Complication": 1,
            "Connected NPC": 1,
            "Connected Faction": 1
        }
    }
    if (tooltype === 'npc') {
        return {
            "Name": 1,
            "Alias": 1,
            "Heritage": 1,
            "Looks": 3,
            "Style Touchstones": 2,
            "Profession": 1,
            "Goal": 1,
            "Preferred Method": 1,
            "Personality Traits": 3,
            "Interests": 2,
            "Quirk": 1
        }
    }
    if (tooltype === 'ghost') {
        return {
            "Traits": 3,
            "Secondary Effect": 1
        }
    }
    if (tooltype === 'demon') {
        return {
            "Name": 1,
            "Demonic Feature": 1,
            "Aspect": 1,
            "Affinity": 1,
            "Demonic Desire": 1
        }
    }
    if (tooltype === 'cult') {
        return {
            "God": 1,
            "Cult Practice": 1
        }
    }
}

module.exports = {
    generateTool,
    getRandomComponent,
    getDetails,
}
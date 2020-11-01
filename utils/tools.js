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
            getRandomComponent(names), 
            getRandomComponent(surnames), 
            getRandomComponent(aliases),
            getRandomComponent(heritages), 
            getRandomComponent(looks, 3), 
            getRandomComponent(styles, 2), 
            getRandomComponent(professions), 
            getRandomComponent(goals), 
            getRandomComponent(methods), 
            getRandomComponent(traits, 3), 
            getRandomComponent(interests, 2), 
            getRandomComponent(quirks), 
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

const getDetails = tooltype => {
    if (tooltype === 'score') {
        return [
            {category: "Client or Target", number: 1},
            {category: "Job Type", number: 1},
            {category: "Twist or Complication", number: 1},
            {category: "Connected NPC", number: 1},
            {category: "Connected Faction", number: 1}
        ]
        
    }
    if (tooltype === 'npc') {
        return [
            { category: "First Name", number: 1},
            {category: "Surname", number: 1},
            {category: "Alias", number: 1},
            {category: "Heritage", number: 1},
            {category: "Looks", number: 3},
            {category: "Style Touchstones", number: 2},
            {category: "Profession", number: 1},
            {category: "Goal", number: 1},
            {category: "Preferred Method", number: 1},
            {category: "Personality Traits", number: 3},
            {category: "Interests", number: 2},
            {category: "Quirk", number: 1}
        ]
    }
    if (tooltype === 'ghost') {
        return [ 
            {category: "Traits", number: 3},
            {category: "Secondary Effect", number: 1}
        ]
    }
    if (tooltype === 'demon') {
        return [
            {category: "Name", number: 1},
            {category: "Demonic Feature", number: 1},
            {category: "Aspect", number: 1},
            {category: "Affinity", number: 1},
            {category: "Demonic Desire", number: 1}
        ]
    }
    if (tooltype === 'cult') {
        return [
            {category: "God", number: 1},
            {category: "Cult Practice", number: 1}
        ]
    }
}

module.exports = {
    generateTool,
    getRandomComponent,
    getDetails,
}
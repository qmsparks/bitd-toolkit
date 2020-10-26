const db = require('../models');



const getRandomComponent = arr => {
    const randomIndex = Math.floor(Math.random() * arr.length);

    return arr[randomIndex].name;
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

        return {
            "CT": getRandomComponent(targets),
            "W": getRandomComponent(jobs),
            "TW": getRandomComponent(twists),
            "CP": getRandomComponent(people),
            "CF": getRandomComponent(factions)
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

        return {
            "L": getRandomComponent(looks),
            "G": getRandomComponent(goals),
            "PM": getRandomComponent(methods),
            "P": getRandomComponent(professions),
            "T": getRandomComponent(traits),
            "I": getRandomComponent(interests),
            "Q": getRandomComponent(quirks),
            "H": getRandomComponent(heritages),
            "S": getRandomComponent(styles),
            "N": getRandomComponent(names),
            "FN": getRandomComponent(surnames),
            "A": getRandomComponent(aliases)
        }
    } catch (error) {
        console.log(error);
    }
}

const getGhost = async() => {
    try {
        const traits = await db.Component.find({tooltype: 'Ghost', category: 'T' });
        const effects = await db.Component.find({tooltype: 'Ghost', category: 'SE' });

        return {
            "T": getRandomComponent(traits),
            "SE": getRandomComponent(effects)
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

        return {
            "N": getRandomComponent(names),
            "F": getRandomComponent(features),
            "AS": getRandomComponent(aspects),
            "AF": getRandomComponent(affinities),
            "D": getRandomComponent(desires)
        }
    } catch (error) {
        console.log(error);
    }
}

const getCult = async() => {
    try {
        const gods = await db.Component.find({tooltype: 'Forgotten God Cult', category: 'G'});
        const practices = await db.Component.find({tooltype: 'Forgotten God Cult', category: 'P'});

        return {
            "G": getRandomComponent(gods),
            "P": getRandomComponent(practices)
        }
    } catch (error) {
        console.log(error);
    }
}




module.exports = {
    generateTool,
}
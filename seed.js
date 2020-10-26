const db = require('./models');
const data = require('./components.json');

db.Component.deleteMany({}, (err, deletedGames) => {
    db.Component.create(data.components, (err, seededComponents) => {
        if (err) console.log(err);

        console.log(data.components.length, 'components created successfully');

        process.exit();
    });
});
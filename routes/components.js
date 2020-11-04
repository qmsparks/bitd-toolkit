// ANCHOR imports
const router = require('express').Router();
const ctrl = require('../controllers');

// ANCHOR routes
router.get('/:tool/:category', ctrl.components.random);


// ANCHOR exports
module.exports = router;
// ANCHOR imports
const router = require('express').Router();
const ctrl = require('../controllers');

// ANCHOR routes
// routes currently implemented
router.get('/', ctrl.components.index);
router.get('/:tool/:category', ctrl.components.random);
router.post('/', ctrl.components.create);


// routes yet to come
router.get('/:id', ctrl.components.show);
router.put('/:id', ctrl.components.update);
router.delete('/:id', ctrl.components.destroy);

// ANCHOR exports
module.exports = router;
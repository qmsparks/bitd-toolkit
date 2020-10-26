// ANCHOR imports
const router = require('express').Router();
const ctrl = require('../controllers');

// ANCHOR routes
router.get('/', ctrl.components.index);
router.get('/:id', ctrl.components.show);
router.post('/', ctrl.components.create);
router.put('/:id', ctrl.components.update);
router.delete('/:id', ctrl.components.destroy);

// ANCHOR exports
module.exports = router;
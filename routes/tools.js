// ANCHOR imports
const router = require('express').Router();
const ctrl = require('../controllers');

// ANCHOR routes
router.get('/', ctrl.tools.index);
router.get('/:id', ctrl.tools.show);
router.post('/', ctrl.tools.create);
router.put('/:id', ctrl.tools.update);
router.delete('/:id', ctrl.tools.destroy);

// ANCHOR exports
module.exports = router;
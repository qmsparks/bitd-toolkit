// ANCHOR imports
const router = require('express').Router();
const ctrl = require('../controllers');
const authRequired = require('../middleware/authRequired');

// ANCHOR routes
router.get('/', ctrl.components.index);
router.get('/:id', ctrl.components.show);
router.post('/', authRequired, ctrl.components.create);
router.put('/:id', authRequired, ctrl.components.update);
router.delete('/:id', authRequired, ctrl.components.destroy);

// ANCHOR exports
module.exports = router;
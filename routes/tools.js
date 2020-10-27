// ANCHOR imports
const router = require('express').Router();
const ctrl = require('../controllers');
const authRequired = require('../middleware/authRequired');

// ANCHOR routes
router.get('/', ctrl.tools.index);
router.get('/:id', ctrl.tools.show);
router.get('/generate/:tool', ctrl.tools.generate);
router.post('/', authRequired, ctrl.tools.create);
router.put('/:id', authRequired, ctrl.tools.update);
router.delete('/:id', authRequired, ctrl.tools.destroy);

// ANCHOR exports
module.exports = router;
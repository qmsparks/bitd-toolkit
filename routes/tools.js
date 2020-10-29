// ANCHOR imports
const router = require('express').Router();
const ctrl = require('../controllers');
const authRequired = require('../middleware/authRequired');

// ANCHOR routes
// routes currently utilized
router.get('/', authRequired, ctrl.tools.index);
router.get('/generate/:tool', ctrl.tools.generate);
router.get('/details/:tool', ctrl.tools.details);
router.post('/', authRequired, ctrl.tools.create);
router.get('/:id', ctrl.tools.show);

// routes in progress

// routes to come
router.put('/:id', authRequired, ctrl.tools.update);
router.delete('/:id', authRequired, ctrl.tools.destroy);

// ANCHOR exports
module.exports = router;
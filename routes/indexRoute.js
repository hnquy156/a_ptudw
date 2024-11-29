const router = require('express').Router();
const controller = require('../controllers/indexController');

router.get('/', controller.showMenu);
router.post('/', controller.sendMessage);

module.exports = router;

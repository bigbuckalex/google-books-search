const router = require('express').Router();
const googleController = require('../../controllers/googleController');

router.route("/").get(googleController.bookSearch);

module.exports = router;
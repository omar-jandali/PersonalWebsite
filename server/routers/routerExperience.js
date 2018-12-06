const router = require('express').Router();
const controllerExperience = require('../controllers/controllerExperience')

router.route('/')
  .get(controllerExperience.get)
  .post(controllerExperience.post)
  .patch(controllerExperience.patch)
  .delete(controllerExperience.delete)

module.exports = router;
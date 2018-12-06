const router = require('express').Router();
const controllerEducation = require('../controllers/controllerApplication')

router.route('/')
  .get(controllerEducation.get)
  .post(controllerEducation.post)
  .patch(controllerEducation.patch)
  .delete(controllerEducation.delete)

module.exports = router;

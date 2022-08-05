const { Router } = require('express');
const { check } = require('express-validator');
const { uploadImage } = require('../controllers/image');
const { validateFields } = require('../middlewares/validate-fields');

const router = Router();

router.post(
  '/',
  [
    check('image', 'La imagen en base64 es obligatoria.').not().isEmpty(),
    check('ext', 'La extensión es obligatoria.').not().isEmpty(),
    validateFields,
  ],
  uploadImage
);

module.exports = router;

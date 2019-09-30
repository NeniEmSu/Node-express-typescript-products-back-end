import express from 'express';
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const stuffCtrl = require('../controllers/stuff');



router.post('/', auth, multer, stuffCtrl.createThing);

router.get('/', stuffCtrl.getAllThings);

router.get('/:id', auth, stuffCtrl.getOneThing);

router.put('/:id', auth, multer, stuffCtrl.updateOneThing);

router.delete('/:id', auth, stuffCtrl.deleteOneThing);



module.exports = router;
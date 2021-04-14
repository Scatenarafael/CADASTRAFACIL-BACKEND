const express = require('express');
const router = express.Router();
const multer = require('multer');
const clientController = require('../controllers/clientController');
const cors = require('cors');


const uploadConfig = require('../config/upload');

const options = {
  origin:"http://localhost:3000"
};
const upload = multer(uploadConfig);

router.use(cors(options));

router.get('/show-all-clients', clientController.showAllClients);

router.get('/show-client/:id', clientController.showClient);

router.post('/create-client', upload.array('images') ,clientController.saveClient);

router.delete('/delete-client/:id', clientController.deleteClient);



module.exports = router;
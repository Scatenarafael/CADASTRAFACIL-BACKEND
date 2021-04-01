const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');
const cors = require('cors');

const options = {
  origin:"http://localhost:3000"
};

router.use(cors(options));

router.get('/show-all-clients', clientController.showAllClients);

router.get('/show-client/:id', clientController.showClient);

router.post('/create-client', express.urlencoded({ extended: true }), clientController.saveClient);

router.delete('/delete-client/:id', clientController.deleteClient);



module.exports = router;
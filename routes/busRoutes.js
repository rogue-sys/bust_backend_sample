const express = require('express');
const busController = require('../controllers/busController');

const router = express.Router();

router.route('/buses')
  .get(busController.getAllBuses)
  .post(busController.createBus);

router.route('/buses/:id')
  .get(busController.getBusById)
  .patch(busController.updateBusById)
  .delete(busController.deleteBusById);

module.exports = router;
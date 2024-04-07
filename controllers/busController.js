const Bus = require('../models/busModel');

// Create new bus
exports.createBus = async (req, res) => {
  try {
    const newBus = await Bus.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        bus: newBus,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

// Get all buses
exports.getAllBuses = async (req, res) => {
  try {
    const buses = await Bus.find();
    res.status(200).json({
      status: 'success',
      results: buses.length,
      data: {
        buses,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  }
};

// Get bus by ID
exports.getBusById = async (req, res) => {
  try {
    const bus = await Bus.findById(req.params.id);
    if (!bus) {
      return res.status(404).json({
        status: 'fail',
        message: 'Bus not found',
      });
    }
    res.status(200).json({
      status: 'success',
      data: {
        bus,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  }
};

// Update bus by ID
exports.updateBusById = async (req, res) => {
  try {
    const updatedBus = await Bus.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedBus) {
      return res.status(404).json({
        status: 'fail',
        message: 'Bus not found',
      });
    }
    res.status(200).json({
      status: 'success',
      data: {
        bus: updatedBus,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

// Delete bus by ID
exports.deleteBusById = async (req, res) => {
  try {
    const deletedBus = await Bus.findByIdAndDelete(req.params.id);
    if (!deletedBus) {
      return res.status(404).json({
        status: 'fail',
        message: 'Bus not found',
      });
    }
    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  }
};
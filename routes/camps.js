const express = require('express');
const {getCamps,getCamp,createCamp,updateCamp,deleteCamp} = require('../controllers/camps');

//Include other resource routes
const reservationRouter = require('./reservations');
const router = express.Router();

const {protect,authorize} = require('../middleware/auth');

//Re-route into other resource routers
router.use('/:campId/reservations',protect,reservationRouter);

router.route('/').get(getCamps).post(protect,authorize('admin'),createCamp);
router.route('/:id').get(getCamp).put(protect,authorize('admin'),updateCamp).delete(protect,authorize('admin'),deleteCamp);

module.exports = router;
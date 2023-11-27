const express = require('express');

const router = express.Router();

const adminModel = require('../models/User');

const { createUser } = userModel;
const { getUsers } = UserModel;


router.get('/', (req, res) => {
    return res.json(allOrders());
  });
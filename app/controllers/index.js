var express = require('express')
    , router = express.Router()
    , User = require('../models/comment');

router.use('/users', require('./User'));
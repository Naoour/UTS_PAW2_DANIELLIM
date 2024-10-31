var express = require('express');
var router = express.Router();
const NamaMahasiswaController = require('../controller/namaMahasiswa');

router.post('/', NamaMahasiswaController.createNamaMahasiswa)

module.exports = router;
const mongoose = require("mongoose");

const namaMahasiswaSchema = new mongoose.Schema({
    nama : {type : String, require : true},
    alamat : {type : String, require : true},
    tujuan : [{type : String, require : true}]
});

module.exports = mongoose.model("NamaMahasiswa", namaMahasiswaSchema);
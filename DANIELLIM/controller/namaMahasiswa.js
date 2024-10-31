const NamaMahasiswa = require('../model/NamaMahasiswa');

const createNamaMahasiswa = (req, res)=>{
    const namaMahasiswa = new NamaMahasiswa({
        nama : req.body.nama,
        alamat : req.body.alamat,
        tujuan : req.body.tujuan,
    });

    namaMahasiswa.save()
    .then((createNamaMahasiswa)=>{
        res.status(201).json({
            message : "Data berhasil di simpan",
            NameId : createNamaMahasiswa.id
        });
    });
};

const readNamaMahasiswa = (req, res)=>{
    NamaMahasiswa.find()
    .then((documents)=>{
        res.status(201).json({
            message : "Mendapatkan data",
            namaMahasiswas : documents
        });
    });
}

module.exports = {createNamaMahasiswa, readNamaMahasiswa};
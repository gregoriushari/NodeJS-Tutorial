function cetakNama(nama){
    return `Halo, nama saya ${nama}`;
}

const PI = 3.14;

const mahasiswa = {
    nama : 'Hariyanto',
    umur : 20,
    cetakMhs(){
        return`Halo nama saya ${this.nama} dan saya umur ${this.umur} tahun `
    }
}

class Orang{
    constructor(){
        console.log("objek orang telah dibuka")
    }
}

/*
module.exports.cetakNama = cetakNama;
module.exports.PI=PI;
module.exports.mhs = mahasiswa;
module.exports.org = Orang;

module.exports = {
    cetakNama: cetakNama,
    PI : PI,
    mhs: mahasiswa,
    org: Orang
}
*/

module.exports ={cetakNama, PI, mahasiswa, Orang}
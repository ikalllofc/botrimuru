const fetch = require('node-fetch')
const fs = require('fs')
const crypto = require('crypto')
const _Daftar = JSON.parse(fs.readFileSync('./X2/Daftar.json'))
            const createSerial = (size) => {
        	return crypto.randomBytes(size).toString('hex').slice(0, size)
            }	
            const addDaftarUser = (userid, sender, time, serials) => {
	        const obj = { id: userid, name: sender, time: time, serial: serials }
	        _Daftar.push(obj)
          	fs.writeFileSync('./X1/Daftar.json', JSON.stringify(_Daftar))
            }	
            const checkDaftarUser = (sender) => {
	        let status = false
	        Object.keys(_Daftar).forEach((i) => {
		    if (_Daftar[i].id === sender) {
			status = true
		    }
	        })
	        return status
            } 
module.exports = {createSerial, addDaftarUser, checkDaftarUser }                      
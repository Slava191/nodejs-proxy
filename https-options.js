const fs = require('fs');

require('dotenv').config()

const sslCrtDir = process.env.SSL_CRT_DIR;
const sslCrtName = process.env.SSL_CRT_NAME;

const sslCrt = `${sslCrtDir}/${sslCrtName}`

module.exports = {
    key: fs.readFileSync(`${sslCrt}.key`),
    cert: fs.readFileSync(`${sslCrt}.crt`),
    ca: fs.readFileSync(`${sslCrt}.ca`)
};
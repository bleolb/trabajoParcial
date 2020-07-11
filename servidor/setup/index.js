;
'use strict'

const env = require('dotenv').config(),
    app = require('./app'),
    port = process.env.PORT || 3001

app.listen(port, (e) => {
    if (!e) {
        console.log(`El servicio esta funcionando en el puerto https://localhost:${port}`)
    } else {
        console.log('El servicio no esta funcionando')
    }
})
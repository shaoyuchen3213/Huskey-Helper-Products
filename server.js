const express = require('express');
require('dotenv/config');
const Userouter = require("./router/productsRoutes.js")

const app = express()
const port = process.env.PORT || 3000;



app.use(express.json());
app.use('/products', Userouter);



app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
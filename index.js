const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hell7777777777o Wo111rld!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

const app = require('./src/app')
const dotenv = require('dotenv').config()

app.listen(process.env.PORT || 3000 , (req, res) => {
    console.log('server is listenig on port...');
})

app.get('/', (req, res) => {
    res.send('well come to port')
})

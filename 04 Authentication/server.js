require('dotenv').config()
const app = require('./src/app.js')


app.listen(process.env.PORT || 3000, (res) =>{
    console.log('server is running on')
})

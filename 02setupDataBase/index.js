const app = require('./src/app')

// app server ko start karne ke listen karna hota he tab server start hota he 

app.listen(3000, (req, res)=>{
    console.log('server in running on port 3000');
}) // ye server create ho chuka he 

// ab is par koi bhi request kar sakte he 

app.get('/', (req, res)=>{
    res.send('we are on the  root page ....')
} )

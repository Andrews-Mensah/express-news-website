const express = require('express');
const bodyParser = require('body-parser')

const app = express ();

const port = 4000; 


app.use(express.static('public'))
app.use('/css', express.static (__dirname + 'public/css'))
app.use('/img', express.static (__dirname + 'public/img'))


app.use(bodyParser.urlencoded({extended: true}))



app.set('views', 'views')
app.set('view engine', 'ejs')



const newsRouter = require('./routes/home')

app.use('/', newsRouter)
app.use('/article', newsRouter)





app.listen(port, ()=> {
    console.log(`Server listening on port ${port}`)
})
const path = require('path')
const express = require ('express')
const hbs = require('hbs')
const ongkir = require('../utils/rajaongkir.js')

const app = express()
const publicDirPath = path.join(__dirname,'../public')
//const viewsPath = path.join(__dirname, '../templates')

app.set('view engine','hbs')
//app.set('views', viewsPath)
app.use(express.static(publicDirPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Home',  
        name: 'Dipa'
    })
})

app.get('/portofolio', (req, res) => {
    res.render('portofolio', {
        title: 'hubungi saya',
        phone: '089863897'
    })
})

app.get('/rajaongkir', (req, res) => { 
    if (!req.query.id){
        return res.send({
            error: 'you must provide id'
        })
    }

    ongkir (req.query.id, (error, data) => {
        return res.send(data)
    })
})


app.listen(3000,() =>{
    console.log('server is up on port 3000.')
})
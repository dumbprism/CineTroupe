const express = require('express')
const mainPageRouter = require('./routes/MainPageRouter')
const bodyParser = require('body-parser')
const path = require('path')
const PORT = 3000
const app = express()


const reviews = [
    {
        username : 'alfredo',
        film: 'harry potter',
        rating: 4,
        review : 'very magical'
    },
    {
        username : 'dumbprism',
        film : 'the florida project',
        rating : 3,
        review : "very non surreal yet surreal"
    }
]

app.use(bodyParser.urlencoded({ extended: true }));

app.set("views", {
    layout: false
})

app.use(express.static(__dirname + '/public'))
app.use('/', mainPageRouter)

app.set("view engine", "ejs")
app.set("views", __dirname + "/views")


app.post('/dashboard', (req, res) => {

   
    const userName = req.body.username
    const film = req.body.film
    const rating = req.body.rating
    const review = req.body.review

    reviews.push({
        username : userName,
        film  : film ,
        rating : rating,
        review : review
    })
    
    res.render('dashboard.ejs',{reviews:reviews})

    
})

app.get('/review', (req, res) => {
    res.sendFile(path.join(__dirname + "/public", "review.html"))
})

app.use((req,res) => {
    res.status(400).render('404')
})

app.listen(PORT, (err) => {
    if (err) {
        console.error(err)
    }
    console.log(`Server listening on : http://localhost:${PORT}`)
})

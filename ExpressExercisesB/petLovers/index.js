import express from "express"
import bodyParser from  "body-parser"
import userRoute from './routes/user.js'
// import petRoute from './routes/pet.js'

const router = express.Router()
const app = express()
const PORT = process.env.PORT || 5000

//middleware declaration global
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use('/', router)
app.use('/user', userRoute)
// app.use('/pet', petRoute)

const logger = (req, res, next) => {
    console.log(`request url is ${req.url} and request method is ${req.method}`)
    next()
}

app.use(logger)


// app.get('/', (req, res) => {
//     res.send("user list")
// })

app.listen(5000, () => console.log(`Listening at http://localhost:${PORT}`))


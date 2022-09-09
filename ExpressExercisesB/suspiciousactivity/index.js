import express from "express"
import bodyParser from  "body-parser"
import fs from "fs"

const router = express.Router()
const app = express()
const PORT = 3000

//middleware declaration global
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use('/', router)

const sampleData = [
    {
        name: "Captain America",
        identity: "Super Hero"
    },
    {
        name: "Iron Man",
        identity: "Super Hero"
    }
]

const getActualRequestDurationInMilliseconds = start => {
    const NS_PER_SEC = 1e9 //  convert to nanoseconds
    const NS_TO_MS = 1e6 // convert to milliseconds
    const diff = process.hrtime(start)
    return (diff[0] * NS_PER_SEC + diff[1]) / NS_TO_MS
  }
  
  
let logger = (req, res, next) => { //middleware function
    let current_dateTime = new Date()
    let formatted_date =
   
    current_dateTime.toUTCString() +
    "  " +
    // current_datetime.getFullYear() +
    // "-" +
    // (current_datetime.getMonth() + 1) +
    // "-" +
    // current_datetime.getDate() +
    // " " +
    current_dateTime.getHours() +
    ":" +
    current_dateTime.getMinutes() +
    ":" +
    current_dateTime.getSeconds() 
    
    let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    let method = req.method
    let url = req.url
    const start = process.hrtime()
    const durationInMilliseconds = getActualRequestDurationInMilliseconds(start)

    // Get Status Code
    // Way 1: Override res.end
    const originalEnd = res.end
    res.end = (data, encoding) => {
        const status = res.statusCode
        let log = `${ip} accessed /hello with ${method} at ${url} ${formatted_date} ${durationInMilliseconds.toLocaleString()} (Philippine Standard Time) with status code ${status}.`
        console.log(log)
    
        fs.appendFile("log.txt", log + "\n", err => {
            if (err) {
                console.log(err)
                }
            });
        
        originalEnd.call(res, data, encoding)
    }

    // Way 2: Event Listeners
    // res.on('finish', () => {
    //     console.log(res.statusCode)
    // })

    // Way 3: Use 3rd party library
    // https://www.npmjs.com/package/on-finished

    next()
}

app.use(logger)

// app.use('/', router);

app.set('trust proxy',true)

app.get('/', logger, (req, res) => {
    res.status(200).send('Welcome to the home page.')
})

app.get('/about', logger, (req, res) => {
    res.status(200).send('This is the about page.')
})

app.get('/contact', logger, (req, res) => {
    res.status(200).send('This is the contact page.')
})

app.post('/data', logger, (req, res) => {
    res.json(sampleData);
})

app.put('*', logger, (req, res) => {
    res.status(404).send("404")
})

app.delete('/', logger, (req, res) => {
    res.status(400).send("Delete request called")
})
app.listen(PORT, () => {
    console.log(`App is listening to port ${PORT}`)
})

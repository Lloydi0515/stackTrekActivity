import { connectDatabase } from './pool.js'
import bodyParser from 'body-parser'
import express from 'express'
import bcrypt from 'bcryptjs'
import { v4 as uuidv4 } from 'uuid'
import { generateJwt } from './jwt/jwtGenerator.js'
import { auth } from './middleware/auth.js'

const pool = connectDatabase()
const app = express()
const PORT = 8000

app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))


app.post('/register', async (req, res) => {
    try {
        // take the username and password from the req.body
        const {
            username,
            password
        } = req.body
        // check if the user is already existing
        const user = await pool.query(`SELECT * FROM users WHERE
        username = $1`, [username])

        if (user.rows.length > 0) {
            res.status(401).send("User already exists")
        }
        // Setup Bcrypt for password hashing
       
        const saltRound = 10
        const salt = await bcrypt.genSalt(saltRound)
        const bcryptPassword = await bcrypt.hash(password, salt)

        // Add the new user into the database
        // generate the uuid using the uuidv4()functions
        const newUser = await pool.query(` INSERT INTO users (uuid, username, password)
        VALUES ($1, $2, $3) RETURNING *`, [uuidv4(), username, bcryptPassword])

        // generate and return the JWT token
        const token = generateJwt(newUser.rows[0])

        res.json({
            token
        })

    } catch (error) {
        console.log(error.message)
        res.status(500).send(error.message)
    }
})

app.post('/login', async (req, res ) => {
    try {
        // take the username and password from the req.body
        const {
            username,
            password
        } = req.body
        // check if the user is not existing
        const user = await pool.query(`SELECT * FROM users WHERE username = $1`, [username])
        if (username.rows.length < 0 ) {
            res.status(401).send("User does not exist")
        }
        // check if the password matches using bcrypt
        const validPassword = await bcrypt.compare(password, user.rows[0].password)
        if (!validPassword) {
            return res.status(401).json("Password or Email is incorrect")
        }
        // generate and return the JWT
        const token = generateJwt(user.rows[0])
        res.json({
            token
        })

    } catch (error) {
        console.error(error.message)
        res.status(500).send({
            msg: "Unauthenticated"
        })
    }
})

// provide the aut middleware

app.get('/verify', auth, async (req, res) => {
    try {
        // return the user object
        res.json(req.user)
    } catch (error) {
        console.error(error.message)
        res.status(500).send({
            msg: "Unauthenticated"
        })
    }
})

pool.connect((err) => {
    if (err) {
        console.log(err)
    }
    else {
        app.listen(PORT, () => {
            console.log(`Server has started on http://localhost:${PORT}`)
        })
    }
})
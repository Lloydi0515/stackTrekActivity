import express from "express"
import { v4 as uuidv4 } from 'uuid'
import { updateJSON, readJSON } from "../utils/index.js"


const router = express.Router()
var users 

// const ROLES = {
// 	ROLE: "ADMIN",
	
// }

// const hasROLES = (req, res, next) => {
// 	if (req.ROLE === "ADMIN")
// 	next()
// 	else {
// 		console.log("forbidden")
// 		res.status(403).send("Forbidden")	
// 	}
// }
readJSON("user.json").then(data => users = data)  /* read json and then assign to users */

router.get('/', (req, res) => {
    res.json(users)
})

router.get('/login', (req, res) => {
    res.send("Welcome")
})

router.post('/user', (req, res) => {
    const { username, password, email } = req.body
    const startingId = uuidv4()

    users.push({
           id: startingId,
           username: username,
           password: password,
           email: email
    })
    updateJSON(users, "user.json")
    res.status(201).send(`${username} with starting id ${startingId} is created`)
})

router.put('/roles', (req, res) => {
    // res.json(req.roles)
    const { id, role } = req.body
    
    if (!id)
        return res.status(400).send("missing id")
    
    const user = users.filter(user => user.id === id)
    if (user.length == 0) {
        res.status(400).send("users not found")
    } else {
        users.forEach((user, index) => {
            if(user.id === id) {
                const newUser = {
                    id: id,
                    username: user.username,
                    role: role || user.role,
                    password: user.password,
                    email: user.email
                }
                users[index] = newUser
            }
        })
        updateJSON(users, "user.json")
        res.status(200).send(`is added as a  ${role} roles`)
    }
})

router.delete('/', (req, res) => {
    res.send("successfully deleted")
})

export default router

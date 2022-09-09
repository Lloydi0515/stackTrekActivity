import express from "express"
import { v4 as uuidv4 } from 'uuid'
import { updateJSON, readJSON } from "../utils/petIndex.js"


const router = express.Router()
var pet 


readJSON("pet.json").then(petData => pet = petData)  /* read json and then assign to users */

router.get('/', (req, res) => {
    res.send(pets)
})

router.get('/new', (req, res) => {
    res.send("This is the new user")
})

router.post('/pet', (req, res) => {
    const { user_id, name, type } = req.body
    const startingId = uuidv4()

    users.push({
           id: startingId,
           user_id: user_id,
           name: name,
           type: type
    })
    updateJSON(pet, "pet.json")
    res.status(201).send(`${username} with starting id ${startingId} is created`)
})

// make an array object for pets with type

router.put('/newPet', (req, res) => {
    const { user_id, type } = req.body
    
    if (!user_id && type)
        return res.status(400).send("Sorry Invalid")
    
    const user = pets.filter(user => user.id === id)
    if (user.length == 0) {
        res.status(400).send("users not found")
    } else {
        pets.forEach((user, index) => {
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
        updateJSON(users, "pet.json")
        res.status(200).send(`is added as a  ${role} roles`)
    }
})

router.delete('/', (req, res) => {
    res.send("successfully deleted")
})

export default router

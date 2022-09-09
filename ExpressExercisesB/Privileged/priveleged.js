import express from "express"
import bodyParser from  "body-parser"

const router = express.Router()
const app = express()
const PORT = process.env.PORT || 8000

//middleware declaration global
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use('/', router)

const userList = [
	{ id: 0,  privileges: ['MASTER'] },
	{ id: 1,  privileges: ['VIEW'] },
	{ id: 2,  privileges: ['VIEW', 'INSERT', 'MODIFY', 'DELETE'] },
	{ id: 3,  privileges: ['VIEW', 'DELETE'] },
	{ id: 4,  privileges: ['VIEW', 'INSERT'] },
	{ id: 5,  privileges: ['VIEW'] },
	{ id: 6,  privileges: ['MASTER'] },
	{ id: 7,  privileges: ['MASTER'] },
	{ id: 8,  privileges: ['VIEW'] },
	{ id: 9,  privileges: [] },
	{ id: 10, privileges: [] },
	{ id: 11, privileges: ['VIEW', 'INSERT', 'MODIFY'] },
	{ id: 12, privileges: ['VIEW', 'MODIFY'] },
	{ id: 13, privileges: ['VIEW'] },
	{ id: 14, privileges: ['VIEW', 'DELETE'] },
	{ id: 15, privileges: ['VIEW'] }
]

const PRIVILEGES = {
	MASTER: "MASTER",
	VIEW: "VIEW",
	INSERT: "INSERT",
	MODIFY: "MODIFY",
	DELETE: "DELETE"
}

/* ==== Do not modify ==== */
/* These are used to generate a simple id */

let curID = 0
const getID = (req, res, next) => {
	req.userID = curID
	curID = (curID + 7) % 16;	
	next()
}

app.use(getID)

/* ==== Do not modify ==== */

// Create necessary middleware
// ADD CODE HERE

const getPrivilege = (req, res, next) => {
	// Does User ID exist?
	let user = userList.filter(user => user.id === req.userID)
	if (!user) res.status(403).send("User not found")

	// User ID exists, attach privileges to request
	req.privileges = user[0].privileges
	console.log(req.userID, req.privileges)

	next()
}
app.use(getPrivilege)

//    another solution but you have to do it one by one condition
// const hasMaster = (req, res, next) => {
// 	if (req.privileges.includes("MASTER"))
// 	next()
// 	else {
// 		console.log("forbidden")
// 		res.status(403).send("Forbidden")	
// 	}
// }

// privilege is an array
// has access if user has EITHER of the privileges
// ["MASTER", "INSERT", "DELETE"]
const checkPrivilege = privileges => {
	return (req, res, next) => {
		var hasAccess = false
		req.privileges.forEach(privilege => {
			if (privileges.includes(privilege) && !hasAccess) {
				console.log("Has", privilege)
				hasAccess = true
				next()
			}

		})
		
		if (hasAccess === false)
			res.status(403).end()
		
	}
}

// Add at least 4 API endpoints with different methods
// ADD CODE HERE
app.get('/', checkPrivilege([PRIVILEGES.MASTER, PRIVILEGES.MODIFY, PRIVILEGES.VIEW]), (req, res) => {
	res.json(req.privileges)
})

app.get("/userList", (req, res) => {
    res.json(userList)
})

app.post("/home", (req, res) => {
    res.send("This is the home page")
})

app.put("/admin", (req, res) => {
    res.send("This for admin users only")
})

app.delete("/", (req, res) => {
    res.send("This is a bad request")
})


app.listen(8000, () => console.log(`The server has started listening at ${PORT}`))
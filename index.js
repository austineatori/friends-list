const express =  require('express')
const app = express();

// Import friends list
const Friends =  require('./models/friends')

app.use(express.json())

// create route
app.get("/", (req, res)=>{
    res.json(Friends)
})

app.post("/", (req, res)=>{
    let friend = req.body 
    let newFriend = {
        id: Friends.length + 1,
        name: friend.name,
        age: friend.age,
    }
        Friends.push(newFriend)
        res.json(Friends)
})



const port = 5000
app.listen(port, () => {
    console.log(`Server Running on ${port}`)
})


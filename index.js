const express =  require('express')
const app = express();

// Import friends list
const Friends =  require('./models/friends')


// create route
app.get("/", (req, res)=>{
    res.json(Friends)
})


const port = 5000
app.listen(port, () => {
    console.log(`Server Running on ${port}`)
})
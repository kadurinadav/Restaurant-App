const app = require('./routes/order')
const cors = require("cors");
app.use(cors());


// launch our server
const port = process.env.PORT  || 3000
app.listen(port, () => {
    console.log("Server is up on port: ", port)
})
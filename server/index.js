import app from "./app.js"
import {PORT} from "./config.js"
import {connectDB} from "./db.js"

app.listen(PORT)
console.log("server is listening at port: ",PORT);

connectDB()
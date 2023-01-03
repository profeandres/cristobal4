import app from "./server/app.js"
import {PORT} from "./server/config.js"
import {connectDB} from "./server/db.js"

app.listen(PORT || 4000)
console.log("server is listening at port: ", PORT);

connectDB()
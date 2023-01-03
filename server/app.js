import express, { urlencoded } from "express";
import cors from "cors"
import fileUpload from "express-fileupload";
import morgan from "morgan";
import noticiasRouter from './routes/noticiasRoutes.js'

const app = express()


//middlewares
app.use(cors())
app.use(express.json())
app.use(urlencoded({extended:true}))
app.use(morgan("dev"))
app.use(fileUpload({
    tempFileDir: "./upload", 
    useTempFiles: true
}))


//routes
app.use(noticiasRouter)


export default app;
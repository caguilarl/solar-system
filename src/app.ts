import express, { json, urlencoded } from 'express'
import morgan from 'morgan'
import cors from 'cors'
import connectionDb from './connection/connection'
//import routes
import PlanetsRoutes from './routes/planets.routes'

const app = express()

//server config
app.set("port", process.env.PORT || 3001)

//middlewares
app.use(morgan("dev"))
app.use(cors())
app.use(urlencoded({ extended: false}))
app.use(json())

//db connection
connectionDb()

//routes
app.get("/api", (req, res) => {
    res.json("It's OK :)");
})

app.use("/api/planets", PlanetsRoutes)

export default app
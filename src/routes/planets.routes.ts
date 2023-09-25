import { Router } from "express";
import { list } from "../controllers/planets.controller";

const PlanetsRoutes = Router()

PlanetsRoutes.get("/list", list)

export default PlanetsRoutes
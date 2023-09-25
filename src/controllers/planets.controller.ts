import { RequestHandler } from "express";
import { Planets } from "../models/planets.model";

export const list: RequestHandler = async(req, res) => {
    try{
        const planets: Planets[] = await Planets.findAll()
        return res.status(200).json(planets)
    }catch(error){
        return res.status(500).json({ "message": "We had an error while try to find planets"})
    }
}
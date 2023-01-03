import Noticias from "../models/Noticias.js";
import {uploadImage, removeImage} from '../libs/cloudinary.js'
import fs from "fs-extra"


export const getNoticias = async (req,res) =>{
    try {
        const noticias = await Noticias.find()
        return res.json(noticias)
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}

export const getNoticia = async (req,res) =>{
    try {
        const {id} = req.params
        const noticia = await Noticias.findById(id)
        if(!noticia) res.sendStatus(404)
        return res.json(noticia)
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}

export const createNoticia = async (req,res) =>{
    try {
        if(req.files?.img_main){
            const result = await uploadImage(req.files.img_main.tempFilePath)
            await fs.remove(req.files.img_main.tempFilePath)
            req.body.img_main={
                public_id: result.public_id,
                url: result.secure_url
            }
        }
        const newNoticia = new Noticias(req.body)
        await newNoticia.save()
        return res.json(newNoticia)
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:error.message})
    }
}

export const updateNoticia = async (req,res) =>{
    try {
        const {id} = req.params
        const noticiaToUpdate = await Noticias.findOne(id)
        if(!noticiaToUpdate) res.sendStatus(404)
        if(req.files?.img_main){
            const result  = await uploadImage(req.files.img_main.tempFilePath)
            await fs.remove(req.files.img_main.tempFilePath)
            await removeImage(noticiaToUpdate.img_main.public_id)
            req.body.img_main={
                public_id: result.public_id,
                url: secure_url
            }
        }
        const noticiaUpdated = await Noticias.findByIdAndUpdate(id, req.body,{new:true})
        return res.json(noticiaUpdated)
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}

export const removeNoticia = async (req,res) =>{
    try {
        const {id} = req.params
        const noticiaDeleted = await Noticias.findByIdAndRemove(id)
        if(!noticiaDeleted) res.sendStatus(404)
        await removeImage(noticiaDeleted.img_main.public_id)
        return res.json({message:"noticia eliminada compadre"}).status(400)
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}
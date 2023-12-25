import { Router } from 'express';
const router = Router();
import Tour from "../models/Tour.js";


router.get('/', async (req, res) => {
   
    try{
        const tours = await Tour.find();
        res.status(200).json({
            status: 'success',
            data: tours
        });

    }catch(err){
        res.status(400).send(err);
    }
})

router.get('/:id', async (req, res) => {
   
    try{
        const tours = await Tour.findById(req.params.id);
        res.status(200).json({
            status: 'success',
            data: tours
        });

    }catch(err){
        res.status(400).send(err);
    }
})

router.post('/', async (req, res) => {
    const newTour = new Tour(req.body);
    try{
        const savedPost = await newTour.save();
        res.status(200).json(savedPost);

    }catch(err){
        res.status(400).send(err);
    }
})

export default router;

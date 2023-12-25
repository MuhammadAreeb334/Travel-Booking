import { Router } from 'express';
const router = Router();
import User from "../models/User.js";


router.get('/', async (req, res) => {
   
    try{
        const users = await User.find();
        res.status(200).json({
            status: 'success',
            data: users
        });

    }catch(err){
        res.status(400).send(err);
    }
})

router.get('/:id', async (req, res) => {
   
    try{
        const users = await User.findById(req.params.id);
        res.status(200).json({
            status: 'success',
            data: users
        });

    }catch(err){
        res.status(400).send(err);
    }
})

router.post('/', async (req, res) => {
    const newUser = new User(req.body);
    try{
        const savedPost = await newUser.save();
        res.status(200).json({
            status: "success",
            data: savedPost
        });

    }catch(err){
        res.status(400).json({
            status: "error",
            data: err
        });
    }
})

router.post('/login', async (req,res) => {
    try {
        const user = await User.findOne({email: req.body.email});
        // console.log(user)
        if (!user) {
           return res.status(404).send({
            status: "Not Found",
            data: null
           });
        }
        else {
            if (user.password == req.body.password){
                return res.status(200).json({
                    status: "success",
                    data: user
                })
            }
            else {
                return res.status(404).send({
                    status: "Incorrect Password",
                    data: null
                   });
            }
        }
    } catch (error) {
         res.status(400).send(err);
    }
})
router.put('/:id', async (req, res) => {
    try{
        const user = await User.findOneAndUpdate({id: req.params.id}, req.body.user);
        res.status(200).json({
            status: "success",
            data: user
        });

    }catch(err){
        res.status(400).send(err);
    }
})


export default router;

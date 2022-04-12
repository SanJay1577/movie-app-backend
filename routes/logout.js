import express from "express";
import cookieParser from "cookie-parser";
import helmet from "helmet";

const router = express.Router();

router.use(helmet());
router.use(cookieParser()); 

router.get("/", (req,res)=>{
    try {
        //checking wheather a user is logged in or not.
        const name = req.cookies.name;
        if(!name)
        return res.status(200).send({error:"No User is Logged in..."})
        //if user is there then logout the user..
         res.clearCookie("name");
        return res.status(200).send({message:"Logged Out...."})
        
    } catch (error) {
        console.log(error);
        return res.status(500).send({error:"Internal server error"})
    }
    
})

export const LogoutRouter = router; 
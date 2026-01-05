import express from 'express';

import connectDb from './connectionDb/dbconnection.js';
import bcrypt from 'bcryptjs';

import  UserdataSchema from   './models/userModel.js';

const app = express();

app.use(express.json());

app.post("/registration", async(req, res)=>{

    const {username,useremail,userpass} = req.body;
    const salt = await bcrypt.genSalt(10);
    var hashedPass = await bcrypt.hash(userpass, salt)
    var user = {
        username,
        useremail,
        userpass: hashedPass
    }

    await UserdataSchema.create(user)
   return res.send(user)
})



app.post("/login", async(req, res)=>{

    const {useremail, userpass} = req.body;
    if(!useremail || !userpass){
        return res.send("please fill all the details")
    }
    var userAvail = await UserdataSchema.findById("695bdaff7af1f6c9d1c2af66")

    return res.send(userAvail)
})







app.listen(5000, () => {
   connectDb();
    console.log("server is running on port 5000 ");
})
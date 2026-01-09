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

    if(!username || !useremail || !userpass){
        return res.send("All field need to Fill!");
    }
    var user = {
        username,
        useremail,
        userpass: hashedPass
    }

    await UserdataSchema.create(user)
   return res.send(user)
})



app.post('/Login',async(req,res)=>{
    const {useremail,userpass} = req.body;

    if(!useremail || !userpass){
        return res.send("Kindly fill all the fields")
    }

    var userAvail = await UserdataSchema.findOne({useremail});
    if(!userAvail){
        return res.send("User not found, Kindly register first");
    }

    //var DBPass = userAvail.userpass;

    var ValidOrNot = await bcrypt.compare(userpass, userAvail.userpass);

    if(!ValidOrNot){
        return res.send("something went wrong");
    }

    return res.send("Login Successful");

})






app.listen(5000, () => {
   connectDb();
    console.log("server is running on port 5000 ");
})
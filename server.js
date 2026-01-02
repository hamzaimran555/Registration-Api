import express from 'express';


import bcrypt from 'bcryptjs';

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
   return res.send(user)
})

app.listen(5000, () => {
    console.log("server is running on port 5000 ");
})
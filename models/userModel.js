
import mongoose from "mongoose";

const UserSchema=  mongoose.Schema({
   username: {
        type: String,
        required: true
    },
    useremail: {
        type: String,
        required: true,
        unique: true
    },
    userpass: {
        type: String,
        required: true
    }
});

var UserdataSchema = mongoose.model("User", UserSchema)

export default UserdataSchema;
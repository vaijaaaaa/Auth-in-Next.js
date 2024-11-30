import mongoose from "mongoose"
import { type } from "os";


const userSchema = new mongoose.Schema({
    username:{
        type : String,
        required:[true,"Please provide a username"],
        unique:true,
    },
    email:{
        type:String,
        required:[true,"Please provide a email"],
        unique:true,
    },
    password:{
        type:String,
        required:[true,"Please provide a password"],
    },

    isVerfied : {
        type:Boolean,
        default:false,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
    forgotpasswordToken: String,
    forgotpasswordTokenExpriy: Date,
    verifyToken: String,
    verifyTokenExpriy: Date,

})








const User = mongoose.models.users || mongoose.model
("users",userSchema);

export default User;
import mongoose from "mongoose";

const noticiaSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    subtitle:{
        type:String,
        required: true
    },
    description: {
        type:String,
        required:true
    },
    img_main:{
        url: String,
        public_id: String
    }
},
{
    timestamps: true
})


export default mongoose.model("noticias",noticiaSchema)
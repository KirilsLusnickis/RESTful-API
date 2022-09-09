import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
  car: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
},
{timestamps:true}
);

export default mongoose.model("car", carSchema);
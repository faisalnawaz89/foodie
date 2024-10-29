import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://isfaisalnawaz:faisal8919@cluster0.1854h.mongodb.net/foodStore').then(()=> console.log('Mongoose DB connected!'))
}
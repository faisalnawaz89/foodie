import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";

// App config
const app = express();
const port = 4000;

// Middleware 
app.use(express.json());
app.use(cors());

// Database connection
connectDB();

// Routes
app.use('/api/food', foodRouter);
app.use('/images', express.static('uploads'))

app.get("/", (req, res) => {
    res.send("API Working!");
});

// Start the server
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});

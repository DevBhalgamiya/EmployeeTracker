const express = require("express") ;
const app = express() ;
const cors= require('cors');
const cookieParser = require("cookie-parser");
const employeeRouter = require("./routes/employeeRoutes") ;

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

require("dotenv").config() ;
const PORT = process.env.PORT || 4000 ;

// middleware to parse the objects from the req body
app.use(express.json()) ;
app.use(cookieParser()) ;
// try adding cookie parser

// routes
app.use('/api/employees', employeeRouter);

// connect to the database
require("./config/database").connectDB();

app.get("/", () => {
    console.log(`App is running on port no. ${PORT}`)
})

// activate
app.listen(PORT, () => {
    console.log(`App is currently listening at ${PORT}`) ;
})
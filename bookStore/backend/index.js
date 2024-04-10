import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import User from "./model/user.model.js";
import path from "path";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import basicRoute from "./route/basic.route.js";

const app= express();
app.use(cors());
app.use(express.json());

dotenv.config();


const PORT=process.env.PORT||4000;
app.use(bodyParser.json());
const URI=process.env.MongoDBURI;

//connect to mongodb
try {
    mongoose.connect(URI, {
        useNewUrlParser: true
    });
    console.log("Connected to MongoDB");
} catch (error) {
    console.log("Error:", error);
}

app.use(express.urlencoded( { extended: false } ));
app.use(express.static('public'));

app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

//defining routes
app.use("/",basicRoute);
app.use("/book",bookRoute);
app.use("/user", userRoute);

app.post('/signup', async (req, res) => {
    try {
        const data = {
            fullname: req.body.fullname,
            email: req.body.email,
            password: req.body.password
        };

        const checking = await User.findOne({ fullname: req.body.fullname });

        if (checking) {
            res.status(400).send("User details already exist");
        } else {
            
            await User.insertMany([data]);
            res.status(201).render("home", { naming: req.body.fullname });
        }
    } catch (error) {
        console.error("Error occurred during signup:", error);
        res.status(500).send("An error occurred during signup process");
    }
});

app.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (user) {
            if (user.password === req.body.password) {
                // Successful login
                res.status(200).render("home", { naming: `${req.body.email}` });
            } else {
                // Incorrect password
                res.status(400).send("Incorrect password");
            }
        } else {
            // User not found
            res.status(404).send("User not found");
        }
    } catch (error) {
        // Error occurred during login process
        console.error("Error occurred during login:", error);
        res.status(500).send("An error occurred during login process");
    }
});


app.listen(PORT,()=>{
    console.log(`Example app listening on port ${PORT}`);
});
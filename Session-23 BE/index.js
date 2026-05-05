// Import the installed module of express
const express = require("express");
// import mongoose module
const mongoose = require("mongoose");
// provide name for the server
const server = express();
// Declare server port
const port = 5000;

// TRIGGER CONNECTION TO MONGOdB THRU MONGOOSE
mongoose.connect("mongodb://localhost:27017/")


let db = mongoose.connection;

// check connection if error
db.on("error", () => console.log("Cannot connect to MongoDB !!!"));
// check if connection is successful
db.once("open", () => console.log("MongoDB Atlas connection Success!!!!"));


// Schema - > blueprint 

const taskSchema = new mongoose.Schema({
    name: String,
    status: {
        type: String,
        default: "pending" 
    }
});

// Model -> collection
const Task = mongoose.model("Task", taskSchema);
// Middleware to parse JSON data
server.use(express.json());
server.use(express.urlencoded({extended: true}));


// http methods -> get, post, put, delete
// get is find | post is create | put is update | delete is delete
// end point -> 
server.get("/home", (req, res) => {
    res.send("Hello from the HOME endpoint")
});

// server.get("/error", (req, res) => {
//     res.send("ERROR")
// }); 

server.get("/error", (req, res) => {
    res.status(404).send({
        message: "ERROR",
        code: 404
        // REST FULL API -> status code -> 200, 201, 400, 404, 500
    })
}); 

server.post("/task/add", (req, res) => {


    Task.findOne({name: req.body.name}).then((result) => {
        if(result.name != null && result.name == req.body.name){
            res.send("Duplicate found. This task cannot be added!");
        }else{
            let newTask = new Task({
                name: req.body.name
            });

            newTask.save().then((savedTask, saveErr) => {
                if(saveErr){
                    res.send("There is an error saving the task.");
                }else{
                    res.status(201).send({
                        code: 201,
                        message: "Task is now added!",
                        data: savedTask
                    });
                }
            })
        }
    });

    // Logic for adding a new task
    let newTask = new Task ({
        name: req.body.name
    });

    newTask.save().then((savedTask, saveErr) => {
        if(saveErr) {
            res.send("There is an error while saving the task")
        } else {
            res.status(201).send({
                message: "Task added successfully",
                code: 201,
                data: savedTask
            })
            

        }
    })

});

// server.----}("----", (req, res) => {
//     // Logic for adding a new task
    
// });




server.listen(port, () => console.log(`Server is running on port ${port}`));

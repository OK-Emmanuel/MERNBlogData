const express = require("express")
const database = require("./connect")
const ObjectId = require("mongodb").ObjectId


let postRoutes = express.Router()

// #1 - Retrieve All
postRoutes.route("/posts").get(async (request, response) => {
    let db = database.getDb()
    let data = await db.collection("posts").find({}).toArray()
    if (data.length > 0) {
        response.json(data)
    }else{
        throw new Error("Data was not found")
    }
}) 

// #2 - Retrieve One 
postRoutes.route("/posts/:id").get(async (request, response) => {
    let db = database.getDb()
    let data = await db.collection("posts").findOne({_id: new ObjectId(request.params.id)})
    console.log("Received data:", data);
    if (data && Object.keys(data).length > 0) {
        response.json(data)
    }else{
        throw new Error("Data was not found")
    }
}) 

// #3 - Create One 
postRoutes.route("/posts").post(async (request, response) => {
    let db = database.getDb()
    let mongoObject = {
        title: request.body.title,
        description: request.body.description,
        content: request.body.content,
        author: request.body.author,
        dateCreated: request.body.dateCreated
    }
    let data = await db.collection("posts").insertOne(mongoObject)
    response.json(data)
    
}) 

// #3 - Update One 
postRoutes.route("/posts/:id").put(async (request, response) => {
    let db = database.getDb()
    let mongoObject = {
        $set: {
            title: request.body.title,
            description: request.body.description,
            content: request.body.content,
            author: request.body.author,
            dateCreated: request.body.dateCreated
        }
    }
    let data = await db.collection("posts").updateOne({_id: new ObjectId(request.params.id)})
    response.json(data)
    
}) 

// #5 - Delete one
postRoutes.route("/posts/:id").delete(async (request, response) => {
    let db = database.getDb()
    let data = await db.collection("posts").deleteOne({_id: request.params.id})
    response.json(data)
}) 

module.exports = postRoutes


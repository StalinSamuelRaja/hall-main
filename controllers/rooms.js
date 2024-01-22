import { client } from "../db.js";

export function Getroom() {
    return client.db("Hall").collection("room").find({}).toArray();
}

export function createRoom(data){
    return client.db("Hall").collection("room").insertOne(data)
}
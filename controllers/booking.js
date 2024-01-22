import { client } from "../db.js";

export function Getbooking() {
    return client.db("Hall").collection("booking").find({}).toArray();
}

export function createbooking(data){
    return client.db("Hall").collection("booking").insertOne(data)
}

export function GetBookingsByCustomer(customerName) {
    return client.db("Hall").collection("booking").find({ customer_name: customerName }).toArray();
}
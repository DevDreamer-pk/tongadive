import mongoose from 'mongoose'

export const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    category: String,
    price: Number,
})
import express from 'express'
const app = express()
app.get('/api', (req, res) => {
    res.send({
      message: 'I am a server route and can also be hot reloaded!'
    })
})
app.get('/dave', (req, res) => {
    res.send({
      message: 'You passed the DAVE test!'
    })
})
app.get('/beaut', (req, res) => {
    res.send({
      message: 'Such a beauty!'
    })
})
import mongoose from 'mongoose'
const Schema = mongoose.Schema
const blogSchema = new Schema({
  title:  String,
  author: String,
  body:   String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs:  Number
  }
})
export default app
const express = require('express')
const axios = require('axios')
const router = express.Router()

router.get('/comments', async (req, res) => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/comments?_limit=5')
        res.status(200).send(response.data)
    }catch(err){
        res.status(404).send(err)
    }
})

router.post('/comment/posts', async (req, res) => {
    const data = req.body
    try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/comments', data)
        res.send(response.data)
    }catch(err){
        res.send(err)
    }

})

router.delete('/comment/:id', async (req, res) => {
    const id = req.params.id
    try {
        const response = await axios.delete(`https://jsonplaceholder.typicode.com/comments/${id}`)
        res.send(response.data)
    }catch(err){
        res.send(err)
    }
})

router.put('/comment/update/:id', async (req, res) => {
    const id = req.params.id
    const data = req.body
    try {
        const response = await axios.put(`https://jsonplaceholder.typicode.com/comments/${id}`, data)
        res.send(response.data)
    }catch(err){
        res.send(err)
    }
})


router.get('/comment/get/:id', async (req, res) => {
    const id = req.params.id
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/comments/${id}`)
        res.send(response.data)
    }catch(err){
        res.send(err)
    }
})


module.exports = router
const express = require('express');
const newsRouter = express.Router();
const axios = require('axios');


newsRouter.get('/', async(req, res,next)=>{
    // res.render('home')

    try{
        
        const newsAPI = await axios.get(`https://ghgossip.com/wp-json/wp/v2/posts`)
        res.render('home', {articles: newsAPI.data})


    } catch (err){
        if (err.response){
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else if (err.request){
            console.log(err.request)

        } else {
            console.error('Error', err.message)

        }

    }

})



newsRouter.get('/singleArticle/:id', async(req, res,next)=>{
    // res.render('home')

    let articleID = req.params.id
    try{
        
        const newsAPI = await axios.get(`https://ghgossip.com/wp-json/wp/v2/posts/${articleID}`)
        res.render('singleArticle', {article: newsAPI.data})


    } catch (err){
        if (err.response){
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else if (err.request){
            console.log(err.request)

        } else {
            console.error('Error', err.message)

        }

    }

})




module.exports = newsRouter
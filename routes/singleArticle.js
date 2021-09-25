const express = require('express');
const newsRouter = express.Router();
const axios = require('axios');


newsRouter.get('/:id', async(req, res,next)=>{
    // res.render('home')

    let articleID = req.params.id

    try{
        
        const newsAPI = await axios.get(`https://ghgossip.com/wp-json/wp/v2/posts${articleID}`)
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
const axios=require('axios');
const API='http://localhost:3001/products'; //JSON Server URL

const getAllProducts=async(_,res)=>{
    try{
        const response=await axios.get(API)
        res.status(200).json(response.data);
    }catch(err){
        res.status(500).json({error:err.message});
    }
};
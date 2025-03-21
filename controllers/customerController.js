const axios=require('axios');
const API='http://localhost:3001/customers'; //JSON Server URL

const getAllCustomers=async(_,res)=>{
    try{
        const response=await axios.get(API)
        res.status(200).json(response.data);
    }catch(err){
        res.status(500).json({error:err.message});
    }
};

const getCustomerById=async(req,res)=>{
    try{
        const response=await axios.get(`${API}/${req.params.id}`);
        if(response.data){
            res.status(200).json(response.data);
        }else{
            res.status(404).json({errr:'Customer not found'});
        }
    }catch(err){
      res.status(500).json({error:err.message});
    }
};

const createCustomer=async(req,res)=>{
    try{
        const response=await axios.post(API,req.body);
        res.status(201).json({
            success:"Post created successfully",
            data:response.data
        });
    }catch(err){
        res.status(500).json({error:err.message});
    }
};


const updateCustomer=async(req,res)=>{
    try{
        const response=await axios.put(`${API}/${req.params.id}`,req.body);
        res.status(200).json({
            success:"Post udate successfully",
            data:response.data
        });
    }catch(err){
        res.status(500).json({error:err.message});
    }
};


const deleteCustomer=async(req,res)=>{
    try{
        await axios.delete(`${API}/${req.params.id}`);
        res.status(200).json({message:'Customer delete successful'});
   }catch(err){
    res.status(500).json({error:err.message});
   };
}

module.exports={
    getAllCustomers,
    getCustomerById,
    createCustomer,
    updateCustomer,
    deleteCustomer
};

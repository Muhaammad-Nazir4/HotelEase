const express = require("express");
const router = express.Router();
const {connection} =require("../database/sql");

router.get('/', (req,response)=>{
    connection.query('SELECT * from Employees', (err,res)=>{
        if(err) throw err;
        else{
            response.send(res);
        }
    })
})
module.exports=router
const express=require('express');
const pool = require('../database');
const router=express.Router();



router.post("/registerUser",(req,res)=>{
    console.log(req.body) 
    pool.connect()
    .then((client)=>{
        client.query(`
        SELECT * FROM value WHERE phone_number ='${req.body.phone_number}'
        `)
        .then((result)=>{
                if(result.rows.length>0)
                {
                    res.json({error:"already exist"})
                }
                else{
                    const timestamp=Date.now(); 
                client.query(
                `INSERT INTO value (name,email,phone_number,location,category,membership_id,created_at)
                VALUES ('${req.body.name}',
                '${req.body.email}',
                '${req.body.phone_number}',
                '${req.body.location}',
                '${req.body.category}',
                     '${req.body.membership_id}',
                     '${timestamp}'
                    )
                returning * `
            ).then((result)=>{
                console.log(result.rows);
                res.json({added:result.rows[0]})
            }).catch((err)=>{
                console.log(err);
                res.json(err)
            })
                }
            
        }).catch((err)=>{
            console.log(err)
            res.json(err)

        })

       

    }).catch((err)=>{
        res.json(err);
        console.log(err)
    })
})

router.get("/getMemId",(req,res)=>{
    pool.connect()
    .then((client)=>{
        client.query(  `SELECT * FROM value ORDER BY created_at DESC`)
        .then((result)=>{
            // console.log(result.rows)
            res.json({lastId: result.rows[0].membership_id})
        }).catch((err)=>{
            res.json(err)
            console.log(err)
        })
    }).catch((err)=>{
        res.json(err)
        console.log(err);
    })
})

router.get("/checkRegistered/:phoneNumber",(req,res)=>{
    console.log(req.params.phoneNumber)
    pool.connect()
    .then((client)=>{
        client.query(`
        SELECT * FROM value WHERE phone_number ='${req.params.phoneNumber}'
        `)
        .then((result)=>{
            console.log(result.rows)
                if(result.rows.length>0)
                {
                    res.json({success:"user exist"})
                }
                else{
                 res.json({error:"user not exist"})
            
                }
            
        }).catch((err)=>{
            console.log(err)
            res.json(err) 
        }) 

    }).catch((err)=>{
        res.json(err);
        console.log(err)
    })
})

module.exports=router
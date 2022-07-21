import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/AppRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';
import { append } from 'koa/lib/response';
const express = require("express");
const app=express();
const cors= require("cors"); 
const pool= require("./db");


ReactDOM.render(<AppRouter />, document.getElementById('root'));

app.use(cors());
app.use(express.json());

app.listen(5000, () =>{
console.log("server has started on port 5000")
});


//ROUTES//

//create an event

app.post("/db",async(req,res)=>{
    try {
        const {nombre}=req.body;
        const newEvent= await pool.query("INSERT INTO db (nombre) VALUES($1)",
        [nombre]
        );
        res.json(newEvent.rows[0]);
        
    } catch (error) {
        console.log(error.message);
    }

});

//get all todos
app.get("/db",async(req,res)=>{
    try {
        const allEvents= await pool.query('SELECT * FROM db');
        res.json(allEvents.rows);
        
        
    } catch (error) {
        console.log(error.message);
    }

});



//get a todo

//update a todo

//delete a todo
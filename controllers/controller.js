const { json } = require('express');
const { Pool } = require('pg');

const pool = new Pool ({
     connectionString: process.env.POSTGRES_URL,
   
   
})

const getinfo = async(req,res) =>{
     pool.query('SELECT * FROM eventos',(data,err)=>{
        if(err) return res.json(err);
         return res.json(data);
        
});
}

const postinfo = async(req,res)=>{

const mysql = 'Insert into eventos (nombre,precio,descripcion,categoria,provincia,localidad,ubicacion,fecha)VALUES($1,$2,$3,$4,$5,$6,$7,$8)';

const nombre = req.body.nombre;
const precio = req.body.precio;
const descripcion = req.body.descripcion;
const categoria = req.body.categoria;
const provincia = req.body.provincia;
const localidad = req.body.localidad;
const ubicacion = reqbody.ubicacion;
const fecha = req.body.fecha;

await pool.query(mysql, [nombre,precio,descripcion,categoria,provincia,localidad,ubicacion,fecha], (data,err)=>{
    if(err) return res(err);
    console.log(data);
    return res(data);
})

};

const registropost = async(req,res)=>{
const mysql = "INSERT INTO usuarios (mail,password,rol) VALUES($1,$2,$3)";

const mail = req.body.mail;
const password = req.body.password;
const rol = "usuario";

await pool.query(mysql,[mail,password,rol],(data,err)=>{
    if(err) return res(err);
    console.log(data);
    return res(data);
})

}

module.exports = {
    getinfo,
    postinfo,
    registropost
}
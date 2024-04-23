import express from "express";
import bodyparser from "body-parser";
import mysql from "mysql2"
const app = express();
const PORT = 3002;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

const db = mysql.createConnection({
      host: 'localhost',
      user: "root",
      password: "Siddh@rth2440",
      database:"simple"
})

app.get("/",(req,res)=>{
    const q = "select * from books"
    db.query(q,(err,data)=>{
        if(err){
            console.log(err);
            return;
        }
        return res.json(data);
    })
})

app.post("/post",(req,res)=>{
    const q= `insert into books(title,description,cover) values(?)`;
    const values = [req.body.title,req.body.description,req.body.cover];
    db.query(q,[values],(err,data)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log(data);
        return res.json(data);
    })
})

app.put("/update/:id",(req,res)=>{
    const q = `update books set title= ?,description = ?,cover = ? where id=?`;
    const bookId = req.params.id;
    const values = [req.body.title,req.body.description,req.body.cover];
    db.query(q,[...values,bookId],(err,data)=>{
        if(err) {
            return res.json(err);
        }else{
            console.log(data);
            return;
        }
    })
})

app.delete("/delete/:bookId",(req,res)=>{
    const q = `delete from books where id = ?`;
    db.query(q,[req.params.bookId],(err,data)=>{
        return res.json(data);
    })
})

app.listen(PORT,()=>console.log(`Server is connected to the backened at ${PORT}`));
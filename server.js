import cors from 'cors';
import express from 'express';
import {products} from "./controllers/products.js";
import {getAll, remove, update, create} from "./repository/productRepository.js"

const app = express()
app.use(cors())
app.get("/", (req,res)=>res.send('API Running'))
app.get("/products", (req,res)=>res.send(getAll()));
app.put("/update/:id", (req,res)=>res.send(update(req.params,req.body)));
app.get("/remove/:id", (req, res)=>res.send(remove(req.params)))
app.post("/create", (req, res)=>res.send(create(req.params, req.body)))

const PORT = process.env.PORT || 5000;
console.log('port to start: ', PORT)
app.listen(PORT, () => console.log(`Server Started ${PORT}`));

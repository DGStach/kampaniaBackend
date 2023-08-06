import cors from 'cors';
import express from 'express';
import {getAll, remove, update, create} from "./repository/productRepository.js"
const app = express();
app.use(express.json());
app.use(cors())
app.get("/products", (req,res)=>res.send(getAll()));
app.post("/products", (req, res)=>res.send(create(req.body)).status(201))
app.put("/products/:id", (req,res)=>res.send(update(req.params.id,req.body)));
app.delete("/products/:id", (req, res)=>res.send(remove(req.params.id)).status(204))

const PORT = process.env.PORT || 5000;
console.log('port to start: ', PORT)
app.listen(PORT, () => console.log(`Server Started ${PORT}`));


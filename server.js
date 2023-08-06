import cors from 'cors';
import express from 'express';
import {mockProducts} from "./controllers/mockProducts.js";

const app = express()
app.use(cors())
app.get("/", (req,res)=>res.send('API Running'))
app.get("/mockProducts", mockProducts);

const PORT = process.env.PORT || 5000;
console.log('port to start: ', PORT)
app.listen(PORT, () => console.log(`Server Started ${PORT}`));

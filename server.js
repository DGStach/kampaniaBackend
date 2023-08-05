import cors from 'cors';
import express from 'express';
const app = express()
import {mockProducts} from "./controllers/mockProducts.js";

app.use(cors())

app.get("/", (req,res)=>res.send('API Running'))
app.get("/mockProducts", mockProducts);

const PORT = process.env.PORT || 5000;
console.log('port to start: ', PORT)
app.listen(PORT, () => console.log(`Server Started ${PORT}`));

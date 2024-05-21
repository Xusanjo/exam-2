import express from 'express';
import dotenv from 'dotenv';
import router from './router/user.router.js';
import createPath from './utils/createPath.js';

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.static('public'));

let tablesExist = false;
app.get('/', (req,res)=>{
    console.log("+++++");
    if(!tablesExist){
        console.log('malumitlar chiqdi');
        tablesExist=true;
        res.status(201).send('ekranda');
    }else{
        res.status(400).send('Error');
    }
})

app.post('/', (req, res) => {
    if (!tablesExist) {
        console.log("Yangi tablolar yaratildi");
        tablesExist = true;
        res.status(201).send("Yangi tablolar muvaffaqiyatli yaratildi");
    } else {
        res.status(400).send("Tablolar allaqachon mavjud");
    }
});

const port = process.env.PORT || 4001;
app.listen(port, () => {
    console.log(`Server http://localhost:${port} portida ishga tushdi`);
});
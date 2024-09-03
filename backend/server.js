import express from "express";
import connectDB from "./db/mongodb.js";
import imageModel from "./model/Schema.js";
import cors from 'cors';
import bodyParser from 'body-parser'

//------------------MIDDLEWARES---------------------------
const app = express();
const PORT = 9000;
app.use(cors());
connectDB();  //connect to database
//due to large image upload limit bodyparser used
app.use(bodyParser.json({ limit: "10000kb", extended: true }));  
app.use(bodyParser.urlencoded({ limit: "10000kb", extended: true }));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

//--------------------ROUTES--------------------------------
app.get("/getimage", async(req, res) => {
  try {
    const datas = await imageModel.find();
    res.status(200);
    res.send(datas);
    console.log("Image Data fetched successfully" + datas);
  } catch (error) {
    console.log("Error in getting image data");
  }
});

app.post('/postimage', async(req, res) => {
    const {name,mail,image} = req.body;
    try {
        await imageModel.create({name, mail, image});
        res.status(200).send("Image created successfully");
        console.log("Task created successfully");
    } catch (error) {
        console.log(error.message);
    }
});


//-------------------LISTENERS---------------------------
app.listen(PORT, (error) => {
  if (error) {
    console.log(error.message);
  } else {
    console.log(`Server listening on port ${PORT}`);
  }
});

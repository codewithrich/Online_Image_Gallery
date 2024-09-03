import express from "express";
import connectDB from "./db/mongodb.js";
import imageModel from "./model/Schema.js";


//------------------MIDDLEWARES---------------------------
const app = express();
const PORT = 9000;
connectDB();  //connect to database
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
    const {name,mail,gender} = req.body;
    try {
        await imageModel.create({name, mail, gender});
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

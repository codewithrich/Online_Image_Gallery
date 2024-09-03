import express from "express";
import connectDB from "./db/mongodb.js";

//------------------MIDDLEWARES---------------------------
const app = express();
const PORT = 9000;
connectDB();
//--------------------ROUTES--------------------------------
app.get("/getimage", (req, res) => {
  try {
    res.send("Welcome");
  } catch (error) {
    console.log(error);
  }
});

app.post('/postimage', (req, res) => {
    try {
        
    } catch (error) {
        console.log(error);
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

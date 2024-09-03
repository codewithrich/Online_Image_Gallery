import express from "express";


//------------------MIDDLEWARES---------------------------
const app = express();
const PORT = 9000;

//--------------------ROUTES--------------------------------
app.get("/", (req, res) => {
  res.send("Welcome");
});


//-------------------LISTENERS---------------------------
app.listen(PORT, (error) => {
  if (error) {
    console.log(error.message);
  } else {
    console.log(`Server listening on port ${PORT}`);
  }
});

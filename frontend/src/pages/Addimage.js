import "../App.css";
import SendIcon from "@mui/icons-material/Send";
import { Box,  TextField, Button } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});


function Addimage() {

  const [name,setName]=useState("");
  const [mail,setMail]=useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    console.log("Entered submission");
    await axios.post("http://localhost:9000/postimage",{name:name,mail:mail,image:image});
    alert("submitted successfully")
    navigate('/vg')
    } catch (error) {
      console.log(error.message);
    }finally{
      setName("");  
      setMail("");
      setImage("");
    }
  }


  function convertToBase64(e) {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.onerror = (error) => {
      console.log("Error: " + error);
    };
  }
  return (
    <>
      <div className="App">
        <h1>Image Gallery</h1>
        <div className="Form-div">
          <Box
            component="form"
            sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
            noValidate
            autoComplete="on"
          >
            <TextField
              id="standard-basic-name"
              label="Name"
              variant="standard"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              helperText="Please Enter your Name"
              margin="normal"
            />
            <TextField
              id="standard-basic-email"
              label="Email"
              variant="standard"
              helperText="Please Enter your Email"
              value={mail}
              onChange={(e)=>setMail(e.target.value)}
              margin="normal"
            />

            <Button
              sx={{ marginLeft: "20px" }}
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
            >
              Upload files
              <VisuallyHiddenInput
                type="file"
                onChange={convertToBase64}
                multiple
                accept="image/*"
              />
            </Button>

            <Button
              sx={{ marginLeft: "20px" }}
              variant="contained"
              endIcon={<SendIcon />}
              onClick={handleSubmit}
              type="submit"
            >
              Send
            </Button>
          </Box>
        </div>
      </div>

      
    </>
    
  );
}

export default Addimage;

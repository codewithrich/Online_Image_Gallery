import "./App.css";
import SendIcon from "@mui/icons-material/Send";
import { Box, MenuItem, TextField, Button } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import { useState } from "react";

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

const gender = [
  {
    value: "male",
    label: "M",
  },
  {
    value: "female",
    label: "F",
  },
];

function App() {

  const [image, setImage] = useState("");

  function convertToBase64(e) {
    e.preventDefault();
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      console.log(reader.result); //base64 encoding
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
              id="standard-basic"
              label="Name"
              variant="standard"
              helperText="Please Enter your Name"
              margin="normal"
            />
            <TextField
              id="standard-basic"
              label="Email"
              variant="standard"
              helperText="Please Enter your Email"
              margin="normal"
            />
            <TextField
              id="outlined-select-currency"
              select
              label="Select Gender"
              variant="standard"
              helperText="Please select your Gender"
              margin="normal"
            >
              {gender.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

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
            >
              Send
            </Button>
          </Box>
        </div>
        <image style={{right:"0px"}} width={100} height={100} src={image} alt="image"/>
      </div>
    </>
  );
}

export default App;

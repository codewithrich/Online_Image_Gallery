import React, { useState ,useEffect} from "react";
import Button from "@mui/material/Button";
import "./Viewgallery.css";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

function Viewgallery() {
  const [data, setdata] = useState([]);

  useEffect(()=>{
    fetchimages();
  });

  const fetchimages = async () => {
    try {
      await axios.get("http://localhost:9000/getimage").then((response) => {
        setdata(response.data);
      });
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div>
        <div className="header-div">
          <h1>View Gallery</h1>
          <Button onClick={fetchimages} variant="contained" color="success">
            Refresh
          </Button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            margin: "10px",
          }}
          className="gallery-images-container"
        >
          {data.map((datas) => (
            <>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={datas.image}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {datas.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      {datas.mail}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default Viewgallery;

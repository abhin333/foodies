import { useNavigate } from "react-router-dom";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardsData from "./CardsData";
import { useState } from "react";
import { Box } from "@mui/system";
import { useDispatch } from "react-redux";
import {ADD} from "../../Redux/Action/action"


function Cards() {
  const dispatch=useDispatch()
  const [data, setData] = useState(CardsData);
  console.log("pppp", data);
  const buyHandler = (e) => {
   dispatch(ADD(e));
   };

  return (
    <>
   
    <div className="cards">
      {data.map((element, id) => {
        return (
          <>
          <Box>
            <Card sx={{ maxWidth: 200, marginTop:1}}>
              <Box>
              <CardMedia
                sx={{ height: 100 }}
                image={element.imgdata}
                title="green iguana"
              />
              </Box>
                <Box sx={{maxHeight:160,overflow:'hidden'}}>
              <CardContent >
                <Typography gutterBottom color={"black"} component="div" >
                  {element.rname}
                </Typography>
                <Typography variant="body2" color="text.secondary" >
                 {element.discreption}
                </Typography>
              </CardContent>
                </Box>
                <Box>
              <CardActions  >
                <Button size="small" onClick={()=>buyHandler(element)}>
                 Add to cart
                </Button>
                <Button sx={{ fontSize: 15 }} size="small">
                  (₹){element.price}
                </Button>
              </CardActions>
                </Box>
            </Card>
            </Box>
          </>
        );
      })}
    </div>
    </>
  );
}

export default Cards;

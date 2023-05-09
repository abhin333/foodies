import React, { useState } from "react";
import "./Header.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Badge } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import Menu from "@mui/material/Menu/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";
import { Table } from "react-bootstrap";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect } from "react";
import { RMV } from "../../Redux/Action/action";

function Header() {
  const getData = useSelector((state) => state.cartreducer.carts);
  const [price,setPrice]=useState()
  console.log("price",price);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const dispatch=useDispatch()

  
  const iteam_Del = (id,) => {
    console.log("dele",id);
   dispatch(RMV(id,))
  };

  const total=(()=>{
    let price=0;
    getData.map((e,key)=>{
      price=price+e.price*e.qnty
    });
    setPrice(price)
  });
  
  useEffect(()=>{
    total(); 
  },[total])

  return (
    <>
      <Navbar bg="dark" variant="dark" style={{ height: "50px" }}>
        <Container>
          <Nav className="me-auto">
            <NavLink className="text-decoration-none text-white mx-5" to="/">
              Home
            </NavLink>
            <NavLink className="text-decoration-none text-white" to="/cart">
              Add to Cart
            </NavLink>
          </Nav>
          <Badge badgeContent={getData.length} color="primary">
            <ShoppingCartIcon
              sx={{ color: "white", cursor: "pointer" }}
              id="basic-demo-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              variant="outlined"
              color="neutral"
              onClick={handleClick}
            />
          </Badge>
        </Container>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <CloseIcon
            sx={{ fontSize: 15, float: "right", cursor: "pointer" }}
            onClick={handleClose}
          />

          {getData.length ? (
            <div className="cart_details">
              <Table>
                <thead>
                  <tr>
                    <th>photo</th>
                    <th>Resturant Name</th>
                  </tr>
                </thead>
                <tbody>
                  {getData.map((e, id) => {
                    return (
                      <tr>
                        <td>
                          <NavLink to={`/cart/${e.id}`} onClick={handleClose}>
                            <img
                              src={e.imgdata}
                              alt="img"
                              style={{
                                width: "5rem",
                                height: "5rem",
                                position: "relative",
                                top: 12,
                              }}
                            />
                          </NavLink>
                        </td>
                        <td style={{}}>
                          <p style={{ fontFamily: "ittalic" }}>{e.rname}</p>
                          <p style={{ fontFamily: "ittalic" }}>
                            Price :₹{e.price}
                          </p>
                          <p style={{ paddingTop: -12, fontFamily: "ittalic" }}>
                            Quantity :₹{e.qnty}
                          </p>
                        </td>
                        <td>
                          <DeleteIcon
                            sx={{ color: "red", cursor: "pointer" }}
                            onClick={() => iteam_Del(e.id)}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
                <tr>
                  <td>
                    <p style={{ paddingTop: -12, fontFamily: "ittalic" }}>
                      Total : {price}
                    </p>
                  </td>
                </tr>
              </Table>
            </div>
          ) : (
            <div className="cart_img  d-flex justify-content-end">
            <p style={{ marginTop: 15, paddingLeft:56 ,}}>
              your card is empty
              <img src="./cart2.gif" alt="cart image" width='35px'/>
            </p>
            </div>
          )}
        </Menu>
      </Navbar>
    </>
  );
}

export default Header;

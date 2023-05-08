import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import DeleteIcon from '@mui/icons-material/Delete';
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function CardDetails() {
  const [data,setData]=useState([])
  const {id}=useParams()
  console.log("id",id);

  const getData = useSelector((state) => state.cartreducer.carts);
  console.log("getdata",getData)

  const compare=()=>{
    let compareData=getData.filter((e)=>{
      return  e.id==id
    })
    setData(compareData);
  }
  useEffect(()=>{
    compare();
  },[id])

  
  return (
    <>
      <div className="container-fluid mt-3">
        <div className="itemsdetails">
          <h4 className="text-center">ITEAM DETAILS</h4>
        </div>
        <div className="box d-flex justify-content-around shadow p-3 mb-5 bg-white rounded "style={{width:'70%',margin:'auto'}}>
          {
            data.map((element,id)=>{
              return(
                <>
                <div className="iteam_img ">
<img
            src={element.imgdata}
              width="300"
              height="300"
              alt="image"
              style={{ borderRadius: 4 }}
            />
            </div>
          <div
            className="iteam_details "
            style={{ width:400,display:'flex',justifyContent:'center'}}
          >
            <Table >
              <tr>
                <td>
                  <p><strong>Restaurant</strong>:{element.rname}</p>
                  <p><strong>price</strong>:{element.price}</p>
                  <p><strong>Dish</strong>:{element.address}</p>
                  <p><strong>Total</strong>{element.price}</p>
                </td>
                <td>
                  <p><strong>Rating:</strong><span style={{marginLeft:5,background:'green',color:'white',padding:"2px,5px",borderRadius:5}}>{element.rating} ★</span></p>
                  <p><strong>Order Review:</strong><span style={{}}>{element.somedata}</span></p>
                  <p><strong>Remove:</strong><span style={{cursor:'pointer',marginLeft:5,padding:"2px,5px",borderRadius:5}}><DeleteIcon sx={{color:'red'}}/></span></p>

                </td>
              </tr>
            </Table>
          </div>
                </>
              )
            })
          }
          </div>  
      </div>
    </>
  );
}

export default CardDetails;

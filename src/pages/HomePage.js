import FullWidthLayout from "./layout/FullWidthLayout";
import NavBarComponent from "../components/NavBarComponent";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// function isOpenRow(index) {
//   if(index === 0 && index %3 === 0){
//     return true
//   }
//   return false
// }
// function isCloseRow(index) {
//   if(index %2 === 0){
//     return true
//   }
//   return false
// }

function HomePage() {
  const [data, setData] = useState([]);

  // useEffect(async () => {
    

  //   setData(result.data);
  // });
  useEffect(() => {
    async function fetchData() {
      // You can await here
      // const response = await MyAPI.getData(someId);
      const result = await axios(
        'https://fakestoreapi.com/products',
      );
      // ...
      setData(result.data);
      
    }
    fetchData();
  }, []); 

  
    return (
      <FullWidthLayout>
        <NavBarComponent/>
       
        {data.map((item, index) => (
              // {this.isOpenRow(index) && <div class='row'> }
              <Card style={{ width: '18rem' }}>
                
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                  <Card.Title>{index} {item.title}</Card.Title>
                  <Card.Text>
                    {item.description} 
                  </Card.Text>
                  <Card.Text>
                    {item.price}
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
             
        ))}
      </FullWidthLayout>
    );
  }
  
  export default HomePage;
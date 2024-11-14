import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';


export default function Right() {

    let catname = useSelector(state => state.category.value)

    const[productData , setProductData] = useState([]);

    useEffect(()=>{
        if(catname){
            const apiPath = `https://fakestoreapi.com/products/category/${catname}`;
            console.log(apiPath);

            fetch(apiPath)
            .then(res=>res.json())
            .then(val=>{
                console.log(val);
                setProductData(val);
            })
        }
    }, [catname])
   
    
  return (
        <Container>
                <Row>
                    <h4>PRODUCTS, {catname}</h4>
                    {productData && productData.length > 0 && productData.map(({ image, title, price , id}) => (
                        <Col md={4} >
                            <Image src={image} fluid />
                            <h2>{price}</h2>
                            <p><Link to={'/productpage/'+ id}>{title}</Link></p>
                            <Button>ADD TO CART</Button>
                        </Col>
                    ))}
                </Row>
        </Container>
  )
}

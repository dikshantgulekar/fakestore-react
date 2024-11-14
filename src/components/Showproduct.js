import React from 'react'
import { Button, Col, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Showproduct({products}) {
  return (
    <>
        <Row>
        {
            products && products.length>0 && products.map(({image, price,title, id})=>
            
                <Col xs={6} lg={3}>
                    <Image src={image} fluid/>
                    <h4>{price}</h4>
                    <p><Link to={'/productpage/'+ id}>{title}</Link></p>
                    <Button>ADD TO CART</Button>
                </Col>
            )
        }
        </Row>

    </>
  )
}

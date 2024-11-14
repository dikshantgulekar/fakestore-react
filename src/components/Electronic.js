import React from 'react'
import { useParams } from 'react-router-dom'
import useFetchapi from '../customHooks/useFetchapi';
import { Container } from 'react-bootstrap';
import Showproduct from './Showproduct';


export default function Electronic() {
  let {catname} = useParams();

  var allProducts = useFetchapi('https://fakestoreapi.com'  + '/products/category/' + catname, [catname])
  // console.log('Electronics:', allProducts)
  return (
    <>

    
    <Container>
        <h1>All Products From : {catname}</h1>
        <Showproduct products={allProducts}></Showproduct>
    </Container>

    </>
  )
}

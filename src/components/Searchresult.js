import React from 'react'
import useFetchapi from '../customHooks/useFetchapi'
import { Container } from 'react-bootstrap';
import Showproduct from './Showproduct';

export default function Searchresult({catname}) {

    // console.log(catname);

    var allProducts = useFetchapi(process.env.REACT_APP_FAKESTORE + '/products/category/' + catname);
    console.log(allProducts)


  return (
    <>
    <Container>
        <h1>All Products From : {catname}</h1>
        <Showproduct products={allProducts}></Showproduct>
    </Container>

    </>
  )
}

import React from 'react'
import useFetchapi from '../customHooks/useFetchapi'
import { Container } from 'react-bootstrap';
import Showproduct from './Showproduct';

export default function Homepage() {

  var allProducts = useFetchapi(process.env.REACT_APP_FAKESTORE + '/products');
  console.log(allProducts);

  return (
    <>
    
      {
        allProducts && allProducts.length>0 && (
          <Container>
             <h2>ALL PRODUCTS OF FAKESTORE API</h2>
            <Showproduct products={allProducts}/>
          </Container>

        )
      }
    
    </>
  )
}

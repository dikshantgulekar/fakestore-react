import React, { useRef } from 'react'
import { Button, Container } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { changeCategoryName } from '../redux/Slices/searchSlice';

export default function Searchbox() {
    var dispatch = useDispatch();
    var catname = useRef();
    
    function searchData(){
        
        var categoryName = catname.current.value;
        console.log(categoryName);

        dispatch(changeCategoryName(categoryName));
    }
  return (
   <>
     <Container className='text-center'>
        <input type='text' ref={catname} placeholder='Search Here' className='form-control'/>
        <Button onClick={searchData} className='text-center'>SEARCH</Button>
     </Container>
   </>
  )
}

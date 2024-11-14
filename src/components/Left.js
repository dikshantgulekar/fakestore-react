import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux'
import { changeCategoryName } from '../redux/Slices/searchSlice';
import { passCategoryName } from '../redux/Slices/categorySlice';

export default function Left() {
    let dispatch = useDispatch();

    const [apidata , setapidata] = useState();

    useEffect(()=>{

        var apiPath = `https://fakestoreapi.com/products/categories`

        fetch(apiPath)
        .then(res=>res.json())
        .then(val=>{
            console.log(val);
            setapidata(val);

        })
    }, [])


    function getCategoryName(catname){
        console.log(catname);
        dispatch(passCategoryName(catname))
    }
  return (
    <>
        <Container>
            <h2>CATEGORIES</h2>
            <ul>
                {
                    apidata && apidata.length>0 && apidata.map((val)=>
                        <li onClick={()=>{getCategoryName(val)}}>{val}</li>
                    )
                }

            </ul>
        </Container>
    </>
  )
}

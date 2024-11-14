import React, { useEffect } from 'react'
import Menu from './Menu'
import { Outlet } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addRecordInPageLoad } from '../redux/Slices/cartSlice';

export default function App() {
  let dispatch = useDispatch();

  useEffect(()=>{
    var ansStorage = localStorage.getItem('cartRecord');
    console.log('APP');
    console.log(ansStorage);

    if(ansStorage !== null){
      var recordToDispatch = JSON.parse(ansStorage);
      console.log(recordToDispatch);
      dispatch(addRecordInPageLoad(recordToDispatch))
    }
    }, [])
  return (
    <>
    <Menu/>
    <Outlet/>

    </>
  )
}

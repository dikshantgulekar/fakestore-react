import React from 'react'
import Searchbox from './Searchbox'
import { useSelector } from 'react-redux'
import Searchresult from './Searchresult';

export default function Search() {

  let resultAfterSearch = useSelector(state => state.search.value);
  console.log(resultAfterSearch);

  return (
    <>
    <Searchbox/>
    {/* category Name : {resultAfterSearch} */}
    {
      resultAfterSearch && resultAfterSearch!="" && <Searchresult catname={resultAfterSearch}/>
      
    }
    </>
  )
}

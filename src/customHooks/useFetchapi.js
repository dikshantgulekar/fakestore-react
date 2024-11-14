import React, { useEffect, useState } from 'react'

export default function useFetchapi(apiPath, extra=[]) {

    const [apidata, setapidata] = useState([]);

    useEffect(()=>{
        console.log(apiPath);
        
        fetch(apiPath)
        .then(res=>res.json())
        .then(val=>{
            console.log(val);
            setapidata(val)
        })
    }, extra)
  return apidata;
}

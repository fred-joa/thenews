import { useState, useEffect } from "react";

const useFetch = (url)=>{
    const [data, setData] = useState(null);
    let ignore = false;
    useEffect(()=>{
        fetch(url)
        .then((res) =>   res.json() )
        .then((data)=>setData(data))
        .catch((error)=>{
            console.log(error);
        })
    },[url]);
    return [data];
}
export default useFetch;
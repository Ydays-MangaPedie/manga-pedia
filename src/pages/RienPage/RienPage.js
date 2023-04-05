import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";

function RienPage() {
    const {data, error, fetchData} = useFetch({url:"/manga", method:"GET", body:null, token:null});

    useEffect(() => {
        fetchData();
    },[]);
    console.log("data : ", data);
    if(error) console.log(error);
    return (
        
      <>
        
      </>
    );
  }
  
  export default RienPage;
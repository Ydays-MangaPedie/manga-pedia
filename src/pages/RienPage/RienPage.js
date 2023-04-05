import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import RienCompo from "../../components/RienCompo"

  const Index = () => {
    const { error, data, fetchData } = useFetch('/manga', null, 'GET');
const [manga,setManga] = useState();
    useEffect(() => {
      fetchData();
    }, []);
  
    
    useEffect(()=>{
      console.log("data : ", data)
      setManga(data.data);
    }
    ,[data])

    if (error) return <div>Error: {error.message}</div>;

    return (
      <div>
        <h1>Manga List:</h1>
        <ul>
          {manga && manga.map(item => (
            <li key={item.id}>
              <h2>{item.title}</h2>
              <img src={item.image_url} alt={item.title} />
              <p>Status: {item.status}</p>
              <p>Synopsis: {item.synopsis}</p>
              <p>Number of chapters: {item.num_chapters}</p>
              <p>Number of volumes: {item.num_volumes}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Index;
  
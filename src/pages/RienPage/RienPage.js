import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import RienCompo from "../../components/RienCompo"

  const Index = () => {
    const { error, data, fetchData } = useFetch('/character/?idmanga=1', null, 'GET');
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
            <li key={item.idmanga}>
              <h2>{item.nom}</h2>
              <img src={item.imgURL} alt={item.nom} />
              <p>Desc: {item.desc_perso}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Index;
  
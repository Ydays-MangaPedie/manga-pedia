import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
// import CardList from "../components/CardList";
import NavBar from "../../components/NavBar";
// import TitlePage from "./../components/TitlePage";
import ArcPage from "../ArcPage";
import Footer from "../../components/Footer";
import CharacterPage from "../CharacterPage";
import useFetch from "../../hooks/useFetch";
import { useContext } from "react";
import CharacterContext, { CharacterProvider } from "../../contexts/CharacterProvider";

function MangaPage() {
  const [page, setPage] = useState(0);
  const pages = ["résumé", "personnages", "arcs"];
  // Récupérer les données url
  const location = useLocation();
  const [pageToRender, setPageToRender] = useState();

  const { error, data, fetchData } = useFetch('/character/?idmanga=1', null, 'GET');
  const [manga,setManga] = useState();
      useEffect(() => {
        fetchData();
      }, []);
    
      
      useEffect(()=>{
        console.log("data 1: ", data.data)
        setManga(data.data);
      }
      ,[data])
  
      
      

  // useEffect(() => {
  //     if (data) {
  //       setCharacter(data);
  //       setCharacterForm(data);
  //     }
  //     console.log(data)
  // }, [data]);

  useEffect(() => {
    switch (page) {
      case 1:
        setPageToRender(<CharacterPage personnage={manga}/>);
        break;
      case 2:
        setPageToRender(<ArcPage arcs={manga.arc} />);
        break;
      default:
        setPageToRender("erreur");
        break;
    }
  }, [page]);

  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <NavBar pages={pages} actualPage={page} setPage={setPage} />
      {pageToRender}
      <Footer/>
    </>
  );
}

export default MangaPage;
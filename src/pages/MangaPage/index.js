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
  const manga = location.state.data;
  const [pageToRender, setPageToRender] = useState();
  const {isLoading, error, data, fetchData} = useFetch (
    "/character/?idmanga=1",
    null,
    "GET"
);

  const [isOpen, setIsOpen] = useState(false);
  const {character, setCharacter} = useContext(CharacterContext);
  const [characterForm, setCharacterForm] = useState({});

  useEffect(() => {
      fetchData()
  }, []);

  useEffect(() => {
      if (data) {
        setCharacter(data);
        setCharacterForm(data);
      }
      console.log(data)
  }, [data]);

  useEffect(() => {
    switch (page) {
      case 1:
        setPageToRender(<CharacterPage personnage={manga.personnages}/>);
        break;
      case 2:
        setPageToRender(<ArcPage arcs={manga.arc} />);
        break;
      default:
        setPageToRender("erreur");
        break;
    }
  }, [page]);

  return (
    <>
      <NavBar pages={pages} actualPage={page} setPage={setPage} />
      {pageToRender}
      <Footer/>
    </>
  );
}

export default MangaPage;
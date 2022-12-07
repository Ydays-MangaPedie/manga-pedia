import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
// import CardList from "../components/CardList";
import NavBar from "./../components/NavBar";
import TitlePage from "./../components/TitlePage";
import ArcPage from "./ArcPage";
function MangaPage() {
  const [page, setPage] = useState(0);
  const pages = ["résumé", "personnages", "arcs", "galerie"];
  // Récupérer les données url
  const location = useLocation();
  const manga = location.state.data;
  const [pageToRender, setPageToRender] = useState();
// console.log({manga});
console.log(manga.arc);
  useEffect(() => {
    switch (page) {
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
      <TitlePage title={pages[page]} />
      {pageToRender}
    </>
  );
}

export default MangaPage;

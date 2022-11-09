import {useLocation} from "react-router-dom";

function MangaPage() {
    // Récupérer les données url
    const location = useLocation();
    const manga = location.state.data;

    return (<>
    <h1>{manga.title}</h1>
    <p>{manga.resume}</p>
    <p>liste des arc</p>
    <p>liste des personnages </p>
    </>);
}

export default MangaPage;
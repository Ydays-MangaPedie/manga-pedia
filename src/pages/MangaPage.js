import {useLocation} from "react-router-dom";
import CardList from "../components/CardList";

function MangaPage() {
    // Récupérer les données url
    const location = useLocation();
    const manga = location.state.data;

    return (<>
    <h1 className="text-center text-capitalize">{manga.title}</h1>
    <h5>Synopsis</h5>
    <p>{manga.resume}</p>
    <h5>Arcs</h5>
    <CardList data={manga.arc}/>
    <h5>Personnages</h5>
    <CardList data={manga.personnages}/>
    </>);
}

export default MangaPage;
import {useLocation} from "react-router-dom";
import CardList from "../components/CardList";
import Navbar from "../components/Navbar";
function MangaPage() {
    // Récupérer les données url
    const location = useLocation();
   

    return (<>
    <Navbar/>
    </>);
}

export default MangaPage;
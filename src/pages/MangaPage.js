import {useLocation} from "react-router-dom";

function MangaPage() {
    // Récupérer les données url
    const location = useLocation();
    const manga = location.state.data;

}

export default MangaPage;
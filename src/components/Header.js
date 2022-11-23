import "../styles/Header.css";
import Menu from "../components/Menu";
function Header() {
    return (<>
    <header className="d-flex justify-content-between mb-4">
        <div class="bg-img">
            hello   
     
        </div>

           
        <h1>MANGAPÉDIE</h1>
        
        <div className="empty"></div>
    </header>
    <Menu />
    </>);
}

export default Header;
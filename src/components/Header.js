import "../styles/Header.css";

function Header() {
    return (<>
    <header className="d-flex justify-content-between mb-4">
       
        <img className="center" src={require("../images/Logo-Mangapedie.png")} alt="Logo" />
        
        
        
        <div className="empty"></div>
    </header>
    
    </>);
}

export default Header;
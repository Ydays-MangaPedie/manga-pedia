import "../styles/Header.css";

function Header() {
    return (<>
    <header className="d-flex justify-content-between mb-4">
       
        <img className="logo float-end" src="https://www.kanpai.fr/sites/default/files/styles/og/public/naruto-tag.jpg" alt="Logo" />
        
        <h1>MANGAPÉDIE</h1>
        <div className="empty"></div>
    </header>
    
    </>);
}

export default Header;
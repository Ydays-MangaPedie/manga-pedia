import "./Menu.css";
// import "../script/MenuScript.js"
import $ from "jquery";
function Menu() {
    return (<>
   
        <div className="menu-bg"></div>
        <div className="menu-burger" onClick={function() {
            $('.menu-bg, .menu-items, .menu-burger').toggleClass('fs');
            $('.menu-burger').text() === "☰" ? $('.menu-burger').text('✕') : $('.menu-burger').text('☰');
            }}>☰</div>
        <div className="menu-items" onClick={function() {
            $('.menu-bg, .menu-items, .menu-burger').toggleClass('fs');
            $('.menu-burger').text() === "☰" ? $('.menu-burger').text('✕') : $('.menu-burger').text('☰');
                }}>
        <div><a href="/"><p className="whiteP">Accueil</p></a></div>
        <div><p className="whiteP">Anime List</p></div>
        <div><a href="/about"><p className="whiteP">A propos</p></a></div>
        <div><a href="/contact"><p className="whiteP">Contact</p></a></div>
        </div>
        
        </>);
}

export default Menu;
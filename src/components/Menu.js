import "../styles/Menu.css";
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
        <div><p>Accueil</p></div>
        <div><p>Anime List</p></div>
        <div><p>A propos</p></div>
        <div><p>Contact</p></div>
        </div>
        
        </>);
}

export default Menu;
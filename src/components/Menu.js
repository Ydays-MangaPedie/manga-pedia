import "../styles/Menu.css";
import "../script/MenuScript.js"

function Menu() {
    return (<>
        {/* <nav className="menu">
            <ul className="links">
                <li className="items">
                    <a href="" className="link">
                        Accueil
                    </a>
                </li>
                <li className="items">
                    <a href="" className="link">
                        Anime List
                    </a>
                </li>
                <li className="items">
                    <a href="" className="link">
                        A propos
                    </a>
                </li>
                <li className="items">
                    <a href="" className="link">
                        Contact
                    </a>
                </li>
            </ul>
            <button className="burger">
                <span className="burger-bar"></span>
            </button>
        </nav> */}
        <div class="menu-bg"></div>
        <div class="menu-burger">☰</div>
        <div class="menu-items">
        <div><p>Accueil</p></div>
        <div><p>Anime List</p></div>
        <div><p>A propos</p></div>
        <div><p>Contact</p></div>
        </div>
        <script src="../script/MenuScript.js"></script>
        </>);
}

export default Menu;
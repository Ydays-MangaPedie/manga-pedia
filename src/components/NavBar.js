import Menu from "./../components/Menu";
import "./../styles/NavBar.css";
function NavBar({ pages, actualPage, setPage }) {
  return (
    <>
      <div>
        <div className="navigation text-center mt-3">
        <img className="float-start" src={require("../images/Logo-Mangapedie.png")} alt="Logo" />
        <ul>
          {pages.map((navItem, id) => {
            if (actualPage === id) {
              return (
                <button
                key={id}
                  type="button"
                  className="btn-nav"
                  onClick={() => {
                    setPage(id);
                  }}
                >
                  <li className="active">
                    <p data-hover={navItem}>
                    {navItem} <span data-hover={navItem}></span>
                    </p>
                  </li>
                </button>
              );
            }
            return (
              <button
              key={id}
                type="button"
                className="btn-nav"
                onClick={() => {
                    setPage(id);
                }}
              >
                <li>
                  <p data-hover={navItem}>
                  {navItem} <span data-hover={navItem}></span>
                  </p>
                </li>
              </button>
            );
          })}
        </ul>
        </div>
        <Menu />
      </div>
    </>
  );
}

export default NavBar;
import "./Nav.scss";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Nav() {
  return (
    <div className="navContainer">
      <div className="name">Sara Artese</div>
      <div className="nav">
        <ul>
          <li>
            <Link className="navLink" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="navLink" to="/projectgallery">
              Project Gallery{" "}
            </Link>
          </li>
          <li>
            <HashLink
              scroll={(el) =>
                el.scrollIntoView({ behavior: "auto", block: "center" })
              }
              to="/#connect"
            >
              Connect
            </HashLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;

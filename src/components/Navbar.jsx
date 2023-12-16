import { NavLink } from "react-router-dom"
import gitpud from "./img/Gitpud.png"
function Navbar() {
  function  Menu() {
    const navbarList = document.getElementById("navbarList");
    navbarList.classList.toggle("active");
  }
  return (
    <div className="navbar">
      <div className="box1">
        <NavLink to={"/"}><img src={gitpud} alt="git pud" /></NavLink>
      </div>
      <div className="box2">
        <nav  className="navbar">
          <div  className="navbar-toggle" onClick={Menu}>
            <div  className="toggle-bar"></div>
            <div  className="toggle-bar"></div>
            <div  className="toggle-bar"></div>
          </div>
          <ul  className="navbar-list" id="navbarList">
            <li><NavLink to="/">Features</NavLink></li>
            <li><NavLink to="/">Pricing</NavLink></li>
            <li><NavLink to="/">Blog</NavLink></li>
            <li><NavLink to="/">Docs</NavLink></li>
            <li><NavLink to="/">Changelog</NavLink></li>
            <li><NavLink to="/">We're hiring</NavLink></li>
          </ul>
        </nav>
      </div>
      <div className="box3">
        <li> <NavLink to="login"><button>Login</button></NavLink></li>
      </div>
    </div>
  )
}

export default Navbar

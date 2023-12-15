import { NavLink } from "react-router-dom"
import gitpud from "./img/Gitpud.png"
function Navbar() {
  return (
    <div className="navbar">
      <div className="box1">
        <NavLink to={"/"}><img src={gitpud} alt="git pud" /></NavLink>
      </div>
      <div className="box2">
        <li><NavLink className={"li"} to="Section1">Features</NavLink></li>
        <li><NavLink className={"li"} to="Section2">Pricing</NavLink></li>
        <li><NavLink className={"li"} to="Section3">Blog</NavLink></li>
        <li><NavLink className={"li"} to="Section4">Docs</NavLink></li>
        <li><NavLink className={"li"} to="Section5">Changelog</NavLink></li>
        <li><NavLink className={"li"} to="Section6">We're hiring</NavLink></li>
      </div>
      <div className="box3">
        <li> <NavLink to="login"><button>Login</button></NavLink></li>
      </div>
    </div>
  )
}

export default Navbar

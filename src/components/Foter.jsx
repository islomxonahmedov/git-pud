import { NavLink } from "react-router-dom"
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import gitpud from "./img/Gitpud2.png"
function Foter() {
  return (
    <div className="footer">
      <div className="footer1">
        <Footer home={"Gitpod"} home1={"Home"} home2={"Features"} home3={"Pricing"} home4={"Changelog"} home5={"Blog"} home6={"Docs"} home7={"We're hiring"} />
        <Footer home={"Developer"} home1={"Getting started"} home2={"Screencasts"} home3={"Blog"} home4={"Documentation"} home5={"Report a bug"} home6={"Community"} home7={""} />
        <Footer home={"Company"} home1={"About"} home2={"Careers"} home3={"Contact"} home4={"Media Kit"} home5={""} home6={""} home7={""} />
        <Footer home={"Legal"} home1={"HomImprinte"} home2={"Terms of Service"} home3={"Privacy Policy"} home4={""} home5={""} home6={""} home7={""} />
      </div>
      <div className="footer2">
        <div className="footerone">
          <img src={gitpud} alt="" />Copyright © 2021 Gitpod
        </div>
        <div className="footertwo">
          <FaTwitter className="icon nn"/>
          <FaGithub className="icon"/>
          <FiMessageCircle className="icon nn"/>
        </div>
      </div>
    </div>
  )
}
export function Footer({ home, home1, home2, home3, home4, home5, home6, home7 }) {
  return (
    <div className="boxfooter">
      <h2>{home}</h2>
      <li><NavLink className={"li"} to="/">{home1}</NavLink></li>
      <li><NavLink className={"li"} to="Section1">{home2}</NavLink></li>
      <li><NavLink className={"li"} to="Section2">{home3}</NavLink></li>
      <li><NavLink className={"li"} to="Section5">{home4}</NavLink></li>
      <li><NavLink className={"li"} to="Section3">{home5}</NavLink></li>
      <li><NavLink className={"li"} to="Section4">{home6}</NavLink></li>
      <li><NavLink className={"li"} to="Section6">{home7}</NavLink></li>
    </div>
  )
}

export default Foter

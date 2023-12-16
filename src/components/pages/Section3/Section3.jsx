import Style from "./Section3.module.css"
import rasim16 from "../../img/rasim16.png"
function Section3() {
  return (
    <div className={Style.section3}>
      <div className={Style.box1}>
        <h1>Think CI/CD for dev environments</h1>
        <p>We invented prebuilds so application code, configuration and infrastructure can all be stored as machine-executable code in your git repositories and applied to dev environments automatically and continuously.</p>
        <button className={Style.btn1}>More on prebuilds</button>
        <button className={Style.btn2}>Documentation</button>
      </div>
      <div className={Style.box2}>
        <img src={rasim16} alt="salom" />
      </div>
    </div>
  )
}

export default Section3
import Style from "./Section1.module.css"
import rasim1 from "../../img/rasimi1.png"
import rasim2 from "../../img/rasimi2.png"
import rasim3 from "../../img/rasimi3.png"
import rasim4 from "../../img/rasim4.png"
function Section1() {
  return (
    <div className={Style.secton1}>
      <div className={Style.box1}>
        <h1>Always</h1>
        <h1>Ready to Code.</h1>
        <p>Spin up fresh, automated dev environments</p>
        <p>for each task, in the cloud, in seconds.</p>
        <div className={Style.boxx}>
          <div className={Style.box1btn}>
            <button>Try Now</button>
          </div>
          <div className={Style.box1p}>
            <p>Open a workspace. <br />Start from any Git context.</p>
          </div>
        </div>
        <div className={Style.boo}>
          <img src={rasim2} alt="1" />
          <img src={rasim3} alt="2" />
          <img src={rasim4} alt="3" />
        </div>
      </div>
      <div className={Style.box2}>
        <img src={rasim1} alt="" />
      </div>
    </div>
  )
}

export default Section1
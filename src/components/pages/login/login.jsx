import Style from "./login.module.css"
import { NavLink } from "react-router-dom"
import { IoIosCloseCircleOutline } from "react-icons/io";
function Login() {
  return (
    <div className={Style.container}>
      <NavLink to="/" className={Style.close}><IoIosCloseCircleOutline /></NavLink>
      <div className={Style.box1}>
        <h1>Welcome !</h1>
        <h3>Material Login Form #02</h3>
        <h4>Designed By <span>SayedFchy</span></h4>
      </div>
      <div className={Style.box2}>
        <h1>Login</h1>
        <div className={Style.div}></div>
        <input className={Style.input1} type="email" placeholder="Enter Username" />
        <input className={Style.input2} type="email" placeholder="Enter Password" />
        <button className={Style.button1}>LOGIN</button><br />
        <button className={Style.button2}>Don't Have Account? Signup</button>
        <a className={Style.forget}href="#"></a>
        <NavLink className={Style.forget} to="/">Forgot</NavLink>
      </div>
    </div>
      )
}

export default Login
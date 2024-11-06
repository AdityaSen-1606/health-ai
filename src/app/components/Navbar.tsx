import style from "./navbar.module.css"

export const Navbar = ()=>{
    return (
      <div className={style.box}>
          <img src="/logo.png" alt="logo" className={style.logo}/>
        <div>
          <ul className={style.link}>
            <li>Products</li>
            <li>Privacy</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <button className={style.trial}>Start Free Trial</button>
        </div>
      </div>
    );
}
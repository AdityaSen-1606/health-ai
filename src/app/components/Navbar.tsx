import style from "./navbar.module.css"

type NavbarProps = {
  scrollToContact: () => void;
};

export const Navbar: React.FC<NavbarProps> = ({ scrollToContact }) => {
  return (
    <div className={style.box}>
      <img src="/logo.png" alt="logo" className={style.logo} />
      <div>
        <ul className={style.link}>
          <li>Products</li>
          <li>Privacy</li>
          <li onClick={scrollToContact}>Contact Us</li>
        </ul>
      </div>
      <div>
        <button className={style.trial} onClick={scrollToContact}>
          Start Free Trial
        </button>
      </div>
    </div>
  );
};
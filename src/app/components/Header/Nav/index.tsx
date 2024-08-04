import styles from "./Nav.module.scss";
const Nav = () => {
  
  return (  
    <nav className={styles["header__nav nav"]}>
          <a href="#header" className={styles["nav__logo"]}>SB</a>
          <div className={styles["nav__wrapper"]}>
            <ul className={styles["nav__list"]}>
              <li className={styles["nav__list-item"]}><a href="#about" className={styles["nav__list-link"]}>About</a></li>
              <li className={styles["nav__list-item"]}><a href="#projects" className={styles["nav__list-link"]}>Projects</a>
              </li>
              <li className={styles["nav__list-item"]}><a href="#contacts" className={styles["nav__list-link"]}>Contact</a>
              </li>
            </ul>
          </div>
          <div className={styles["nav__language"]}>
            <p className={styles["nav__language-curr"]}>EN</p>
            <a className={styles["nav__language-link"]} href="./ru.html">RU</a>
          </div>
          <div className={styles["nav-icon icon"]}>
            <span className={styles["icon__stripe"]}></span>
              <span className={styles["icon__stripe"]}></span>
          </div>
        </nav>
  );
}
 
export default Nav;
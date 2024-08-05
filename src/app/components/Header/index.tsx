import Nav from "./Nav";

const Header = () => {
  return (  
    <header id="header" className="header">
      <div className="header__fixed-top">
        <Nav/>
      </div>
      <div className="header__hero header__hero--en" id="hero">
        <div className="header__hero-wrapper">
          <picture>
            <img className="header__hero-img" src="./images/hero.svg" alt="Frontal picture of Sergei Brykalov"/>
          </picture>
          <div className="header__hero-content">
            <div className="wrapper">
              <h1><span className="typed-text header__hero-title"></span><span className="cursor">&nbsp;</span></h1>
            </div>
            <p className="header__hero-text">
              I am a frontend developer.<br />
              My passion is creating visually appealing and user-friendly websites and apps.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
 
export default Header;
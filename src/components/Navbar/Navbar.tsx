import { FC, useState } from "react";
import NavigationLink from "./components/NavigationLink";
import { TfiMenuAlt } from "react-icons/tfi";
import ClaireSimple from "../icons/ClaireSimple";
import { Link } from "wouter";
import { handleScrollTop } from "../../utils/HandleScrollTop";

;

const Navbar: FC = () => {
  const [focus, setFocus] = useState(false);
  return (<>
    <div
      className="navbar__container"

    >
      <img className='img__navbar--header' src='https://0.soompi.io/wp-content/uploads/2019/10/22192743/TWICE-Jeongyeon-7.jpg' alt='Jeongyeon-img-header' />
      <nav className='navbar__links--container'>
        <>

          <TfiMenuAlt size="2rem" onClick={() => setFocus((prev) => !prev)} />
          {focus && (
            <nav
              className="navbar__links--container-anchor"
            >
              <NavigationLink props={{ route: "asd", text: "home" }} />
              <NavigationLink props={{ route: "asd", text: "shop" }} />
              <NavigationLink props={{ route: "asd", text: "product" }} />
              <NavigationLink props={{ route: "asd", text: "about us" }} />
              <NavigationLink props={{ route: "asd", text: "community" }} />
            </nav>
          )}
        </>
        <Link href="/" onClick={handleScrollTop} className="navbar__logo">
          <a>
            <ClaireSimple props={{ width: '100px' }} />
          </a>
        </Link>

        <nav className="navbar__button--container" >
          <button style={{ display: "none" }} className="cta">
            Sing up
          </button>
          <button className="cta">Sing in</button>
        </nav>
      </nav>
    </div>
  </>
  );
};

export default Navbar;

import { FC, useState } from "react";
import NavigationLink from "./components/NavigationLink";
import { TfiMenuAlt } from "react-icons/tfi";
import ClaireSimple from "../icons/ClaireSimple";

const Navbar: FC = () => {
  const [focus, setFocus] = useState(false);
  return (<>
    <div
      className="navbar"
      style={{
        display: "flex",
        gap: "10px",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <img className='img__navbar--header' src='https://0.soompi.io/wp-content/uploads/2019/10/22192743/TWICE-Jeongyeon-7.jpg' alt='Jeongyeon-img-header' />
      <nav className='navbar__links--container'>
        <>

          <TfiMenuAlt size="2rem" onClick={() => setFocus((prev) => !prev)} />
          {focus && (
            <nav
              style={{
                display: "flex",
                gap: "2rem",
                alignItems: "center",
                flexDirection: "column",
                position: "absolute",
                top: "3.5rem",
                left: "0",
                backgroundColor: "#ccc",
                width: "100%",
                minHeight: "100vh",
                padding:'2rem 0'
              }}
            >
              <NavigationLink props={{ route: "asd", text: "home" }} />
              <NavigationLink props={{ route: "asd", text: "shop" }} />
              <NavigationLink props={{ route: "asd", text: "product" }} />
              <NavigationLink props={{ route: "asd", text: "about us" }} />
              <NavigationLink props={{ route: "asd", text: "community" }} />
            </nav>
          )}
        </>
        <a style={{position: "relative",left:'16px'}} href="#" className="nav__link">
          <ClaireSimple props={{width:'100px'}} />
        </a>

        <nav style={{ display: "flex", gap: "10px" }}>
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

import{ FC, useState } from "react";
import NavigationLink from "./components/NavigationLink";
import { TfiMenuAlt } from "react-icons/tfi";
import ClaireSimple from "../icons/ClaireSimple";

const Navbar: FC = () => {
  const [focus, setFocus] = useState(false);
  return (
    <div
      className="navbar"
      style={{
        display: "flex",
        gap: "10px",
        justifyContent: "space-between",
        alignItems: "center",
        padding:'.5rem'
      }}
    >
      <>
        <TfiMenuAlt size="2rem" onClick={() => setFocus((prev) => !prev)} />
        {focus && (
          <nav
            style={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
              flexDirection: "column",
              position: "absolute",
              top: "3.5rem",
              left: "0",
              backgroundColor: "#ccc",
              width: "100%",
              minHeight: "80vh",
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
      <a href="#" className="nav__link">
        <ClaireSimple props={{ width: "88px" }} />
      </a>

      <nav style={{ display: "flex", gap: "10px" }}>
        <button style={{ display: "none" }} className="cta">
          Sing up
        </button>
        <button className="cta">Sing in</button>
      </nav>
    </div>
  );
};

export default Navbar;

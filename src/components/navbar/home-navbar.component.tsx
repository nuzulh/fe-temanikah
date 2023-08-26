import { Link, Outlet } from "react-router-dom";
import { Navbar } from ".";
import { faDoorOpen, faEarth } from "@fortawesome/free-solid-svg-icons";
import { menuConfig } from "../../configs";
import { useState } from "react";
import { useRootState } from "../../hooks";
import { Button } from "../buttons.component";

export function HomeNavbar() {
  const darkMode = useRootState((state) => state.appState.darkMode);
  const [showMobileNavbar, setShowMobileNavbar] = useState<boolean>(false);

  return (
    <>
      <Navbar.NavMenus
        showMobileNavbar={showMobileNavbar}
        setShowMobileNavbar={setShowMobileNavbar}
        logoLinkTo="HOME"
      >
        <Navbar.NavMenuItem
          to="THEMES"
          title="Tema/Preset"
          icon={faEarth}
          onClick={() => setShowMobileNavbar(false)}
        />
        <Navbar.NavMenuItem
          to="PACKAGES"
          title="Paket"
          icon={faEarth}
          onClick={() => setShowMobileNavbar(false)}
        />
        <Navbar.NavMenuItem
          to="CONTACT"
          title="Kontak"
          icon={faEarth}
          onClick={() => setShowMobileNavbar(false)}
        />
        <Link
          className="w-4/5 my-4"
          to={menuConfig.get("SIGNIN").path}
          onClick={() => setShowMobileNavbar(false)}
        >
          <Button
            outline={!darkMode}
            icon={faDoorOpen}
          >
            Masuk
          </Button>
        </Link>
      </Navbar.NavMenus>
      <Outlet />
    </>
  );
}

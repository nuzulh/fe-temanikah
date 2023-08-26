import { Outlet, useNavigate } from "react-router-dom";
import { Navbar } from ".";
import { faDoorClosed, faEarth, faPerson } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useRootState } from "../../hooks";
import { Button } from "../buttons.component";
import { faChartBar } from "@fortawesome/free-regular-svg-icons";
import { useDispatch } from "react-redux";
import { signOutAction } from "../../redux";

export function AppNavbar() {
  const dispath = useDispatch();
  const navigate = useNavigate();
  const darkMode = useRootState((state) => state.appState.darkMode);
  const [showMobileNavbar, setShowMobileNavbar] = useState<boolean>(false);

  return (
    <>
      <Navbar.NavMenus
        showMobileNavbar={showMobileNavbar}
        setShowMobileNavbar={setShowMobileNavbar}
        logoLinkTo="DASHBOARD"
      >
        <Navbar.NavMenuItem
          to="DASHBOARD"
          title="Dhasboar"
          icon={faChartBar}
        />
        <Navbar.NavMenuItem
          to="HISTORY"
          title="Riwayat"
          icon={faEarth}
        />
        <Navbar.NavMenuItem
          to="PROFILE"
          title="Profil"
          icon={faPerson}
        />
        <Button
          outline={!darkMode}
          className="my-4"
          icon={faDoorClosed}
          onClick={() => dispath(
            signOutAction(navigate)
          )}
        >
          Keluar
        </Button>
      </Navbar.NavMenus>
      <Outlet />
    </>
  );
}

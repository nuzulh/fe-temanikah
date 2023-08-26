import { Navbar } from ".";
import { Outlet, useNavigate } from "react-router-dom";
import { faCartShopping, faDoorClosed, faHistory, faPerson } from "@fortawesome/free-solid-svg-icons";
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
          title="Dashboard"
          icon={faChartBar}
          onClick={() => setShowMobileNavbar(false)}
        />
        <Navbar.NavMenuItem
          to="SUBSCRIPTIONS"
          title="Paket"
          icon={faCartShopping}
          onClick={() => setShowMobileNavbar(false)}
        />
        <Navbar.NavMenuItem
          to="HISTORY"
          title="Riwayat"
          icon={faHistory}
          onClick={() => setShowMobileNavbar(false)}
        />
        <Navbar.NavMenuItem
          to="PROFILE"
          title="Profil"
          icon={faPerson}
          onClick={() => setShowMobileNavbar(false)}
        />
        <div className="w-4/5 my-4">
          <Button
            outline={!darkMode}
            icon={faDoorClosed}
            onClick={() => dispath(
              signOutAction(navigate)
            )}
          >
            Keluar
          </Button>
        </div>
      </Navbar.NavMenus>
      <Outlet />
    </>
  );
}

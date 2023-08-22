import { useNavigate } from "react-router-dom";
import { Button, Navbar, ScreenContainer, Text } from "../../components";
import { useDispatch } from "react-redux";
import { navigateToAction } from "../../redux";
import { faDoorOpen, faEarth } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useRootState } from "../../hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function HomePage() {
  const dispath = useDispatch();
  const navigate = useNavigate();
  const darkMode = useRootState((state) => state.appState.darkMode);
  const [showMobileNavbar, setShowMobileNavbar] = useState<boolean>(false);

  return (
    <>
      <Navbar.NavMenus
        showMobileNavbar={showMobileNavbar}
        setShowMobileNavbar={setShowMobileNavbar}
      >
        <Navbar.NavMenuItem
          title="Menu A"
          icon={faEarth}
          onClick={() => {}}
        />
        <Navbar.NavMenuItem
          title="Menu B"
          icon={faEarth}
          onClick={() => {}}
        />
        <Navbar.NavMenuItem
          title="Menu C"
          icon={faEarth}
          onClick={() => {}}
        />
        <Button
          outline={!darkMode}
          className="w-4/5 my-4 flex items-center justify-center"
          onClick={() => dispath(
            navigateToAction({
              navigate,
              name: "SIGNIN",
            })
          )}
        >
          <FontAwesomeIcon
            icon={faDoorOpen}
            className={`mr-2 ${!darkMode ? "text-teal-600" : ""}`}
          />
          <Text className={!darkMode ? "text-teal-600" : ""}>Masuk</Text>
        </Button>
      </Navbar.NavMenus>
      <ScreenContainer className={darkMode ? "bg-slate-600" : ""}>
        <Text>dua</Text>
      </ScreenContainer>
      <ScreenContainer className="bg-red-300">
        <Text>tiga</Text>
      </ScreenContainer>
      <ScreenContainer className="bg-blue-300">
        <Text>empat</Text>
      </ScreenContainer>
    </>
  );
}

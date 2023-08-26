import { useDispatch } from "react-redux";
import { switchDarkModeAction } from "../../redux";
import { IconButton } from "../buttons.component";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { useRootState } from "../../hooks";
import { Dispatch, ReactElement, SetStateAction } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import { AvailableMenus } from "../../types";
import { menuConfig } from "../../configs";
import { Image } from "../image.component";

declare type NavMenusProps = {
  showMobileNavbar?: boolean;
  setShowMobileNavbar?: Dispatch<SetStateAction<boolean>>;
  logoLinkTo?: AvailableMenus;
  className?: string;
  children: ReactElement | ReactElement[];
};

export function NavMenus({
  showMobileNavbar,
  setShowMobileNavbar,
  logoLinkTo,
  className = "",
  children,
}: NavMenusProps) {
  const dispath = useDispatch();
  const navigate = useNavigate();
  const darkMode = useRootState((state) => state.appState.darkMode);

  return (
    <>
      <div className={`z-30 sticky top-0 h-14 w-full p-2 flex justify-between items-center ${darkMode ? "bg-slate-700" : "bg-white"} ${className}`}>
        <IconButton
          icon={faBars}
          className={darkMode ? "text-white" : "text-black"}
          onClick={() => setShowMobileNavbar!(true)}
        />
        <Image
          alt="logo"
          source={require("../../assets/logo.png")}
          onClick={() => navigate(menuConfig.get("HOME").path)}
        />
        <IconButton
          icon={darkMode ? faSun : faMoon}
          className={darkMode ? "text-white" : "text-black"}
          onClick={() => dispath(switchDarkModeAction(!darkMode))}
          size="lg"
        />
      </div>
      <div className={`${showMobileNavbar ? "visible left-0" : "invisible left-[-100%]"} z-30 fixed w-full h-full flex flex-col top-0 transition-all duration-300`}>
        <div className="bg-teal-600 h-14 w-full p-2 flex justify-between items-center">
          <IconButton
            icon={faClose}
            size="lg"
            color="white"
            onClick={() => setShowMobileNavbar!(false)}
          />
          <Image
            alt="logo"
            source={require("../../assets/logo.png")}
            onClick={() => {
              setShowMobileNavbar!(false);
              if (logoLinkTo)
                navigate(menuConfig.get(logoLinkTo).path);
            }}
          />
        </div>
        <div className={`w-full h-full ${darkMode ? "bg-slate-700 text-white" : "bg-white text-black"} flex flex-col items-center`}>
          {children}
        </div>
      </div>
    </>
  );
}

declare type NavMenuItemProps = {
  title: string;
  to: AvailableMenus;
  icon?: IconProp;
  className?: string;
  onClick?: () => void;
};

export function NavMenuItem({
  title,
  to,
  icon,
  className,
  onClick,
}: NavMenuItemProps) {
  const darkMode = useRootState((state) => state.appState.darkMode);

  return (
    <Link
      to={{ pathname: menuConfig.get(to).path }}
      className={`p-4 cursor-pointer ${darkMode ? "hover:bg-slate-600" : "hover:bg-slate-300"} w-full flex items-center ${className}`}
      onClick={onClick}
    >
      {icon ? (
        <FontAwesomeIcon
          icon={icon}
          className="mr-3 text-teal-600"
        />
      ) : null}
      {title}
    </Link>
  );
}

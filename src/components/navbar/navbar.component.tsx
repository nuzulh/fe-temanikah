import { useDispatch } from "react-redux";
import { updateAppStateAction } from "../../redux";
import { IconButton } from "../buttons.component";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { useRootState } from "../../hooks";
import { Dispatch, ReactElement, SetStateAction } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

declare type NavMenusProps = {
  showMobileNavbar?: boolean;
  setShowMobileNavbar?: Dispatch<SetStateAction<boolean>>;
  className?: string;
  children: ReactElement | ReactElement[];
};

export function NavMenus({
  showMobileNavbar,
  setShowMobileNavbar,
  className,
  children,
}: NavMenusProps) {
  const dispath = useDispatch();
  const darkMode = useRootState((state) => state.appState.darkMode);

  return (
    <>
      <div className={`${darkMode ? "bg-slate-700" : "bg-white"} sticky top-0 h-14 w-full p-2 flex justify-between items-center ${className}`}>
        <IconButton
          icon={faBars}
          className={darkMode ? "text-white" : "text-black"}
          onClick={() => setShowMobileNavbar!(true)}
        />
        <img alt="logo" src={require("../../assets/logo.png")} className="object-cover h-full" />
        <IconButton
          icon={darkMode ? faSun : faMoon}
          className={darkMode ? "text-white" : "text-black"}
          onClick={() => dispath(
            updateAppStateAction({
              darkMode: !darkMode,
            })
          )}
          size="lg"
        />
      </div>
      <div className={`${showMobileNavbar ? "visible left-0" : "invisible left-[-100%]"} fixed w-full h-full flex flex-col top-0 transition-all duration-300`}>
        <div className="bg-teal-600 h-14 w-full p-2 flex justify-between items-center">
          <IconButton
            icon={faClose}
            size="lg"
            color="white"
            onClick={() => setShowMobileNavbar!(false)}
          />
          <img alt="logo" src={require("../../assets/logo.png")} className="object-cover h-full" />
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
  onClick: () => void;
  icon?: IconProp;
  className?: string;
};

export function NavMenuItem({
  title,
  onClick,
  icon,
  className,
}: NavMenuItemProps) {
  const darkMode = useRootState((state) => state.appState.darkMode);

  return (
    <div
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
    </div>
  );
}

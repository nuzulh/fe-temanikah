import { ReactElement } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { navigateToAction } from "../redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-regular-svg-icons";
import { IconProp, SizeProp } from "@fortawesome/fontawesome-svg-core";

declare type ButtonProps = {
  onClick: () => void;
  className?: string;
  outline?: boolean;
  children: ReactElement | ReactElement[] | string;
};

export function Button({
  onClick,
  className = "",
  outline = false,
  children,
}: ButtonProps) {
  return (
    <button
      className={`text-sm text-white rounded transition-all duration-300 shadow py-2 px-4 cursor-pointer ${outline ? "border bg-transparent hover:bg-teal-600 hover:text-white border-teal-600 text-teal-600" : "bg-teal-600 hover:bg-opacity-60"} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

declare type IconButtonProps = {
  icon: IconProp;
  onClick: () => void;
  className?: string;
  color?: string;
  size?: SizeProp;
};

export function IconButton({
  icon,
  onClick,
  className = "",
  color = "black",
  size,
}: IconButtonProps) {
  return (
    <FontAwesomeIcon
      onClick={onClick}
      className={`cursor-pointer text-${color} hover:opacity-60 transition-all duration-300 py-1 px-3 ${className}`}
      icon={icon}
      size={size}
    />
  );
}

export function BackButton() {
  const navigate = useNavigate();
  const dispath = useDispatch();

  return (
    <IconButton
      icon={faArrowAltCircleLeft}
      size="xl"
      onClick={() => dispath(
        navigateToAction({
          navigate,
          name: "BACK",
        })
      )}
    />
  );
}

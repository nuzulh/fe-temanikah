import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-regular-svg-icons";
import { IconProp, SizeProp } from "@fortawesome/fontawesome-svg-core";

declare type ButtonProps = {
  onClick?: () => void;
  className?: string;
  outline?: boolean;
  icon?: IconProp;
  children: ReactElement | ReactElement[] | string;
};

export function Button({
  onClick,
  className = "",
  outline = false,
  icon,
  children,
}: ButtonProps) {
  return (
    <button
      className={`w-full text-sm rounded transition-all duration-300 shadow py-2 px-4 cursor-pointer ${outline ? "border bg-transparent hover:bg-teal-600 hover:text-white border-teal-600 text-teal-600" : "text-white bg-teal-600 hover:bg-opacity-60"} ${className}`}
      onClick={onClick}
    >
      {icon ? (
        <FontAwesomeIcon className="mr-2" icon={icon} />
      ) : null}
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

  return (
    <IconButton
      icon={faArrowAltCircleLeft}
      size="xl"
      onClick={() => navigate(-1)}
    />
  );
}

declare type TextButtonProps = {
  children: ReactElement | string;
  onClick?: () => void;
};

export function TextButton({
  children,
  onClick,
}: TextButtonProps) {
  return (
    <button
      className={`py-2 text-sm text-teal-500 hover:opacity-60`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

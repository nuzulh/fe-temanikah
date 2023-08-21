import { ReactElement } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { navigateToAction } from "../redux";

declare type ButtonProps = {
  onClick: () => void;
  type?: "primary" | "secondary" | "info" | "warning" | "danger";
  className?: string;
  children: ReactElement | ReactElement[] | string;
};

export function Button({
  onClick,
  type = "primary",
  className = "",
  children,
}: ButtonProps) {
  return (
    <button
      className={`bg-emerald-500 rounded hover:bg-opacity-70 transition-all duration-300 shadow py-2 px-4 cursor-pointer text-white mr-2 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export function BackButton() {
  const navigate = useNavigate();
  const dispath = useDispatch();

  return (
    <Button
      onClick={() => dispath(navigateToAction({
        navigate,
        name: "BACK",
      }))}
    >
      Back
    </Button>
  );
}

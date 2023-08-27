import { useRootState } from "../hooks";

declare type TextProps = {
  className?: string;
  onClick?: () => void;
  children: string | string[];
};

export function Text({
  className,
  onClick,
  children,
}: TextProps) {
  const darkMode = useRootState((state) => state.appState.darkMode);

  return (
    <p
      className={`${className} ${darkMode ? "text-white" : "text-black"}`}
      onClick={onClick}
    >
      {children}
    </p>
  );
}

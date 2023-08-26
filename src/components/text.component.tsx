import { useRootState } from "../hooks";

declare type TextProps = {
  className?: string;
  onClick?: () => void;
  children: string;
};

export function Text({
  className,
  onClick,
  children,
}: TextProps) {
  const darkMode = useRootState((state) => state.appState.darkMode);

  return (
    <p
      className={`${darkMode ? "text-white" : "text-black"} ${className}`}
      onClick={onClick}
    >
      {children}
    </p>
  );
}

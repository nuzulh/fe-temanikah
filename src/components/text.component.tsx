import { useRootState } from "../hooks";

declare type TextProps = {
  className?: string;
  children: string;
};

export function Text({
  className,
  children,
}: TextProps) {
  const darkMode = useRootState((state) => state.appState.darkMode);

  return (
    <p className={`${darkMode ? "text-white" : "text-black"} ${className}`}>
      {children}
    </p>
  );
}

import { ReactElement } from "react";
import { useRootState } from "../hooks";

declare type ScreenContainerProps = {
  className?: string;
  children: ReactElement | ReactElement[];
};

export function ScreenContainer({
  className,
  children,
}: ScreenContainerProps) {
  const darkMode = useRootState((state) => state.appState.darkMode);

  return (
    <div className={`h-screen w-screen p-3 ${darkMode ? "bg-slate-600" : "bg-white"} ${className}`}>
      {children}
    </div>
  );
}

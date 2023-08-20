import React, { ReactElement } from "react";

declare type ScreenContainerProps = {
  className?: string;
  children: ReactElement | ReactElement[];
};

export function ScreenContainer(
  { className, children }: ScreenContainerProps
) {
  return (
    <div className={`h-screen w-screen bg-yellow-100 ${className}`}>
      {children}
    </div>
  );
}

import { ReactElement } from "react";

declare type FieldProps = {
  className?: string;
  children: ReactElement | ReactElement[];
};

export default function Field({
  className = "",
  children,
}: FieldProps) {
  return (
    <form
      className={`flex flex-col m-auto left-0 right-0 ${className}`}
    >
      {children}
    </form>
  );
}

import { ReactElement } from "react";

declare type FieldProps = {
  className?: string;
  onSubmit: (data: any) => void;
  children: ReactElement | ReactElement[];
};

export default function Field({
  className = "",
  onSubmit,
  children,
}: FieldProps) {
  return (
    <div className="h-full flex items-center">
      <form
        className={`absolute rounded shadow bg-green-300 px-3 py-8 flex flex-col w-4/5 m-auto left-0 right-0 ${className}`}
        onSubmit={(data) => onSubmit(data)}
      >
        {children}
      </form>
    </div>
  );
}

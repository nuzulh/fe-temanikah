import { Text } from "./text.component";
// import { useRootState } from "../hooks";
import { Separator } from "./separator.component";

declare type CardProps = {
  title: string;
  subtitle?: string;
  className?: string;
  children?: any;
};

export function Card({
  title,
  subtitle,
  className,
  children
}: CardProps) {
  // const darkMode = useRootState((state) => state.appState.darkMode);

  return (
    <div className={`p-4 rounded-xl shadow-lg bg-slate-500 ${className}`}>
      <Text className="font-semibold">{title}</Text>
      {subtitle ? (
        <Text className="text-xs">{subtitle}</Text>
      ) : null}
      <Separator />
      {children}
    </div>
  );
}

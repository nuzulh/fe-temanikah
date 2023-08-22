declare type LabelProps = {
  text: string;
  size?: string;
  color?: string;
  className?: string;
};

export default function Label({
  text,
  size = "sm",
  color = "black",
  className = "",
}: LabelProps) {
  return (
    <h1 className={`pb-1 text-${color} text-${size} ${className}`}>
      {text}
    </h1>
  );
}

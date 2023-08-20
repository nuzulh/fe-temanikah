declare type LoadingProps = {
  size?: "sm" | "lg" | "xl";
};

export function Loading(
  { size = "lg" }: LoadingProps
) {
  return (
    <p className={`md:text-${size}`}>Loading...</p>
  );
}

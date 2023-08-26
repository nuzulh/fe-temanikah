declare type ImageProps = {
  alt: string;
  source: any;
  onClick?: () => void;
  className?: string;
};

export function Image({
  alt,
  source,
  onClick,
  className = "",
}: ImageProps) {
  return (
    <img
      onClick={onClick}
      alt={alt}
      src={source}
      className={`object-cover h-full ${className}`}
    />
  );
}

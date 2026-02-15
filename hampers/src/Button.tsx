import React from "react";

type ButtonProps = {
  src: string;
  alt?: string;
  onClick: () => void;
  className?: string;
};

export default function Button({ src, alt = "button", onClick, className }: ButtonProps) {
  return (
    <button type="button" onClick={onClick} className={className}>
      <img src={src} alt={alt} />
    </button>
  );
}
  
import React from "react";

export const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (
  props
) => {
  return (
    <button
      className="px-4 py-2 bg-stone-900 text-white rounded-md active:scale-90 transition-transform duration-150 ease-out"
      {...props}
    />
  );
};

export const Text: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = (
  props
) => {
  return <p className="text-stone-900 text-xl" {...props} />;
};

import React from "react";

export const Main: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <main className="flex items-center justify-center flex-col gap-12 h-full">
      {children}
    </main>
  );
};

export const Section: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <section className="flex flex-col gap-8">{children}</section>;
};

export const Row: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="flex flex-row items-center gap-4">{children}</div>;
};

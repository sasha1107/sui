import type { ReactNode } from "react";
import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface FooterProps extends ComponentProps<"footer"> {
  children: ReactNode;
}

export const Footer = ({ children, className }: FooterProps) => {
  return (
    <footer
      className={twMerge("fixed bottom-0 w-full max-w-screen-xs", className)}
    >
      {children}
    </footer>
  );
};

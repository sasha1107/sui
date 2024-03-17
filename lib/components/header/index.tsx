import type { ReactNode } from "react";

interface HeaderProps {
  left?: ReactNode;
  right?: ReactNode;
  children: ReactNode;
}

export const Header = ({ left, right, children }: HeaderProps) => (
  <header className={"flex items-center gap-4 sticky top-0 bg-white"}>
    {left && <div>{left}</div>}
    {children}
    {right && <div className={"absolute right-4"}>{right}</div>}
  </header>
);

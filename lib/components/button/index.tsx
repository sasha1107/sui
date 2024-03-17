import { twJoin, twMerge } from "tailwind-merge";
import type { HTMLProps, ReactNode } from "react";

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  children: ReactNode;
  type?: "primary" | "secondary" | "text";
  htmlType?: "button" | "submit" | "reset";
  primary?: boolean;
}

export const Button = ({
  children,
  className,
  type = "primary",
  htmlType,
  ...restProps
}: ButtonProps) => {
  return (
    <button
      {...restProps}
      type={htmlType}
      className={twMerge(
        "border-none cursor-pointer px-4 py-2 rounded bg-transparent hover:brightness-125",
        twJoin(
          type === "primary" && "bg-primary text-white",
          type === "secondary" &&
            "border border-gray-800 text-gray-800 hover:border-primary text-primary",
          type === "text" && "text-primary hover:bg-gray-200"
        ),
        className
      )}
    >
      {children}
    </button>
  );
};

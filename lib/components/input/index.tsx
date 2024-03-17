import { forwardRef } from "react";
import type { ComponentProps } from "react";
import { twJoin, twMerge } from "tailwind-merge";

interface InputProps extends ComponentProps<"input"> {
  type?: "default" | "underline";
  htmpType?: ComponentProps<"input">["type"];
  block?: boolean;
}

export const Input = forwardRef(
  (
    {
      className,
      htmpType = "text",
      type = "default",
      block = false,
      ...rest
    }: InputProps,
    ref: React.ForwardedRef<HTMLInputElement> | undefined
  ) => {
    return (
      <div
        className={twJoin(
          type === "default" && "rounded-lg bg-[#ecebf1] flex",
          type === "underline" && "border-b-1 border-black",
          block && "flex-grow"
        )}
      >
        <input
          {...rest}
          ref={ref}
          className={twMerge(
            "border-none, bg-transparent, w-full, p-3, text-primary",
            className
          )}
          type={htmpType}
        />
      </div>
    );
  }
);

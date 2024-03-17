import type { ReactNode } from "react";
import { twMerge, twJoin } from "tailwind-merge";

export interface FormItemProps {
  children: ReactNode;
  label?: ReactNode | string;
  vertical?: boolean;
  inputId?: string;
}

type LabelProps = Pick<FormItemProps, "label" | "inputId">;

const Label = ({ label, inputId }: LabelProps) => {
  if (!label) {
    return null;
  }
  if (!inputId) {
    return <span className={"text-xs text-[#525252] mb-2"}>{label}</span>;
  }
  return (
    <label htmlFor={inputId} className={"text-xs text-[#525252] mb-2"}>
      {label}
    </label>
  );
};

const FormItem = ({
  children,
  label,
  vertical = false,
  inputId,
}: FormItemProps) => {
  return (
    <div
      className={twMerge(
        "flex, mb-7, w-full",
        twJoin(vertical ? "flex-col" : "flex-row")
      )}
    >
      <Label label={label} inputId={inputId} />
      {children}
    </div>
  );
};

export default FormItem;

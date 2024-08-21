import {InputHTMLAttributes, ReactNode} from "react";

export type InputColor = "success" | "warning" | "error" | "default";

export interface IInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
    label: string;
    message?: string;
    color?: InputColor;
    icon?: ReactNode;
    isLoading?: boolean;
    onChange?: (value: string) => void;
    onIconClick?: () => void | Promise<void>;
}

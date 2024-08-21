import {ButtonHTMLAttributes} from "react";
import cn from "classnames";
import "./Button.scss";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
    isLoading?: boolean;
}

export function Button(props: IButtonProps) {
    const {
        className,
        label,
        type = "button",
        ...restProps
    } = props;

    return (
        <button
            className={cn("button", className)}
            type={type}
            {...restProps}
        >
            <span className="button__label">{label}</span>
        </button>
    )
}

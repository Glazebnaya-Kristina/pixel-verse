import React, {ChangeEvent} from "react";
import cn from "classnames";
import {IInputProps} from "./input.typings";
import "./Input.scss";

export function Input(props: IInputProps) {
    const {
        className,
        value,
        defaultValue,
        label,
        message,
        name,
        placeholder,
        color = "default",
        icon,
        type = "text",
        readOnly,
        onChange,
        onIconClick,
        ...restProps
    } = props;

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
        if (onChange) {
            onChange(event.target.value);
        }
    };

    return (
        <label
            className={cn(
                "input",
                color && `input--${color}`,
                icon && "input--icon",
                readOnly && "input--readonly",
                className,
            )}
            htmlFor={name}
        >
            <span className="input__label">{label}</span>

            <span className="input__wrapper">
                <span className="input__inner">
                    <input
                        className="input__field"
                        id={name}
                        name={name}
                        value={value}
                        type={type}
                        placeholder={placeholder}
                        readOnly={readOnly}
                        onChange={onChangeHandler}
                        {...restProps}
                    />

                    {icon && (
                        <button
                            className="input__icon"
                            type="button"
                            onClick={onIconClick}
                        >
                            {icon}
                        </button>
                    )}
                </span>

                {message && <span className="input__message">{message}</span>}
          </span>
        </label>
    );
}

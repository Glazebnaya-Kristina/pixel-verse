import React, {InputHTMLAttributes} from "react";
import cn from "classnames";
import {Input} from "../Input/Input";
import {checkIcon, copyIcon} from "../iconsList";
import "./ClipboardInput.scss";
import {useClipboard} from "../../hooks/useClipboard";

interface IClipboardInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string,
    value: string,
}

export function ClipboardInput({className, label, value}: IClipboardInputProps) {
    const {isCopied, onCopyClick} = useClipboard({value});

    return (
        <Input
            className={cn(
                "clipboard-input",
                isCopied && "clipboard-input--success",
                className
            )}
            label={label}
            value={value}
            message={isCopied ? "Copied to clipboard" : ""}
            color={isCopied ? "success" : "default"}
            icon={isCopied ? checkIcon : copyIcon}
            readOnly
            onIconClick={onCopyClick}
        />
    );
}

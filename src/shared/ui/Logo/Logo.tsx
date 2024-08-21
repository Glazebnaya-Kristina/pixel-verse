import React, {HTMLAttributes} from "react";
import cn from "classnames";
import logo from "../../assets/images/logo.svg";
import "./Logo.scss";

interface ILogoProps extends HTMLAttributes<HTMLDivElement> {}

export function Logo({className}: ILogoProps) {
    return (
        <div className={cn("logo", className)}>
            <img
                className="logo__image"
                src={logo}
                alt="Pixel Verse"
            />
        </div>
    );
}

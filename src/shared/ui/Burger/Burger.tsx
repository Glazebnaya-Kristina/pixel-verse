import React, {ButtonHTMLAttributes} from "react";
import cn from "classnames";
import {useUiState} from "../../../app/providers/ui/useUiState";
import "./Burger.scss";

interface IBurgerProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Burger({className}: IBurgerProps) {
    const {sidebarIsOpen, toggleSidebar} = useUiState();

    const cl = cn(
        "burger",
        sidebarIsOpen && "burger--is-active",
        className
    );

    return (
        <button
            className={cl}
            type="button"
            aria-label="Menu"
            onClick={toggleSidebar}
        >
            <span className="burger__text">Menu</span>
        </button>
    );
}

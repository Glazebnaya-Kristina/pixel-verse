import React from "react";
import cn from "classnames";
import {useUiState} from "../../app/providers/ui/useUiState";
import {Logo} from "../../shared/ui/Logo/Logo";
import {Social} from "../Social/Social";
import {Navigation} from "../Navigation/Navigation";
import "./Sidebar.scss";
import {Link} from "react-router-dom";

export function Sidebar() {
    const {sidebarIsOpen} = useUiState();

    const cl = cn(
        "sidebar",
        sidebarIsOpen && "sidebar--is-opened",
    );

    return (
        <aside className={cl}>
            <Logo className="sidebar__logo" />
            <Navigation className="sidebar__navigation" />

            <div className="sidebar__footer">
                <Link
                    className="sidebar__game-link"
                    to={"/battle"}
                >
                    Game Dock
                </Link>
                <Social className="sidebar__social" />
            </div>
        </aside>
    );
}

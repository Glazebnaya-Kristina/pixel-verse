import cn from "classnames";
import {HTMLAttributes} from "react";
import "./Navigation.scss";
import {routesConfig} from "../../shared/config/routes";
import {NavigationItem} from "./components/NavigationItem/NavigationItem";

interface INavigationProps extends HTMLAttributes<HTMLElement> {}

export function Navigation({className}: INavigationProps) {
    // const pathname = window.location.pathname.split("/");
    const pathname = window.location.pathname;

    return (
        <nav className={cn("navigation", className)}>
            <ul className="navigation__list">
                {routesConfig.map((route) => (
                    <NavigationItem
                        key={route.title}
                        isActive={route.slug === pathname}
                        title={route.title}
                        to={route.slug}
                        icon={route.icon}
                    />
                ))}
            </ul>
        </nav>
    );
}

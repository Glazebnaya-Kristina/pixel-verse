import {Link, LinkProps} from "react-router-dom";
import {ReactElement} from "react";
import "./NavigationItem.scss";
import cn from "classnames";

interface INavigationItemProps extends LinkProps {
    icon: ReactElement,
    isActive: boolean,
}

export function NavigationItem({title, isActive, to, icon}: INavigationItemProps) {
    return (
        <li
            className={cn(
                "navigation__item",
                isActive && "navigation__item--is-active",
            )}
        >
            <Link
                className="navigation__link"
                to={to}
            >
                <span className="navigation__icon">{icon}</span>
                {title}
            </Link>
        </li>
    );
}

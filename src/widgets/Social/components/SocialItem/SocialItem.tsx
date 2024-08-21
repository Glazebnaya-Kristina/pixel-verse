import React, {HTMLAttributes, ReactElement} from "react";
import cn from "classnames";
import "./SocialItem.scss";

interface SocialItemProps extends HTMLAttributes<HTMLLIElement> {
    href: string,
    icon: ReactElement,
}

export function SocialItem({className, href, icon}: SocialItemProps) {
    return (
        <li className={cn("social__item", className)}>
            <a
                className="social__link"
                href={href}
                target="_blank"
                rel="noreferrer"
            >
                {icon}
            </a>
        </li>
    );
}

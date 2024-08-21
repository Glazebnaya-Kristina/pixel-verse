import React, {HTMLAttributes} from "react";
import cn from "classnames";
import {SocialItem} from "./components/SocialItem/SocialItem";
import {socialListDto} from "../../mocks/socials";
import "./Social.scss";

interface ISocialProps extends HTMLAttributes<HTMLUListElement> {}

export function Social({className}: ISocialProps) {
    if (socialListDto.length === 0) {
        return null;
    }

    return (
        <ul className={cn("social", className)}>
            {socialListDto.map((item) => (
                <SocialItem
                    key={item.id}
                    className="social__item"
                    href={item.href}
                    icon={item.icon}
                />
            ))}
        </ul>
    );
}

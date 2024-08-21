import cn from "classnames";
import {HTMLAttributes, PropsWithChildren} from "react";
import "./Card.scss";

interface ICardProps extends HTMLAttributes<HTMLDivElement> {}

export function Card({children, className, ...restProps}: PropsWithChildren<ICardProps>) {
    return (
        <div
            className={cn("card", className)}
            {...restProps}
        >
            {children}
        </div>
    );
}

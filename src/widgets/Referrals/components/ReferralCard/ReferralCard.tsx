import React, {HTMLAttributes, ReactElement} from "react";
import cn from "classnames";
import {Card} from "../../../../shared/ui/Card/Card";
import "./ReferralCard.scss";

interface IInfoCardProps extends HTMLAttributes<HTMLDivElement> {
    title: string,
    text: string,
    counter: number,
    colorTheme: string,
    img: ReactElement,
}

export function ReferralCard({
    className,
    title,
    text,
    counter,
    colorTheme,
    img
}: IInfoCardProps) {
    const cl = cn(
        "referral-card",
        `referral-card--${colorTheme}`,
        className,
    );

    return (
        <Card className={cl}>
            <strong className="referral-card__title">{title}</strong>

            <p className="referral-card__text">
                <span className="referral-card__counter">{counter || 0}</span>
                {text}
            </p>

            <span className="referral-card__decor-image">{img}</span>
        </Card>
    );
}

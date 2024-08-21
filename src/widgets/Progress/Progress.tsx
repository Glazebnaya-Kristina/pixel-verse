import React, {HTMLAttributes} from "react";
import {starIcon} from "../../shared/ui/iconsList";
import cn from "classnames";
import "./Progress.scss";
import {CURRENT_VALUE, MAX_PROGRESS} from "./progress.typings";

interface IProgressProps extends HTMLAttributes<HTMLDivElement> {
}

export function Progress({className}: IProgressProps) {
    const progressValue = CURRENT_VALUE <= MAX_PROGRESS ? CURRENT_VALUE : MAX_PROGRESS;
    const widthValue = `${(progressValue / MAX_PROGRESS) * 100}%`;

    return (
        <div className={cn("progress", className)}>
            <div className="progress__icon">
                {starIcon}
                <span className="progress__level">24</span>
            </div>

            <div className="progress__container">
                <span className="progress__value">{progressValue}/{MAX_PROGRESS} EXP</span>
                <span className="progress__next">
                    25
                    <span className="progress__next-text">lvl</span>
                </span>

                <div className="progress__bar">
                    <span
                        className="progress__bar-fill"
                        style={{width: widthValue}}
                    />
                </div>
            </div>
        </div>
    );
}

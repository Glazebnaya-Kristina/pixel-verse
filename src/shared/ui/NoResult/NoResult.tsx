import React, {HTMLAttributes} from "react";
import {Card} from "../Card/Card";
import "./NoResult.scss";
import cn from "classnames";

interface INoResult extends HTMLAttributes<HTMLDivElement> {
    text: string,
}

export function NoResult({className, text}: INoResult) {
    return (
        <Card className={cn("no-result", className)}>{text}</Card>
    );
}

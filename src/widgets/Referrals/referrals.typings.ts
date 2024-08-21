import {ReactElement} from "react";

export interface IReferrals {
    title: string,
    counter: number,
    text: string,
    img: ReactElement,
    colorTheme: string,
}

export interface IReferralsInvite {
    code: string,
    link: string,
}

import {coinsIcon, peopleIcon} from "../shared/ui/iconsList";
import {IReferrals, IReferralsInvite} from "../widgets/Referrals/referrals.typings";

export const referralsDto: Array<IReferrals> = [
    {
        title: "You Have",
        counter: 13,
        text: "Referrals",
        img: peopleIcon,
        colorTheme: "primary",
    },
    {
        title: "You Earned",
        counter: 132,
        text: "Points",
        img: coinsIcon,
        colorTheme: "secondary",
    },
];

export const referralsInviteDto: IReferralsInvite = {
    code: "XHAT00SBIT7J",
    link: "https://www.pixelverse.com/link#343434"
}

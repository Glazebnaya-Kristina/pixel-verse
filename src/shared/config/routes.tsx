import {ReferralsPage} from "../../pages/ReferralsPage/ReferralsPage";
import {battleIcon, dogIcon, dollarIcon, personGroupIcon, personIcon, robotIcon} from "../ui/iconsList";

export const routesConfig = [
    {title: 'Home', slug: '/', icon: personIcon, component: <ReferralsPage />},
    {title: 'Profile', slug: '/profile', icon: personIcon, component: <ReferralsPage />},
    {title: 'Referrals', slug: '/referrals', icon: personGroupIcon, component: <ReferralsPage />},
    {title: 'Pets', slug: '/pets', icon: dogIcon, component: <ReferralsPage />},
    {title: 'Battle', slug: '/battle', icon: battleIcon, component: <ReferralsPage />},
    {title: 'Friends', slug: '/friends', icon: robotIcon, component: <ReferralsPage />},
    {title: 'Staking', slug: '/staking', icon: dollarIcon, component: <ReferralsPage />},
]

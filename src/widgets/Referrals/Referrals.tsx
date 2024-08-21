import React from "react";
import {ReferralInvite} from "./components/ReferralInvite/ReferralInvite";
import {ReferralCard} from "./components/ReferralCard/ReferralCard";
import {NoResult} from "../../shared/ui/NoResult/NoResult";
import {referralsDto, referralsInviteDto} from "../../mocks/referrals";
import "./Referrals.scss";

export function Referrals() {
    const isReferralsDtoLength = referralsDto?.length > 0;

    let content;

    if (isReferralsDtoLength) {
        content = (
            <ul className="referrals__cards">
                {referralsDto.map((referrals) => (
                    <li
                        key={referrals.text}
                        className="referrals__card"
                    >
                        <ReferralCard
                            title={referrals.title}
                            counter={referrals.counter}
                            text={referrals.text}
                            img={referrals.img}
                            colorTheme={referrals.colorTheme}
                        />
                    </li>
                ))}
            </ul>
        )
    } else {
        content = <NoResult text="You don't have referrals" />;
    }

    return (
        <div className="referrals">
            <ReferralInvite
                code={referralsInviteDto.code}
                link={referralsInviteDto.link}
            />
            {content}
        </div>
    );
}

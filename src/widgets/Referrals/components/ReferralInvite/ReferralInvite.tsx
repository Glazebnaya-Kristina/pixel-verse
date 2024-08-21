import React, {HTMLAttributes} from "react";
import cn from "classnames";
import {Card} from "../../../../shared/ui/Card/Card";
import {ClipboardInput} from "../../../../shared/ui/ClipboardInput/ClipboardInput";
import {IReferralsInvite} from "../../referrals.typings";
import "./ReferralInvite.scss";

interface IReferralInviteProps extends IReferralsInvite, HTMLAttributes<HTMLDivElement> {}

export function ReferralInvite({className, code, link}: IReferralInviteProps) {
    return (
        <Card className={cn("referral-invite", className)}>
            <h2 className="referral-invite__title">Invite Friends And Earn More Points</h2>

            <div className="referral-invite__wrapper-field">
                <ClipboardInput
                    label="Your Code"
                    value={code}
                />

                <ClipboardInput
                    label="Referral Link"
                    value={link}
                />
            </div>

            <p className="referral-invite__text">
                Describe the conditions of the referral system.
                The referral receives a percentage of his friend’s point earnings.
                Describe the conditions of the referral system. The referral receives a percentage of his friend’s point earningsreferral system. The referral receives a percentage of his friend’s point earningsreferral system. The referral receives a percentage of his friend’s point earnings
            </p>
        </Card>
    );
}

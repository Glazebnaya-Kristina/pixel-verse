import {HTMLAttributes, ReactElement} from "react";
import {arrowIcon} from "../../../../shared/ui/iconsList";
import "./ConnectWalletCard.scss";

interface IConnectWalletCardProps extends HTMLAttributes<HTMLLIElement> {
    name: string,
    icon: ReactElement,
}

export function ConnectWalletCard({name, icon}: IConnectWalletCardProps) {
    return (
        <li className="connect-wallet__card">
            <button className="connect-wallet__button-wrapper">
                {icon}

                <div className="connect-wallet__bottom">
                    <strong className="connect-wallet__name">{name}</strong>

                    <span className="connect-wallet__text">Connect {arrowIcon}</span>
                </div>
            </button>
        </li>
    );
}

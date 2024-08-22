import {ConnectWalletCard} from "./components/ConnectWalletCard/ConnectWalletCard";
import {metamaskIcon, walletConnectIcon} from "../../shared/ui/iconsList";
import "./ConnectWallet.scss";

export function ConnectWallet() {
    return (
        <div className="connect-wallet">
            <strong className="connect-wallet__title">You can use 1 wallet at the same time</strong>

            <ul className="connect-wallet__cards">
                <ConnectWalletCard
                    name="Metamask"
                    icon={metamaskIcon}
                />
                <ConnectWalletCard
                    name="Wallet Connect"
                    icon={walletConnectIcon}
                />
            </ul>
        </div>
    );
}

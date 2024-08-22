import {useState} from "react";
import {Burger} from "../../shared/ui/Burger/Burger";
import {Button} from "../../shared/ui/Button/Button";
import {Dialog} from "../../shared/ui/Dialog/Dialog";
import {Progress} from "../Progress/Progress";
import {ConnectWallet} from "../ConnectWallet/ConnectWallet";
import "./Header.scss";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="header">
            <Burger className="header__burger" />
            <Progress className="header__progress" />

            <Dialog
                triggerElement={
                    <Button
                        className="header__button"
                        label="Connect Wallet"
                    />
                }
                title="Connect Wallet"
                isOpen={isOpen}
                onOpenChange={setIsOpen}
            >
                <ConnectWallet/>
            </Dialog>
        </header>
    );
}

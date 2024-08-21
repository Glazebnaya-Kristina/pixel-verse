import {Burger} from "../../shared/ui/Burger/Burger";
import {Progress} from "../Progress/Progress";
import {Button} from "../../shared/ui/Button/Button";
import "./Header.scss";

export function Header() {
    return (
        <header className="header">
            <Burger className="header__burger" />
            <Progress className="header__progress" />
            <Button
                className="header__button"
                label="Connect Wallet"
            />
        </header>
    );
}

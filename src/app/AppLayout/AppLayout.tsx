import {Header} from "../../widgets/Header/Header";
import {Sidebar} from "../../widgets/Sidebar/Sidebar";
import {HTMLAttributes, PropsWithChildren} from "react";
import "./AppLayout.scss";

interface IAppLayoutProps extends HTMLAttributes<HTMLDivElement>{}

export function AppLayout({children}: PropsWithChildren<IAppLayoutProps>) {
    return (
        <div className="app-layout">
            <Sidebar />

            <div className="app-layout__container">
                <Header />

                <main className="app-layout__content">
                    {children}
                </main>
            </div>
        </div>
    );
}

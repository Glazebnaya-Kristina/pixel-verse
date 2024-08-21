import {Route, Routes} from "react-router-dom";
import {routesConfig} from "../../../shared/config/routes";

export function AppRouter() {
    return (
        <Routes>
            {routesConfig.map((route) => (
                <Route
                    key={route.title}
                    path={route.slug}
                    element={route.component}
                />
            ))}
        </Routes>
    );
};

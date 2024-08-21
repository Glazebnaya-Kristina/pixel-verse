import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./providers/routers/AppRouter";
import { UiStateProvider } from "./providers/ui/useUiState";

export const App = () => {
  return (
      <UiStateProvider>
        <BrowserRouter>
          <AppRouter/>
        </BrowserRouter>
      </UiStateProvider>
  );
}

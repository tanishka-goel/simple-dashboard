import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "./store";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/ErrorFallback.jsx";
import { ThemeProvider } from "./context/ThemeProvider.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <ErrorBoundary
   fallbackRender={({ error, resetErrorBoundary }) => (
        <ErrorFallback error={error} resetErrorBoundary={resetErrorBoundary} />
      )}
  >
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <StrictMode>
        <ThemeProvider>
        <App />
        </ThemeProvider>
      </StrictMode>
    </Provider>
  </QueryClientProvider>
  </ErrorBoundary>
  ,
);

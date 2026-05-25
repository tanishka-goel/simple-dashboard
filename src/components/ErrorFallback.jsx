import { Frown } from "lucide-react";
import "../css/errorFallback.css";

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div className="error-container">
      <div className="error-content">
        <div className="error-icon">
          <Frown size={64} className="error-frown" />
        </div>

        <h1 className="error-title">
          Uh oh! This page is not available!
        </h1>

        <h2 className="error-message">
          {error.message}
        </h2>

        <button
          className="error-button"
          onClick={resetErrorBoundary}
        >
          Try again
        </button>
      </div>
    </div>
  );
};

export default ErrorFallback;
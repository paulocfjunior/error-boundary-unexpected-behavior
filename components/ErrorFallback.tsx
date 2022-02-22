import { FallbackProps } from "react-error-boundary";

const ErrorFallback: React.FC<FallbackProps> = ({
  error,
  resetErrorBoundary
}) => {
  return (
    <div>
      <div>
        <span>Failed to render:</span>
      </div>
      <div>
        <strong>{error.message}</strong>
      </div>
      <button type="button" onClick={resetErrorBoundary}>
        Retry
      </button>
    </div>
  );
};

export default ErrorFallback;

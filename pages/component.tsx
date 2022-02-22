import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../components/ErrorFallback";
import Link from "next/link";

// Buggy method
const buggyOperation = () => {
  if (Math.random() > 0.5) throw new Error("Failed to do stuff");
};

// Component with buggy behavior
const ComponentThatMayFail = () => {
  console.log("ComponentThatMayFail");
  if (typeof window !== "undefined") buggyOperation();

  return (
    <>
      <h2>Component that may fail</h2>
      <span>it works!</span>
    </>
  );
};

// With the Error boundary and back link to index
const ComponentThatMayFailWithBoundary = () => (
  <>
    <Link href="/" passHref>
      <a>Back</a>
    </Link>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <ComponentThatMayFail />
    </ErrorBoundary>
  </>
);

export default ComponentThatMayFailWithBoundary;

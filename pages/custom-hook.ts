import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../components/ErrorFallback";
import { useCustomFetcher } from "../hooks/customHook";
import Link from "next/link";

// Component with buggy behavior
const CustomRequestThatMayFail = () => {
  console.log("RequestThatMayFail");
  const { data, isLoading, mutate } = useCustomFetcher(`/api/data`);
  console.log("called fetcher", { data });

  return (
    <div>
      <h2>Custom Request that may fail</h2>
      <div>
        {isLoading ? (
          <span>Loading...</span>
        ) : (
          <pre>{JSON.stringify({ data }, null, 2)}</pre>
        )}
      </div>
      <button onClick={() => mutate()}>Refresh</button>
    </div>
  );
};

// With the Error boundary and back link to index
const CustomRequestThatMayFailWithBoundary = () => (
  <>
    <Link href="/" passHref>
      <a>Back</a>
    </Link>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <CustomRequestThatMayFail />
    </ErrorBoundary>
  </>
);

export default CustomRequestThatMayFailWithBoundary;

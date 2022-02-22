import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../components/ErrorFallback";
import useSWR from "swr";
import Link from "next/link";

// Component with buggy behavior
const RequestThatMayFail = () => {
  console.log("RequestThatMayFail");
  const { data, error, mutate } = useSWR(`/api/data`);
  console.log("called fetcher", { data, error });

  return (
    <div>
      <h2>Request that may fail</h2>
      <div>
        {!data && !error ? (
          <span>Loading...</span>
        ) : (
          <>
            <pre>{JSON.stringify({ data, error }, null, 2)}</pre>
            Error:
            <pre>{error.toString()}</pre>
          </>
        )}
      </div>
      <button onClick={() => mutate()}>Refresh</button>
    </div>
  );
};

// With the Error boundary and back link to index
const RequestThatMayFailWithBoundary = () => (
  <>
    <Link href="/" passHref>
      <a>Back</a>
    </Link>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <RequestThatMayFail />
    </ErrorBoundary>
  </>
);

export default RequestThatMayFailWithBoundary;

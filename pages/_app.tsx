import { useMemo } from "react";
import { SWRConfig } from "swr";
import { fetcher } from "../util/fetcher";

function App({ Component, pageProps }) {
  const config = useMemo(
    () => ({
      fetcher
    }),
    []
  );
  return (
    <SWRConfig value={config}>
      <Component {...pageProps} />
    </SWRConfig>
  );
}

export default App;

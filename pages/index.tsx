import React from "react";
import Link from "next/link";

export default () => {
  return (
    <ul>
      <li>
        <Link href="/component" passHref>
          <a>Component that may fail</a>
        </Link>
      </li>
      <li>
        <Link href="/request" passHref>
          <a>Request that may fail</a>
        </Link>
      </li>
      <li>
        <Link href="/custom-hook" passHref>
          <a>Custom Request that may fail</a>
        </Link>
      </li>
    </ul>
  );
};

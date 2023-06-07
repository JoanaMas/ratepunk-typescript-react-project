import React from "react";
import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Caveat+Brush&family=PT+Sans+Caption:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
  );
};

export default Document;
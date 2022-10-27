import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { render } from '@master/css/render';
import { StyleSheet } from '@master/css';
import { useRef, useState } from 'react';
import { useScroll } from '@react-hooks-library/core';

export default function MyDocument() {
  return (
    <Html>
      <Head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=outfit@400,900,800,300,500,600,200,100,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const { css } = render((await ctx.renderPage()).html, { StyleSheet });
  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: (
      <>
        <style id="master-css">{css}</style>
        {initialProps.styles}
      </>
    ),
  };
};

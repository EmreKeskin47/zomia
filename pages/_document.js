// pages/_document.js

import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <title>Zomia Center</title>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Cantata+One&family=Fira+Sans&family=Heebo&family=Joan&family=Josefin+Sans&family=Kanit&family=Merriweather&family=Montserrat&family=Noto+Sans&family=Oswald:wght@500&family=PT+Serif&family=Poppins&family=Raleway&family=Roboto&family=Rubik&family=Tiro+Gurmukhi&family=Tiro+Telugu&family=Ubuntu&display=swap"
            rel="stylesheet"
          />
          <meta
            name="google-site-verification"
            content="cuDQRQhxPo64IWgmg4D3_T8DMlFcXr7CX6bpoIjFrYo"
          />
          +
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <title>Gabriel Melo | Portfólio</title>
            <meta
              name='description'
              content='Este site é um portfólio para apresentar o trabalho do programador full stack Gabriel Melo'
              key='gabriel melo, desenvolvedor full stack, programador'
            />
            <meta
              property='og:title'
              content='Site de Gabriel Melo'
            />
            <meta
              property='og:description'
              content='Este site é um portfólio sobre Gabriel Melo'
            />
            <meta
              property='og:image'
              content='https://github.com/gabrielmelogm.png'
            />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
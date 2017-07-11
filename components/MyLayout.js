import Header from './Header'
import Head from 'next/head'

const layoutStyle = {
  margin: 0,
  padding: 0,
  fontFamily: 'Roboto'
}

const Layout = (props) => (
  <div style={layoutStyle}>
    <Head>
      <title>Next</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.4.3/css/bulma.css" />
      <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500|Ubuntu:300,400,500" rel="stylesheet" />
    </Head>
    <Header />
    {props.children}
  </div>
)

export default Layout

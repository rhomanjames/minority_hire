import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>MinoHire</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/*Header*/}
      <h1>testing</h1>
      <Header />
      {/*Body*/}
      <body>
        <h2>body</h2>
      </body>
    </div>
  )
}

import Head from 'next/head'
import Header from '../components/Header'
import Body from '../components/Body'
import SuggestedSearch from '../components/SuggestedSearch'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>MinoHire</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/*Header*/}
      <Header />
      {/*Body*/}
      <Body />
      <div>
      <SuggestedSearch />
    </div>
    </div>
  )
}

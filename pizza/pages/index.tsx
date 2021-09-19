import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>App that helps you eat pizza</title>
        <meta name="description" content="App that helps you eat pizza" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-center h-screen flex flex-col justify-center items-center bg-red-800">
        <h1 className="text-6xl font-bold text-yellow-200">
          App that helps you eat pizza
        </h1>
        <button className="rounded-lg py-4 px-8 my-8 bg-yellow-200 text-2xl">Generate pizza</button>
      </main>
    </>
  )
}

export default Home

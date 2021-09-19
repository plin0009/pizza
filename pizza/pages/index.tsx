import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const router = useRouter();

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
        <button
          className="rounded-lg py-4 px-8 my-8 bg-yellow-200 text-2xl"
          onClick={async () => {
            const response = await fetch('/api/new-room');
            const { code } = await response.json();
            router.push(`/${code}`);
          }}
        >
          Generate pizza
        </button>
      </main>
    </>
  )
}

export default Home

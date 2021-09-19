import { GetServerSideProps } from "next";
import { useState } from "react";
import useSWR from 'swr';
import { useRouter } from "next/router";
import head from "next/head";

const PizzaPage = () => {
  const router = useRouter();
  const { id } = router.query
  const [name, setName] = useState("");
  const [showPizza, setShowPizza] = useState(false);
  const [ate, setAte] = useState(false);
  const [slices, setSlices] = useState([]);

  const numSlices = 8 - slices.length;

  return showPizza ? (
    <>
    <Head>
        <title>App that helps you eat pizza</title>
        <meta name="description" content="App that helps you eat pizza" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="text-center h-screen flex flex-col justify-center items-stretch bg-red-800">
        <div className="flex flex-col lg:flex-row items-stretch m-24">
          <div className="lg:w-4/5 max-w-3xl cursor-pointer" onClick={async () => {
            const response = await fetch(`/api/eat/${id}/${name}`);
            const data = await response.json();
            if (data.ok) {
              setAte(true);
            } else {
              alert(data.message);
            }
          }}>
            <img
              src={ate ? `img/${numSlices - 1}pizza.png` : `img/${numSlices}pizza.png`}
              style={ate ? { cursor: "no-drop" } : { cursor: "pointer" }}
              onClick={() => {
                if (!ate) {
                  setAte(true);
                }
              }}
              alt="Pizza"
            />
          </div>
          <div className="lg:w-1/5 flex-1">
            {ate ? (
              <h1 className="text-3xl lg:text-6xl font-bold text-yellow-200 mb-8">
                Thank you for eating!
              </h1>
            ) : (
              <h1 className="text-3xl lg:text-6xl font-bold text-yellow-200 mb-8">
                Pizza-eating log
              </h1>
            )}
            {!ate ? (
              slices.map(({name}) => (
                <p className="text-2xl text-yellow-200 my-4">{name} ate the pizza</p>
              ))
            ) : numSlices - 1 > 0 ? (<>
              <p className="text-2xl text-yellow-200 my-4">Now it's your time to share: please send the link below to another friend :)</p>
              <p className="text-2xl text-yellow-200 my-4">localhost:3000/{id}</p>
            </>) : null}
          </div>
        </div>
      </main>
    </>
  ) : (
    <>
      <main className="text-center h-screen flex flex-col justify-center items-center bg-red-800">
        <h1 className="text-6xl font-bold text-yellow-200">
          What's your name?
        </h1>
        <div className="my-8 flex gap-4">
          <input
            type="text"
            className="p-4 text-center rounded-lg text-2xl"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button
            className="rounded-lg py-4 px-8 bg-yellow-200 text-2xl"
            onClick={async () => {
              const response = await fetch(`/api/join/${id}/${name}`);
              const data = await response.json();
              if (!data.ok) {
                alert(data.message);
              } else {
                setSlices(data.slices);
                setShowPizza(true);
              }
            }}
          >
            Ready to eat!
          </button>
        </div>
      </main>
    </>
  );
};

export default PizzaPage;

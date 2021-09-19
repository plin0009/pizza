import { useState } from "react";

const PizzaPage = () => {
  const [name, setName] = useState('');
  const [showPizza, setShowPizza] = useState(false);

  return showPizza ? (
    <>
      <main className="text-center h-screen flex flex-col justify-center items-stretch bg-red-800">
        <div className="flex flex-col lg:flex-row items-stretch m-24">
          <div className="lg:w-4/5 max-w-3xl">
            <div className="bg-green-200 w-full" style={{paddingTop: '100%'}}>
            </div>

          </div>
          <div className="lg:w-1/5 flex-1">
            <h1 className="text-3xl lg:text-6xl font-bold text-yellow-200 mb-8">
              Pizza-eating log
            </h1>
            {["(4:48AM) Frank ate the pizza", "(4:49AM) Anna ate the pizza"].map((message) => (
              <p className="text-2xl text-yellow-200 my-4">
                {message}
              </p>
            ))}
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
            onClick={() => setShowPizza(true)}
          >
            Ready to eat!
          </button>
        </div>
      </main>
    </>
  )
}

export default PizzaPage;
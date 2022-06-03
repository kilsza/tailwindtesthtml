import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import Shop from "./Shop";
import "./index.css";
import Item from "./Item.js";

function App() {
  const [login, setLogin] = useState(false);
  const [films, setFilms] = useState();

  useEffect(() => {
    (async () => {
      const response = await fetch("https://covid-shop-mcs.herokuapp.com");
      const data = await response.json();
      setFilms(data);
    })();
  }, []);

  if (login) {
    return (
      <>
        <div className="container mx-auto px-4 flex flex-col">
          <Shop films={films} />
          <button
            className="bg-red-300 w-40 mx-auto rounded-lg p-4 m-4 font-sans"
            onClick={() => setLogin(false)}
          >
            Выйти
          </button>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="container mx-auto px-4 flex flex-col">
          <h2 className="mx-auto my-5">Нужно залогиниться!</h2>
          <button
            className="bg-red-300 w-40 mx-auto rounded-lg p-4 font-sans"
            onClick={() => setLogin(true)}
          >
            Войти
          </button>
        </div>
      </>
    );
  }
}

render(<App />, document.querySelector("#root"));

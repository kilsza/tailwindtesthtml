import React, { useState, useEffect } from "react";
import Item from "./Item";

export default function Shop(props) {
  return (
    <>
      <div className="container mx-auto px-4 flex flex-col">
        {props.films.map((film) => {
          return (
            <Item
              key={film.id}
              name={film.name}
              desc={film.desc}
              img={film.image}
              className="container mx-auto px-4"
            />
          );
        })}
      </div>
    </>
  );
}

import React, { useState } from "react";

export default function Item(props) {
  const [total, setTotal] = useState(0);

  const { info } = props;

  function handleAddClick() {
    setTotal(total + 1);
  }

  function handleRemoveClick() {
    if (total > 0) {
      setTotal(total - 1);
    }
  }

  return (
    <div className="font-serif p-2 flex flex-col justify-center">
      <img
        src={props.img}
        className="p-1 bg-white border rounded max-w-sm place-self-center"
        alt=""
      />
      <div className="flex flex-col justify-center text-center">
        <h2 className="text-xl ">{props.name}</h2>
        <p>{props.desc}</p>
      </div>
      <div className="flex flex-row justify-center">
        <button
          className="px-2 bg-slate-200 rounded-lg focus:cursor-auto"
          disabled={total === 0}
          onClick={handleRemoveClick}
        >
          -
        </button>
        <h3 className="px-4">{total ? total : "0"}</h3>
        <button
          className="px-2 bg-slate-200  rounded-lg "
          onClick={handleAddClick}
        >
          +
        </button>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import data from "./data.ts";

export default function Accordion() {
  const [selected, setSelected] = useState();
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(currentId) {
    setSelected(currentId === selected ? null : currentId);
  }

  function handleMultiSelection(currentId) {
    let cpyMultiple = [...multiple];
    const findIndexOfCurrentId = cpyMultiple.indexOf(currentId);

    console.log(findIndexOfCurrentId, multiple);
    if (findIndexOfCurrentId === -1) cpyMultiple.push(currentId);
    else cpyMultiple.splice(findIndexOfCurrentId, 1);

    setMultiple(cpyMultiple);
  }

  return (
    <>
      <div className="flex justify-center flex-col items-center text-xl">
        <button
          onClick={() => setEnableMultiSelection(!enableMultiSelection)}
          className={`text-white p-3 mt-2.5 ${
            enableMultiSelection ? "bg-pink-500 ring-red-300" : "bg-pink-900"
          }`}
        >
          Enable Multi Selection
        </button>
        <div className="accordion w-1/3 mt-8 text-white">
          {data && data.length > 0 ? (
            data.map((dataItem) => (
              <div className="bg-pink-900 mb-2.5 p-3" key={dataItem.id}>
                <div
                  onClick={
                    enableMultiSelection
                      ? () => handleMultiSelection(dataItem.id)
                      : () => handleSingleSelection(dataItem.id)
                  }
                  className="title text-center cursor-pointer flex justify-between"
                >
                  <h3>{dataItem.question}</h3>
                  <span className="flex justify-center">+</span>
                </div>
                <div className="mt-2">
                  {selected === dataItem.id ||
                  multiple.indexOf(dataItem.id) !== -1 ? (
                    <div>{dataItem.answer}</div>
                  ) : null}
                </div>
              </div>
            ))
          ) : (
            <div>No data found !</div>
          )}
        </div>
      </div>
    </>
  );
}

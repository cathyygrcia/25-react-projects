import React, { useState } from "react";
import data from "./data.ts";

export default function Accordion() {
  const [selected, setSelected] = useState();

  function handleSingleSelection(currentId) {
    setSelected(currentId === selected ? null : currentId);
  }

  return (
    <>
      <div className="flex justify-center text-xl">
        <div className="accordion w-1/3 mt-8 text-purple-200">
          {data && data.length > 0 ? (
            data.map((dataItem) => (
              <div className="bg-pink-900 mb-2.5 p-3" key={dataItem.id}>
                <div
                  onClick={() => handleSingleSelection(dataItem.id)}
                  className="title text-center cursor-pointer flex justify-between"
                >
                  <h3>{dataItem.question}</h3>
                  <span className="flex justify-center">+</span>
                </div>
                <div className="mt-2">
                  {selected === dataItem.id ? (
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

import React, { useState } from "react";
import data from "./data.ts";

export default function Accordion() {
  const [selected, setSelected] = useState();

  function handleSingleSelection(currentId) {
    console.log(currentId);
  }

  return (
    <>
      <div className="flex justify-center text-xl">
        <div className="accordion">
          {data && data.length > 0 ? (
            data.map((dataItem) => (
              <div className="item mb-2.5">
                <div
                  onClick={() => handleSingleSelection(dataItem.id)}
                  className="title text-center"
                >
                  <h3>{dataItem.question}</h3>
                  <span className="flex justify-center">+</span>
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

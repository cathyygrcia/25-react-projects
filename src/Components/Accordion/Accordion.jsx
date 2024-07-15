import React, { useState } from "react";
import data from "./data.ts";

export default function Accordion() {
  const [selected, setSelected] = useState();

  return (
    <>
      <div className="wrapper">
        <div className="accordion">
          {data && data.length > 0 ? (
            data.map((dataItem) => (
              <div className="item">
                <div className="title">
                  <h3>{dataItem.question}</h3>
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

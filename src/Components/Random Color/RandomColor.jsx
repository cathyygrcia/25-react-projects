import React, { useState } from "react";

export default function RandomColors() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  return (
    <div
      className="w-screen h-screen text-center "
      style={{ background: color }}
    >
      <button
        onClick={() => setTypeOfColor("hex")}
        className="text-white m-2.5 bg-gray-500 p-2.5"
      >
        Create HEX Color
      </button>
      <button
        onClick={() => setTypeOfColor("rgb")}
        className="text-white m-2.5 bg-gray-500 p-2.5"
      >
        Create RGB Color
      </button>
      <button className="text-white m-2.5 bg-gray-500 p-2.5">
        Generate Random Color
      </button>
    </div>
  );
}

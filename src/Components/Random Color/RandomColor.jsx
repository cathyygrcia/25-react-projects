import { useState } from "react";

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function handleCreateRandomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[Math.floor(Math.random() * 16)];
    }
    setColor(hexColor);
    console.log(hexColor);
  }

  function handleCreateRandomRgbColor() {}

  return (
    <div
      className="w-screen h-screen text-center "
      style={{ background: color }}
    >
      <button
        className="bg-gray-500 m-3.5 p-3"
        onClick={() => setTypeOfColor("hex")}
      >
        Create HEX Color
      </button>
      <button
        className="bg-gray-500 m-3.5 p-3"
        onClick={() => setTypeOfColor("rgb")}
      >
        Create RGB Color
      </button>
      <button
        className="bg-gray-500 m-3.5 p-3"
        onClick={
          typeOfColor === "hex"
            ? handleCreateRandomHexColor
            : handleCreateRandomRgbColor
        }
      >
        Generate Random Color
      </button>
    </div>
  );
}

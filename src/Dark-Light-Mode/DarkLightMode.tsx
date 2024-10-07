import { useState } from "react";

export default function DarkLightMode() {
  const [buttonColor, setButtonColor] = useState("white");

  return (
    <>
      <div className="w-screen h-screen">
        <div className="container">
          <p>Hello World</p>
          <button
            className={`border-solid bg-${buttonColor} text-white p-1.5`}
            onClick={() =>
              setButtonColor(buttonColor === "white" ? "black" : "white")
            }
          >
            Change Theme
          </button>
        </div>
      </div>
    </>
  );
}

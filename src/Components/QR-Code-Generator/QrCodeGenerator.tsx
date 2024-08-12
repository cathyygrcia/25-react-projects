import { useState } from "react";
import QRCode from "react-qr-code";

export default function QrCodeGenerator() {
  const [qrcode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function handleGenerate() {
    setQrCode(input);
    setInput("");
  }
  return (
    <>
      <div className="flex flex-col items-center">
        <h1>QR Code Generator</h1>
        <div>
          <input
            type="text"
            name="qr-code"
            placeholder="Enter Your Value Here"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <button
            onClick={handleGenerate}
            disabled={input && input.trim() !== "" ? false : true}
          >
            Generate
          </button>
        </div>
        <div>
          <QRCode id="qr-code-value" value={qrcode} size={400} bgColor="#fff" />
        </div>
      </div>
    </>
  );
}

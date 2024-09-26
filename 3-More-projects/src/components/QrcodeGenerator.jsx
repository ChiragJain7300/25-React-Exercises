import { useState } from "react";
import QRCode from "react-qr-code";
function QrcodeGenerator() {
  const [qrValue, setQrValue] = useState("");
  const [showQr, setShowQr] = useState(false);
  const handleSubmit = () => {
    if (qrValue.length && qrValue.trim().length > 0) setShowQr(true);
    setQrValue("");
  };
  return (
    <>
      <h1>QR Code Generator</h1>
      <div>
        <div className="inputCont">
          <input
            style={{
              width: "250px",
              padding: "15px",
              borderRadius: "8px",
              border: "none",
              fontSize: "15px",
              marginBottom: "15px",
            }}
            type="text"
            placeholder="Enter the Keyword..."
            value={qrValue}
            onChange={(e) => setQrValue(e.target.value)}
          />
        </div>
        <button
          onClick={handleSubmit}
          type="submit"
          style={{ marginBottom: "15px" }}
        >
          Generate
        </button>
      </div>
      {showQr ? (
        <div className="qrCode">
          <QRCode value={qrValue} />
        </div>
      ) : null}
    </>
  );
}

export default QrcodeGenerator;

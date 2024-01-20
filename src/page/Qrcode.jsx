import { useEffect, useRef, useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import GoBack from "../components/GoBack";
import HeaderEdit from "../components/HeaderEdit";
import { useDispatch, useSelector } from "react-redux";
import { useReadLocalStorage } from "usehooks-ts";
const Qrcode = () => {
  const qrRef = useRef();

  const dispatch = useDispatch();

  const host = window.location.host;
  const anh = useReadLocalStorage("client");
  const [url, setUrl] = useState(`https://hcsmartcard.hcdigiz.com/${anh}`);
  console.log(url);
  const downloadQRCode = (e) => {
    e.preventDefault();
    let canvas = qrRef.current.querySelector("canvas");
    let image = canvas.toDataURL("image/png");
    let anchor = document.createElement("a");
    anchor.href = image;
    anchor.download = `qr-code.png`;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  const qrcode = (
    <QRCodeCanvas value={url} size={300} bgColor={"#00ff00"} level={"H"} />
  );
  return (
    <div className="qrcode__container">
      <div class="background"></div>
      <div class="background__img demo"></div>
      <GoBack title="Qrcode" />
      <HeaderEdit title="Qrcode" />
      <div ref={qrRef}> {qrcode} </div>
      <div className="input__group">
        <form onSubmit={downloadQRCode}>
          <button type="submit" disabled={!url}>
            Download QR code
          </button>
        </form>
      </div>
    </div>
  );
};
export default Qrcode;

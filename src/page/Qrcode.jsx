import { useEffect, useRef, useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import GoBack from "../components/GoBack";
import HeaderEdit from "../components/HeaderEdit";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getContactsByUser } from "../redux/slice/contactSlice";
const Qrcode = () => {
  const qrRef = useRef();
  const { userContacts, loading } = useSelector((state) => ({
    ...state.contact,
  }));
  const dispatch = useDispatch();
  const [username, setUserName] = useState(userContacts.user_login);
  console.log(username);
  const host = window.location.host;
  const [url, setUrl] = useState(
    `https://hcsmartcard.hcdigiz.com/contact/${username}`
  );
  useEffect(() => {
    dispatch(getContactsByUser());
  }, [dispatch]);
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

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import GoBack from "../components/GoBack";
import {
  deleteInfo,
  getInfosByUser,
  updateInfo,
} from "../redux/slice/infoSlice";
import HeaderEdit from "../components/HeaderEdit";
import { Alert, Button } from "@mui/material";
import EditInput from "../components/EditInput";
import { useLocalStorage, useReadLocalStorage } from "usehooks-ts";
import API from "../API";
import { toast } from "react-toastify";
const UpdateInfo = () => {
  const [backtitle, setBackTitle] = useState();
  let { id } = useParams();
  const { state } = useLocation();
  const { name } = state;
  const [text_name, setText] = useState();
  const [labelitle, setLabelitle] = useState();
  const [submit, setSubmit] = useState(false);
  const [value, setValue] = useLocalStorage(id);
  const [input, setInput] = useState(value);
  const [sdt, setSdt] = useState();
  useEffect(() => {
    if (id === "response_data_hovaten") {
      setBackTitle("họ và tên");
      setLabelitle("Họ và tên");
    } else if (id === "response_data_tencongty") {
      setBackTitle("tên công ty");
      setLabelitle("Tên công ty");
    } else if (id === "response_data_vitri") {
      setBackTitle("vị trí");
      setLabelitle("Vị trí");
    } else if (id === "response_data_diachi") {
      setBackTitle("địa chỉ");
      setLabelitle("Địa chỉ");
    } else if (id === "response_data_dichvu") {
      setBackTitle("dịch vụ");
      setLabelitle("Dịch vụ");
    } else if (id === "response_data_email") {
      setBackTitle("email");
      setLabelitle("Email");
    } else if (id === "response_data_duongdanmangxahoi") {
      setBackTitle("đường dẫn mạng xã hội");
      setLabelitle("Đường dẫn mạng xã hội");
    } else if (id === "response_data_mangxahoi") {
      setBackTitle("mạng xã hội");
      setLabelitle("Mạng xã hội");
    } else if (id === "response_data_sodienthoai") {
      setBackTitle("số điện thoại");
      setLabelitle("Số điện thoại");
    } else if (id === "response_data_loainganhang") {
      setBackTitle("loại ngân hàng");
      setLabelitle("Loại ngân hàng");
    } else if (id === "response_data_taikhoannganhang") {
      setBackTitle("tài khoản ngân hàng");
      setLabelitle("Tài khoản ngân hàng");
    } else if (id === "response_data_website") {
      setBackTitle("website");
      setLabelitle("Website");
    }
    if (name === "edit") {
      setText("Sửa");
    } else {
      setText("Thêm");
    }
  }, [input]);
  const navigate = useNavigate();
  const [infoData, setInfoData] = useState();

  const client = useReadLocalStorage("client");
  const handleDelete = async () => {
    setValue(null);
    let data = {};
    if (id === "response_data_hovaten") {
      data = { hovaten: null };
    } else if (id === "response_data_tencongty") {
      data = { tencongty: null };
    } else if (id === "response_data_vitri") {
      data = { vitri: null };
    } else if (id === "response_data_diachi") {
      data = { diachi: null };
    } else if (id === "response_data_dichvu") {
      data = { dichvu: null };
    } else if (id === "response_data_email") {
      data = { email: null };
    } else if (id === "response_data_duongdanmangxahoi") {
      data = { duongdanmangxahoi: null };
    } else if (id === "response_data_mangxahoi") {
      data = { mangxahoi: null };
    } else if (id === "response_data_sodienthoai") {
      data = { sodienthoai: null };
    } else if (id === "response_data_loainganhang") {
      data = { loainganhang: null };
    } else if (id === "response_data_taikhoannganhang") {
      data = { taikhoannganhang: null };
    } else if (id === "response_data_website") {
      data = { website: null };
    }
    await API.patch(`edit/contact/${client}`, data);
    toast.success("Xóa thông liên hệ thành công");
    navigate("/");
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    let data = {};
    if (id === "response_data_hovaten") {
      data = { hovaten: input };
    } else if (id === "response_data_tencongty") {
      data = { tencongty: input };
    } else if (id === "response_data_vitri") {
      data = { vitri: input };
    } else if (id === "response_data_diachi") {
      data = { diachi: input };
    } else if (id === "response_data_dichvu") {
      data = { dichvu: input };
    } else if (id === "response_data_email") {
      data = { email: input };
    } else if (id === "response_data_duongdanmangxahoi") {
      data = { duongdanmangxahoi: input };
    } else if (id === "response_data_mangxahoi") {
      data = { mangxahoi: input };
    } else if (id === "response_data_sodienthoai") {
      data = { sodienthoai: parseInt(input) };
    } else if (id === "response_data_loainganhang") {
      data = { loainganhang: input };
    } else if (id === "response_data_taikhoannganhang") {
      data = { taikhoannganhang: input };
    } else if (id === "response_data_website") {
      data = { website: input };
    }
    setValue(input);
    await API.patch(`edit/contact/${client}`, data);
    navigate("/");
    if (name === "edit") {
      toast.success("Cập nhập thông liên hệ thành công");
    } else {
      toast.success("Thêm thông liên hệ thành công");
    }
  };

  const handleInput = (e) => {
    if (e.target.value === "") {
      setSubmit(true);
    } else {
      setSubmit(false);
    }
    setInput(e.target.value);
    if (id === "response_data_sodienthoai") {
      if (parseInt(e.target.value) > 10000000000) {
        setSdt(true);
      } else {
        setSdt(false);
      }
    }
  };
  console.log(submit);
  return (
    <div>
      <form>
        <GoBack title={`${text_name} ${backtitle}`} />
        <HeaderEdit title={`${text_name} ${backtitle}`} />
        <EditInput
          handleChange={handleInput}
          values={input}
          name={backtitle}
          label={labelitle}
        />
        {submit && <Alert severity="error">Vui lòng điền thông tin.</Alert>}
        {sdt && <Alert severity="error">Vui lòng sdt chính xác.</Alert>}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 2, mb: 2 }}
          onClick={(e) => handleEdit(e)}
          disabled={submit || sdt}
        >
          Lưu thông tin
        </Button>
        {name === "edit" &&
          id !== "response_data_hovaten" &&
          id !== "response_data_email" &&
          id !== "response_data_vitri" &&
          id !== "response_data_diachi" &&
          id !== "response_data_sodienthoai" && (
            <Button
              type="button"
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 2 }}
              onClick={() => handleDelete()}
            >
              Xóa
            </Button>
          )}
      </form>
    </div>
  );
};

export default UpdateInfo;

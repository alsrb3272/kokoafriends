import { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../auth/OAuth";
import { useNavigate } from "react-router-dom";

const KaKaoRedirect = () => {
  let navigate = useNavigate();
  let code = new URL(window.location.href).searchParams.get('code')
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
            `${BASE_URL}/oauth/token?code=${code}`
        )
        console.log("res : ", res);
        console.log("code : ", code);
        const token = res.headers.authorization;
        window.localStorage.setItem("token", token);
        console.log("token : ", token)
        navigate("/");
        console.log(res);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return <div></div>;
};

export default KaKaoRedirect;
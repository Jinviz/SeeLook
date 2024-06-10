import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { app } from "../firebaseApp";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import "./Login/Login.css"; //이거 왜 import 안해도 적용이 되는겨?

export default function Signup() {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth(app); //firebase 인증 객체 가져오기
      await createUserWithEmailAndPassword(auth, email, password);
      //이메일과 비밀번호를 이용하여 새 사용자 생성

      toast.success("회원가입에 성공했습니다.");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error(error?.code);
    }
  };

  const onChange = (e) => {
    const {
      target: { name, value },
    } = e;

    if (name === "email") {
      setEmail(value);
      const validRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      //이메일 정규표현식
      if (!value?.match(validRegex)) {
        setError("이메일 형식이 올바르지 않습니다.");
      } else {
        setError("");
      }
    }

    if (name === "password") {
      setPassword(value);

      if (value?.length < 8) {
        setError("비밀번호는 8자리 이상으로 입력해주세요");
      } else if (passwordConfirm?.length > 0 && value !== passwordConfirm) {
        setError("비밀번호와 비밀번호 확인 값이 다릅니다. 다시 확인해주세요.");
      } else {
        setError("");
      }
    }

    if (name === "password_confirm") {
      setPasswordConfirm(value);

      if (value?.length < 8) {
        setError("비밀번호는 8자리 이상으로 입력해주세요");
      } else if (value !== password) {
        setError("비밀번호와 비밀번호 확인 값이 다릅니다. 다시 확인해주세요.");
      } else {
        setError("");
      }
    }
  };

  return (
    <div className="login-box">
      <h2>Signup</h2>
      <form onSubmit={onSubmit}>
        <div className="user-box">
          <input
            type="email"
            name="email"
            required
            onChange={onChange}
            value={email}
          />
          <label>Email</label>
        </div>
        <div className="user-box">
          <input
            type="password"
            name="password"
            required
            onChange={onChange}
            value={password}
          />
          <label>Password</label>
        </div>
        <div className="user-box">
          <input
            type="password"
            name="password_confirm"
            required
            onChange={onChange}
            value={passwordConfirm}
          />
          <label>Confirm Password</label>
        </div>
        {error && error.length > 0 && (
          <div className="form__error">{error}</div>
        )}
        <div className="form__block--loginbutton">
          <input
            type="submit"
            value="회원가입"
            className="form__btn--submit"
            disabled={error.length > 0}
          />
        </div>
        <div className="form__block">
          계정이 이미 있으신가요?
          <Link to="/" className="form__link">
            로그인하기
          </Link>
        </div>
      </form>
    </div>
  );
}
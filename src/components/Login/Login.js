import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { app } from "../../firebaseApp";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import "./Login.css";

export default function Login() {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth(app);
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("로그인에 성공했습니다.");
      navigate("/main");
    } catch (error) {
      toast.error(error?.code);
      console.log(error);
    }
  };

  const onChange = (e) => {
    const { name, value } = e.target;

    if (name === "email") {
      setEmail(value);

      const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

      if (!value?.match(validRegex)) {
        setError("이메일 형식이 올바르지 않습니다.");
      } else {
        setError("");
      }
    }

    if (name === "password") {
      setPassword(value);

      if (value?.length < 8) {
        setError("비밀번호는 8자리 이상 입력해주세요");
      } else {
        setError("");
      }
    }
  };

  return (
    <div className="login-box">
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        <div className="user-box">
          <input
            type="email"
            name="email"
            required
            onChange={onChange}
            value={email}
          />
          <label>Username</label>
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
        {error && error.length > 0 && (
          <div className="form__error">{error}</div>
        )}
        <div className="form__block--loginbutton">
          <input
            type="submit"
            value="로그인"
            className="form__btn--submit"
            disabled={error.length > 0}
          />
        </div>
        <div className="form__block">
          계정이 없으신가요?
          <Link to="/signup" className="form__link">
            회원가입하기
          </Link>
        </div>
      </form>
    </div>
  );
}

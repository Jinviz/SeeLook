import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { app } from "../../firebaseApp";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import "./Login.css";

export default function Login() {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); //객체로 원하는 경로 이동하기

  const onSubmit = async (e) => {
    e.preventDefault(); //새로고침 방지

    try {
      const auth = getAuth(app); //firebase 인증 객체 가져오기
      await signInWithEmailAndPassword(auth, email, password);
      //이메일과 비밀번호를 이용해서 사용자 로그인

      toast.success("로그인에 성공했습니다.");
      navigate("/main"); //Route page로 이동하겠다.
    } catch (error) {
      toast.error(error?.code);
      console.log(error);
    }
  };

  const onChange = (e) => {
    const {
      target: { name, value }, //??구문 해석 필요..
    } = e;

    if (name === "email") {
      setEmail(value);

      const validRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

      if (!value?.match(validRegex)) {
        //정규 표현식 패턴과 맞지 않으면
        // value?. 는 null값으로 인해 발생될 수 있는 오류를 방지하기 위함(옵셔널 체이닝)
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
    <form onSubmit={onSubmit} className="form form--lg">
      <h1 className="form__title">로그인</h1>
      <div className="form__block">
        <label htmlFor="email">이메일</label>
        <input
          type="email"
          name="email"
          id="email"
          required
          onChange={onChange}
          value={email}
        />
      </div>
      <div className="form__block">
        <label htmlFor="password">비밀번호</label>
        <input
          type="password"
          name="password"
          id="password"
          required
          onChange={onChange}
          value={password}
        />
      </div>
      {error && error?.length > 0 && (
        <div className="form__block">
          <div className="form__error">{error}</div>
        </div>
      )}
      <div className="form__block">
        계정이 없으신가요?
        <Link to="/signup" className="form__link">
          회원가입하기
        </Link>
      </div>
      <div className="form__block">
        <input
          type="submit"
          value="로그인"
          className="form__btn--submit"
          disabled={error?.length > 0}
        />
      </div>
    </form>
  );
}

//91번째 link to는 페이지 구조에 따라서 경로 수정 예정

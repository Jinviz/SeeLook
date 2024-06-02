import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../utils/auth"; 

const ProtectedRoute = ({ children }) => { //prop, 보호된 경로에 접근하려는 자식 컴포넌트
  const [auth, setAuth] = useState(null); //사용자 인증 여부

  useEffect(() => {
    const checkAuth = async () => {
      const isAuth = await isAuthenticated(); //isAuthenticated === 사용자 인증 상태 확인 함수
      setAuth(isAuth); //auth 값에 세팅하기
    };
    checkAuth();
  }, []);

  if (auth === null) {
    return <div>Loading...</div>; // 로딩 상태 표시
  }

  if (!auth) { //사용자가 인증 되지 않은 경우
    return <Navigate to="/" replace />; //다른 페이지로 접근 못하도록 
  }

  return children; //접근하려는 자식 컴포넌트를 접근할 수 있게 리턴해줌
};

export default ProtectedRoute;

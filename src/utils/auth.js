import { auth } from '../firebaseApp';

export const login = async (email, password) => {
  try {
    const userCredential = await auth.signInWithEmailAndPassword(email, password);
    //사용자 인증
    const token = await userCredential.user.getIdToken();
    //ID 토큰 가져오기(JWT, JSON Web Token)
    localStorage.setItem("authToken", token);
    //autoToken 키로 로컬 스토리지에 저장
    return true;
  } catch (error) {
    console.error("Login failed:", error);
    return false;
    //에러 처리
  }
};

export const isAuthenticated = () => {
  const token = localStorage.getItem("authToken");
  //토큰 존재 유무 확인
  return !!token;
  //token 값 boolean 타입으로 변환하기(!!)
};

export const logout = () => {
  localStorage.removeItem("authToken");
  auth.signOut();
  //사용자 로그아웃 시키기. signOut()는 firebase의 auth 메서드
};
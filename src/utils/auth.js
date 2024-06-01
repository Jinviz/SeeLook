import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { app } from '../firebaseApp';

const auth = getAuth(app);

export const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password); //로그인 하기
    return true;
  } catch (error) {
    console.error("Login failed:", error);
    return false;
  }
};

export const isAuthenticated = () => { //사용자 인증 상태 확인
  return new Promise((resolve) => { //new promise - 비동기 작업을 처리하기 위한 객체
    //비동기 작업이 성공하면 resolve 인자를,
    //실패하면 reject를 호출
    onAuthStateChanged(auth, (user) => { //인증 상태가 변경될 때마다 호출
      //로그인 돼 있으면 'user' 객체 제공, 아닐 시 null
      resolve(!!user);
    });
  });
};

export const logout = () => {
  auth.signOut();
};

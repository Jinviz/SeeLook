import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import LoginPage from "./components/Login";
import ImageUploadPage from "./pages/imageupload";
import MainPage from "./pages/main";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/ImageUpload" element={<ImageUploadPage />} />
        <Route path="/Main" element={<MainPage />} />
      </Routes>
    </Layout>
  );
}

export default App;

//?? Router 처리를 할 때, 로컬 스토리지에 인증 정보가 저장이 돼 있을 경우
//?? Router 경로를 바로 main 페이지로 이동 시킬 것인지?

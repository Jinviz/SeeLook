import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import LoginPage from "./components/Login";
import ImageUploadPage from "./pages/imageupload";
import MainPage from "./pages/main";
import Lookbook from "./pages/lookbook";
import SignupPage from "./components/Signup";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Signup" element={<SignupPage />} />
        <Route path="/ImageUpload" element={<ImageUploadPage />} />
        <Route path="/Main" element={<MainPage />} />
        <Route path="/lookbook" element={<Lookbook />} />
      </Routes>
    </Layout>
  );
}

export default App;
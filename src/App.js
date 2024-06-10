import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import LoginPage from "./components/Login/Login";
import StyleUploadPage from "./pages/StyleUpload";
import MainPage from "./pages/main";
import Lookbook from "./pages/lookbook";
import SignupPage from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; //toast
import ClothesUploadPage from "./pages/ClothesUpload";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/Signup" element={<SignupPage />} />
          <Route
            path="/StyleUpload"
            element={
              <ProtectedRoute>
                <StyleUploadPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/ClothesUpload"
            element={
              <ProtectedRoute>
                <ClothesUploadPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Main"
            element={
              <ProtectedRoute>
                <MainPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/lookbook"
            element={
              <ProtectedRoute>
                <Lookbook />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Layout>
      <ToastContainer />
    </>
  );
}

export default App;

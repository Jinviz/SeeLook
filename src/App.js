import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import LoginPage from "./components/Login/Login";
import StyleUploadPage from "./pages/StyleUpload";
import MainPage from "./pages/main";
import SignupPage from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; //toast
import ClothesUploadPage from "./pages/ClothesUpload";
import LookbookPage from "./pages/Lookbook";
import ClosetPage from "./pages/Closet";
import ClothesPage from "./pages/Clothes";
import StylistPage from "./pages/Stylist";

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
                <LookbookPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/closet"
            element={
              <ProtectedRoute>
                <ClosetPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/clothes"
            element={
              <ProtectedRoute>
                <ClothesPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/stylist"
            element={
              <ProtectedRoute>
                <StylistPage />
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

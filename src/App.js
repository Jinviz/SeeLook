import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import LoginPage from "./components/Login/Login";
import ImageUploadPage from "./pages/imageupload";
import MainPage from "./pages/main";
import Lookbook from "./pages/lookbook";
import SignupPage from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Signup" element={<SignupPage />} />
        <Route path="/ImageUpload" 
        element={<ProtectedRoute><ImageUploadPage /></ProtectedRoute>} />
        <Route path="/Main" 
        element={<ProtectedRoute><MainPage /></ProtectedRoute>} />
        <Route path="/lookbook" 
        element={<ProtectedRoute><Lookbook /></ProtectedRoute>} />
      </Routes>
      <ToastContainer />
    </Layout>
  );
}

export default App;
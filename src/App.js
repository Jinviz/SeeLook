import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Login from "./components/Login";

function App() {
  return (
    <Layout>
        <Routes>
            <Route path="/" element={<Login/>} />
        </Routes>
    </Layout>
  );
}

export default App;

import "./App.css";
import MultiStepForm from "./components/Forms/multistep";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout/Layout";
import Loader from "./components/Loader";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <Layout>
      {loading && <Loader />}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book-appointment" element={<MultiStepForm />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;

import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AppRoutes from "./routes/AppRoutes";

import Loader from "./components/Loader/Loader";

export default function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Show loader when route changes
    setLoading(true);

    const timer = setTimeout(() => setLoading(false), 500);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {loading && <Loader />}

      <Navbar />
      <AppRoutes />
      <Footer />
    </>
  );
}

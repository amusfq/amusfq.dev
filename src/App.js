import { useEffect, useState } from "react";
import Loader from "./Components/Loader";
import Header from "./Layouts/Header";
import Content from "./Layouts/Content";
import Footer from "./Layouts/Footer";

function App() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    let timeout = setTimeout(() => setShowLoader(false), 2 * 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return (
    <div className="relative">
      <Loader show={showLoader} />
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;

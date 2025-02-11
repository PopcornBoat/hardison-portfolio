import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <div className="pt-16 px-4"> {/* Prevents overlap & adds padding */}
        <div className="max-w-4xl mx-auto"> {/* Centers content */}
          <Routes>
            <Route path="/" element={<><Hero /><About /><Projects /><Contact /><Footer /></>} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

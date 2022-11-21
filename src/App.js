import { BrowserRouter, Routes, Route, Link, } from "react-router-dom";
import './App.css';
import Blog from "./components/Blog.jsx";
import LandingPage from "./components/LandingPage.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/posts/" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

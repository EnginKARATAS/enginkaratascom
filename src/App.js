import logo from "./logo.svg";
import "./App.css";
import Header from "./layout/Header";
import Hero from "./layout/Hero";
import FeatureComponent from "./components/FeatureComponent";
import Footer from "./layout/Footer";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import TodoAppPage from "./pages/TodoAppPage";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/homepage" element={<HomePage />} />
            <Route index path="/" element={<HomePage />} />
            <Route path="/todo" element={<TodoAppPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>

    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import Header from "./layout/Header";
import Hero from "./layout/Hero";
import FeatureComponent from "./components/FeatureComponent";
import Footer from "./layout/Footer";

function App() {
  return (
    <div className="App">
        <Header />
        <Hero />
        <FeatureComponent />
        <Footer />

    </div>
  );
}

export default App;

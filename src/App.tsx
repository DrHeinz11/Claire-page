import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import "./styles/style.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <>
        <Home />
      </>
      <Footer/>
    </div>
  );
}

export default App;

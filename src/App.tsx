import Cta from "./components/Cta";
import Navbar from "./components/Navbar/Navbar";
import "./styles/style.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1 className="prueba">esto funciona</h1>
      <Cta route="https://github.com/" text="hola esto es una prueba" />
    </div>
  );
}

export default App;

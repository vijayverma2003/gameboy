import logo from "./logo.svg";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import Gameboy from "./components/Gameboy";

function App() {
  return (
    <Canvas camera={{ position: [0, 0, -50] }}>
      <Gameboy />
    </Canvas>
  );
}

export default App;

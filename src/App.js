import "./App.css";

import { Canvas } from "@react-three/fiber";
import { Sky } from "@react-three/drei";
import Gameboy from "./components/Gameboy";

function App() {
  return (
    <Canvas camera={{ position: [0, 0, -40] }}>
      <Sky
        distance={500}
        sunPosition={[0, 1, 0]}
        inclination={0}
        azimuth={0.25}
      />
      <Gameboy />
    </Canvas>
  );
}

export default App;

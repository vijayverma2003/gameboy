import {
  OrbitControls,
  Sparkles,
  useGLTF,
  useTexture,
} from "@react-three/drei";
import React from "react";
import * as THREE from "three";
import Landscape from "./Landscape";
import Grass from "./Grass";

const Gameboy = () => {
  const model = useGLTF("./gameboy.glb");

  const texture = useTexture("./baked-gb.jpg");
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.flipY = false;

  const gameboyMaterial = new THREE.MeshBasicMaterial({ map: texture });

  for (let node in model.nodes) {
    model.nodes[node].material = gameboyMaterial;
  }

  model.nodes["Battery_Light"].material = new THREE.MeshBasicMaterial({
    color: "green",
  });

  const textMaterial = new THREE.MeshBasicMaterial({ color: "navy" });

  model.nodes["Text"].material = textMaterial;
  model.nodes["Text001"].material = textMaterial;
  model.nodes["Text002"].material = textMaterial;
  model.nodes["Text003"].material = textMaterial;
  model.nodes["Text004"].material = textMaterial;
  model.nodes["Text005"].material = textMaterial;
  model.nodes["Text006"].material = textMaterial;
  model.nodes["Text007"].material = textMaterial;
  model.nodes["Text008"].material = textMaterial;
  model.nodes["strip"].material = new THREE.MeshNormalMaterial();
  model.nodes["strip001"].material = textMaterial;
  model.nodes["strip002"].material = textMaterial;
  model.nodes["strip003"].material = textMaterial;

  return (
    <>
      <OrbitControls
        minAzimuthAngle={Math.PI / 4}
        maxAzimuthAngle={(3 / 2) * Math.PI}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI / 2}
        dampingFactor={0.04}
        zoomSpeed={0.5}
        maxDistance={50}
        minDistance={25}
        enablePan={false}
      />
      <Sparkles
        scale={[25, 1, 25]}
        color={"#d98600"}
        count={30}
        position-y={-7}
        size={10}
        speed={2}
        noise={10}
      />
      <Landscape />
      <Grass />
      <primitive
        rotation-y={(160 * Math.PI) / 180}
        position-y={-10}
        object={model.scene}
      />
    </>
  );
};

export default Gameboy;

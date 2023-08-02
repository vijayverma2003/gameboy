import { useGLTF } from "@react-three/drei";
import React from "react";
import { MeshBasicMaterial } from "three";

const Grass = () => {
  const model = useGLTF("./grass.glb");

  const material = new MeshBasicMaterial({ color: "#4a6e15" });
  model.nodes["Mesh"].material = material;

  return (
    <>
      <primitive
        rotation-y={(160 * Math.PI) / 180}
        position-y={-10}
        object={model.scene}
      />
    </>
  );
};

export default Grass;

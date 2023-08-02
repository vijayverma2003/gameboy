import { useGLTF, useTexture } from "@react-three/drei";
import React from "react";
import { MeshBasicMaterial, SRGBColorSpace } from "three";

const Landscape = () => {
  const model = useGLTF("./landscape.glb");

  const texture = useTexture("./baked-land.jpg");
  texture.colorSpace = SRGBColorSpace;
  texture.flipY = false;

  const landscapeMaterial = new MeshBasicMaterial({
    map: texture,
  });

  for (let node in model.nodes) {
    model.nodes[node].material = landscapeMaterial;
  }
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

export default Landscape;

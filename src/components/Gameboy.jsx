import { OrbitControls, useGLTF, useTexture } from "@react-three/drei";
import React from "react";
import * as THREE from "three";

const Gameboy = () => {
  const model = useGLTF("./gameboy.glb");
  const landscapeModel = useGLTF("./landscape.glb");
  const grassModel = useGLTF("./grass.glb");

  const texture = useTexture("./baked-gb.jpg");
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.flipY = false;

  const landScapeTexture = useTexture("./baked-land.jpg");
  landScapeTexture.colorSpace = THREE.SRGBColorSpace;
  landScapeTexture.flipY = false;

  const gameboyMaterial = new THREE.MeshBasicMaterial({ map: texture });
  const landscapeMaterial = new THREE.MeshBasicMaterial({
    map: landScapeTexture,
  });

  for (let node in model.nodes) {
    model.nodes[node].material = gameboyMaterial;
  }

  for (let node in grassModel.nodes) {
    console.log(node);
    grassModel.nodes[node].material = new THREE.MeshNormalMaterial();
  }

  for (let node in landscapeModel.nodes) {
    landscapeModel.nodes[node].material = landscapeMaterial;
  }

  model.nodes["Battery_Light"].material = new THREE.MeshBasicMaterial({
    color: "green",
  });

  const textMaterial = new THREE.MeshBasicMaterial({ color: "navy" });

  model.nodes["Text"].material = textMaterial;
  model.nodes["Text001"].material = textMaterial;
  model.nodes["Text002"].material = textMaterial;
  model.nodes["Text005"].material = textMaterial;
  model.nodes["Text006"].material = textMaterial;
  model.nodes["Text007"].material = textMaterial;
  model.nodes["Text008"].material = textMaterial;
  model.nodes["strip"].material = textMaterial;
  model.nodes["strip001"].material = textMaterial;
  model.nodes["strip002"].material = textMaterial;
  model.nodes["strip003"].material = textMaterial;

  const material = new THREE.MeshBasicMaterial({ color: "#4a6e15" });

  grassModel.nodes["Mesh"].material = material;
  console.log(grassModel.nodes);

  return (
    <>
      <OrbitControls />

      <primitive
        rotation-y={(160 * Math.PI) / 180}
        position-y={-10}
        object={model.scene}
      />
      <primitive
        rotation-y={(160 * Math.PI) / 180}
        position-y={-10}
        object={landscapeModel.scene}
      />
      <primitive
        rotation-y={(160 * Math.PI) / 180}
        position-y={-10}
        object={grassModel.scene}
      />
    </>
  );
};

export default Gameboy;

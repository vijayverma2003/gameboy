import { useThree } from "@react-three/fiber";
import React from "react";
import { Water } from "three/examples/jsm/objects/Water";
import * as THREE from "three";

const Sea = () => {
  const { scene } = useThree();

  const waterGeometry = new THREE.PlaneGeometry(10000, 10000);
  const water = new Water(waterGeometry, {
    textureWidth: 512,
    textureHeight: 512,
    waterNormals: new THREE.TextureLoader().load(
      "https://img-new.cgtrader.com/items/3206924/550843d60b/water-texture-4k-for-free-3d-model.jpg",
      function (texture) {
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
      }
    ),
    alpha: 1.0,
    sunDirection: new THREE.Vector3(),
    sunColor: 0xffffff,
    waterColor: 0x001e0f,
    distortionScale: 3.7,
    fog: scene.fog !== undefined,
  });

  water.rotation.x = -Math.PI / 2;
  water.position.y = -11;
  scene.add(water);

  return <></>;
};

export default Sea;

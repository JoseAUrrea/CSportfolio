"use client";
import { useRef } from "react";
import { Canvas, useFrame, useLoader  } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Mesh } from "three";

function MeshComponent() {
    const fileUrl = "/statue/scene.gltf";
    const mesh = useRef<Mesh>(null!);
    const gltf = useLoader(GLTFLoader, fileUrl);

    return (
        <mesh ref={mesh} scale={[2,2,2]} position={[0,-5,0]}>
            <primitive object={gltf.scene} />
        </mesh>
    );
}

export function Model() {
    return (
        <div className = "flex justify-center items-center h-[500px] pt-[60px]">
            <Canvas className = "">
                <PerspectiveCamera makeDefault position={[-30, 10, 50]} fov={50}/>
                <OrbitControls />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <MeshComponent />
            </Canvas>
        </div>
    )
}
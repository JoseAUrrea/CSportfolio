"use client";
import { Suspense, useRef } from "react";
import { Canvas, useFrame, useLoader  } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Mesh } from "three";
import ModelLoader from '../components/ModelLoader';

function MeshComponent() {
    const fileUrl = "/statue/scene.gltf";
    const mesh = useRef<Mesh>(null!);
    const gltf = useLoader(GLTFLoader, fileUrl);

    return (
        <mesh ref={mesh} scale={[2,2,2]} position={[0,-10,0]}>
            <primitive object={gltf.scene} />
        </mesh>
    );
}

export function Model() {
    return (
        <div className = "w-full h-[375px]">
            <Canvas 
                frameloop="demand"
                shadows
            >
                <Suspense fallback = {<ModelLoader />}> 
                    <PerspectiveCamera makeDefault position={[-30, 0, 60]} fov={50}/>
                    <OrbitControls 
                        enableZoom={false}
                        maxPolarAngle={Math.PI / 2}
                        minPolarAngle={Math.PI / 2}
                    />
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} />
                    <MeshComponent />
                </Suspense>
            </Canvas>
        </div>
    )
}

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const PetSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.3;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshStandardMaterial 
          color="#8A2BE2" 
          emissive="#ADD8E6" 
          emissiveIntensity={0.2}
          roughness={0.3}
          metalness={0.7}
        />
      </mesh>
    </Float>
  );
};

const PetCubes = () => {
  const cubesRef = useRef<THREE.Group>(null!);
  
  useFrame((state) => {
    if (cubesRef.current) {
      cubesRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
  });

  return (
    <group ref={cubesRef}>
      {[...Array(6)].map((_, i) => (
        <Float key={i} speed={2 + i * 0.5} rotationIntensity={1} floatIntensity={1}>
          <mesh position={[
            Math.cos((i / 6) * Math.PI * 2) * 3,
            Math.sin(i * 0.5) * 2,
            Math.sin((i / 6) * Math.PI * 2) * 3
          ]}>
            <boxGeometry args={[0.5, 0.5, 0.5]} />
            <meshStandardMaterial 
              color={i % 2 === 0 ? "#ADD8E6" : "#8A2BE2"}
              emissive={i % 2 === 0 ? "#8A2BE2" : "#ADD8E6"}
              emissiveIntensity={0.1}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
};

const AnimatedPet3D = () => {
  return (
    <div className="w-full h-96">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#ADD8E6" />
        
        <PetSphere />
        <PetCubes />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default AnimatedPet3D;

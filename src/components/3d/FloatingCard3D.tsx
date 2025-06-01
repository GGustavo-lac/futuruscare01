
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

interface FloatingCardProps {
  icon: string;
  color?: string;
}

const IconCard = ({ icon, color = "#8A2BE2" }: FloatingCardProps) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef}>
        <planeGeometry args={[2, 2]} />
        <meshStandardMaterial 
          color={color}
          transparent
          opacity={0.8}
          emissive={color}
          emissiveIntensity={0.1}
        />
      </mesh>
      {/* Simple sphere to represent the icon instead of 3D text */}
      <mesh position={[0, 0, 0.1]}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial color="white" />
      </mesh>
    </Float>
  );
};

const FloatingCard3D = ({ icon, color }: FloatingCardProps) => {
  return (
    <div className="w-full h-32 relative">
      <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        
        <IconCard icon={icon} color={color} />
      </Canvas>
      {/* Display the emoji icon as HTML overlay */}
      <div className="absolute inset-0 flex items-center justify-center text-4xl pointer-events-none">
        {icon}
      </div>
    </div>
  );
};

export default FloatingCard3D;

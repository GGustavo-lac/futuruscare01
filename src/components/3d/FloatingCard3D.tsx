
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text3D, Center } from '@react-three/drei';
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
      <Center position={[0, 0, 0.1]}>
        <Text3D
          font="/fonts/helvetiker_regular.typeface.json"
          size={0.5}
          height={0.1}
        >
          {icon}
          <meshStandardMaterial color="white" />
        </Text3D>
      </Center>
    </Float>
  );
};

const FloatingCard3D = ({ icon, color }: FloatingCardProps) => {
  return (
    <div className="w-full h-32">
      <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        
        <IconCard icon={icon} color={color} />
      </Canvas>
    </div>
  );
};

export default FloatingCard3D;

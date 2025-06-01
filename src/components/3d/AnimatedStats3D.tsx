
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

interface StatItemProps {
  number: string;
  label: string;
  position: [number, number, number];
}

const StatItem = ({ number, label, position }: StatItemProps) => {
  const groupRef = useRef<THREE.Group>(null!);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime + position[0]) * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <group ref={groupRef} position={position}>
        <mesh position={[0, 0, -0.1]}>
          <cylinderGeometry args={[1, 1, 0.2, 32]} />
          <meshStandardMaterial 
            color="#8A2BE2" 
            transparent 
            opacity={0.7}
            emissive="#ADD8E6"
            emissiveIntensity={0.2}
          />
        </mesh>
        
        {/* Simple geometric shapes instead of 3D text */}
        <mesh position={[0, 0.3, 0]}>
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshStandardMaterial color="white" />
        </mesh>
        
        <mesh position={[0, -0.3, 0]}>
          <boxGeometry args={[0.3, 0.1, 0.1]} />
          <meshStandardMaterial color="white" />
        </mesh>
      </group>
    </Float>
  );
};

interface AnimatedStats3DProps {
  stats: Array<{ number: string; label: string }>;
}

const AnimatedStats3D = ({ stats }: AnimatedStats3DProps) => {
  return (
    <div className="w-full h-64 relative">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-5, 5, 5]} intensity={0.5} color="#ADD8E6" />
        
        {stats.map((stat, index) => (
          <StatItem
            key={index}
            number={stat.number}
            label={stat.label}
            position={[
              (index - stats.length / 2 + 0.5) * 3,
              0,
              0
            ]}
          />
        ))}
      </Canvas>
      
      {/* HTML overlay for the actual text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <div className="text-2xl font-bold mb-1">{stat.number}</div>
              <div className="text-sm opacity-80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimatedStats3D;

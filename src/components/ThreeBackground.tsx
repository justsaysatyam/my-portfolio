'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Starfield() {
  const ref = useRef<THREE.Points>(null!);
  const [stars, setStars] = React.useState<Float32Array | null>(null);
  
  React.useEffect(() => {
    const generateStars = () => {
      const isMobile = window.innerWidth < 768;
      const starCount = isMobile ? 1000 : 5000;
      const array = new Float32Array(starCount * 3);
      for (let i = 0; i < starCount; i++) {
        array[i * 3] = (Math.random() - 0.5) * 50;
        array[i * 3 + 1] = (Math.random() - 0.5) * 50;
        array[i * 3 + 2] = (Math.random() - 0.5) * 50;
      }
      setStars(array);
    };
    
    generateStars();
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  if (!stars) return null;

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={stars} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#00f5ff"
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 -z-20 h-screen w-screen overflow-hidden pointer-events-none">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <color attach="background" args={['#050a10']} />
        <Starfield />
      </Canvas>
    </div>
  );
}

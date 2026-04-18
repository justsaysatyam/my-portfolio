'use client';

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Float } from '@react-three/drei';
import * as THREE from 'three';

export default function HolographicGlobe() {
  const globeRef = useRef<THREE.Mesh>(null!);
  const ring1Ref = useRef<THREE.Group>(null!);
  const ring2Ref = useRef<THREE.Group>(null!);

  useFrame((state, delta) => {
    globeRef.current.rotation.y += delta * 0.2;
    ring1Ref.current.rotation.z += delta * 0.5;
    ring1Ref.current.rotation.x += delta * 0.2;
    ring2Ref.current.rotation.z -= delta * 0.3;
    ring2Ref.current.rotation.y += delta * 0.4;
  });

  return (
    <group scale={1.5}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        {/* Main Globe */}
        <Sphere ref={globeRef} args={[1, 32, 32]}>
          <meshPhongMaterial
            color="#00f5ff"
            wireframe
            transparent
            opacity={0.3}
            emissive="#00f5ff"
            emissiveIntensity={0.5}
          />
        </Sphere>

        {/* Inner Solidish core */}
        <Sphere args={[0.95, 32, 32]}>
          <meshPhongMaterial
            color="#00f5ff"
            transparent
            opacity={0.05}
          />
        </Sphere>

        {/* Orbit Ring 1 */}
        <group ref={ring1Ref}>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[1.4, 0.005, 16, 100]} />
            <meshBasicMaterial color="#00f5ff" transparent opacity={0.6} />
          </mesh>
        </group>

        {/* Orbit Ring 2 */}
        <group ref={ring2Ref}>
          <mesh rotation={[Math.PI / 4, Math.PI / 4, 0]}>
            <torusGeometry args={[1.6, 0.005, 16, 100]} />
            <meshBasicMaterial color="#8b5cf6" transparent opacity={0.4} />
          </mesh>
        </group>

        {/* Lights */}
        <pointLight position={[5, 5, 5]} intensity={1} color="#00f5ff" />
        <pointLight position={[-5, -5, -5]} intensity={0.5} color="#8b5cf6" />
      </Float>
    </group>
  );
}

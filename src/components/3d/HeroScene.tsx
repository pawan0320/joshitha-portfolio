'use client';

import React, { useEffect, useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

const CYAN = '#00d9ff';
const PURPLE = '#b200ff';
const GREEN = '#39ff88';

const CHIP_PIN_POSITIONS = [-1.45, -0.95, -0.45, 0.05, 0.55, 1.05, 1.55];
const ORBIT_NODES = Array.from({ length: 18 }, (_, index) => index);

function seededNoise(index: number, salt = 0) {
  const value = Math.sin(index * 12.9898 + salt * 78.233) * 43758.5453;
  return value - Math.floor(value);
}

function StarField() {
  const geometry = useMemo(() => {
    const positions = new Float32Array(360 * 3);

    for (let i = 0; i < 360; i++) {
      positions[i * 3] = (seededNoise(i, 1) - 0.5) * 34;
      positions[i * 3 + 1] = (seededNoise(i, 2) - 0.5) * 18;
      positions[i * 3 + 2] = -seededNoise(i, 3) * 20 - 2;
    }

    const starGeometry = new THREE.BufferGeometry();
    starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return starGeometry;
  }, []);

  return (
    <points geometry={geometry}>
      <pointsMaterial color={CYAN} size={0.035} transparent opacity={0.58} />
    </points>
  );
}

function HelixStrand({
  phase,
  color,
  radius,
}: {
  phase: number;
  color: string;
  radius: number;
}) {
  const curve = useMemo(() => {
    const points: THREE.Vector3[] = [];

    for (let i = 0; i <= 180; i++) {
      const progress = i / 180;
      const angle = progress * Math.PI * 4.7 + phase;
      points.push(
        new THREE.Vector3(
          Math.cos(angle) * radius,
          (progress - 0.5) * 5.2,
          Math.sin(angle) * radius
        )
      );
    }

    return new THREE.CatmullRomCurve3(points);
  }, [phase, radius]);

  return (
    <mesh>
      <tubeGeometry args={[curve, 180, 0.025, 8, false]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1.4} />
    </mesh>
  );
}

function DataNode({
  index,
  color,
  radius,
}: {
  index: number;
  color: string;
  radius: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;

    const time = clock.elapsedTime * 0.38 + index * 0.42;
    const angle = time * Math.PI * 2;
    meshRef.current.position.set(
      Math.cos(angle) * radius,
      Math.sin(time * 1.6 + index) * 1.8,
      Math.sin(angle) * radius
    );
    meshRef.current.scale.setScalar(0.75 + Math.sin(clock.elapsedTime * 3 + index) * 0.18);
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.105, 18, 18]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1.8} />
    </mesh>
  );
}

function ChipPins() {
  return (
    <>
      {CHIP_PIN_POSITIONS.map((position) => (
        <React.Fragment key={`pin-${position}`}>
          <mesh position={[position, 1.24, 0]}>
            <boxGeometry args={[0.08, 0.55, 0.05]} />
            <meshStandardMaterial color={CYAN} emissive={CYAN} emissiveIntensity={0.7} />
          </mesh>
          <mesh position={[position, -1.24, 0]}>
            <boxGeometry args={[0.08, 0.55, 0.05]} />
            <meshStandardMaterial color={PURPLE} emissive={PURPLE} emissiveIntensity={0.7} />
          </mesh>
        </React.Fragment>
      ))}
    </>
  );
}

function CircuitChip() {
  const chipRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!chipRef.current) return;

    chipRef.current.rotation.x = Math.sin(clock.elapsedTime * 0.42) * 0.14;
    chipRef.current.rotation.y = clock.elapsedTime * 0.32;
    chipRef.current.rotation.z = Math.sin(clock.elapsedTime * 0.25) * 0.08;
  });

  return (
    <group ref={chipRef}>
      <mesh>
        <boxGeometry args={[2.9, 2.15, 0.22]} />
        <meshPhysicalMaterial
          color="#061220"
          emissive="#061220"
          emissiveIntensity={0.4}
          metalness={0.75}
          roughness={0.18}
          clearcoat={0.8}
          transparent
          opacity={0.74}
        />
      </mesh>

      <mesh position={[0, 0, 0.14]}>
        <boxGeometry args={[1.45, 0.92, 0.08]} />
        <meshStandardMaterial color="#071e2c" emissive={GREEN} emissiveIntensity={0.25} />
      </mesh>

      <mesh position={[0, 0, 0.2]}>
        <ringGeometry args={[0.45, 0.51, 48]} />
        <meshBasicMaterial color={CYAN} transparent opacity={0.72} />
      </mesh>

      <mesh position={[0, 0, 0.21]}>
        <sphereGeometry args={[0.13, 24, 24]} />
        <meshStandardMaterial color={GREEN} emissive={GREEN} emissiveIntensity={1.6} />
      </mesh>

      <ChipPins />
    </group>
  );
}

function SignalRings() {
  const ringRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!ringRef.current) return;

    ringRef.current.rotation.x = Math.PI / 2 + Math.sin(clock.elapsedTime * 0.34) * 0.16;
    ringRef.current.rotation.y = clock.elapsedTime * 0.18;
    ringRef.current.rotation.z = clock.elapsedTime * 0.28;
  });

  return (
    <group ref={ringRef}>
      <mesh>
        <torusGeometry args={[2.55, 0.018, 12, 160]} />
        <meshBasicMaterial color={CYAN} transparent opacity={0.64} />
      </mesh>
      <mesh rotation={[0, Math.PI / 3, Math.PI / 4]}>
        <torusGeometry args={[3.25, 0.014, 12, 160]} />
        <meshBasicMaterial color={PURPLE} transparent opacity={0.46} />
      </mesh>
      <mesh rotation={[Math.PI / 5, -Math.PI / 4, 0]}>
        <torusGeometry args={[3.85, 0.012, 12, 180]} />
        <meshBasicMaterial color={GREEN} transparent opacity={0.34} />
      </mesh>
    </group>
  );
}

function NeuralCore() {
  const groupRef = useRef<THREE.Group>(null);
  const pointerRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      pointerRef.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      };
    };

    window.addEventListener('pointermove', handlePointerMove);
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;

    groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, pointerRef.current.x * 0.45, 0.04);
    groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, pointerRef.current.y * 0.32, 0.04);
    groupRef.current.rotation.y = Math.sin(clock.elapsedTime * 0.2) * 0.2;
  });

  return (
    <group ref={groupRef} position={[2.6, -0.1, -0.45]} rotation={[0.1, -0.28, 0.08]}>
      <SignalRings />

      <group rotation={[0, 0, Math.PI / 2.15]}>
        <HelixStrand phase={0} color={CYAN} radius={1.07} />
        <HelixStrand phase={Math.PI} color={PURPLE} radius={1.07} />
        <HelixStrand phase={Math.PI / 2} color={GREEN} radius={0.76} />
      </group>

      <CircuitChip />

      {ORBIT_NODES.map((index) => (
        <DataNode
          key={index}
          index={index}
          radius={2.15 + (index % 3) * 0.42}
          color={index % 3 === 0 ? CYAN : index % 3 === 1 ? PURPLE : GREEN}
        />
      ))}
    </group>
  );
}

function Scene() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0.4, 8.5]} fov={68} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        enableDamping
        autoRotate
        autoRotateSpeed={0.18}
        dampingFactor={0.08}
      />

      <color attach="background" args={['#030712']} />
      <fog attach="fog" args={['#030712', 9, 22]} />

      <ambientLight intensity={0.35} />
      <pointLight position={[4, 4, 5]} intensity={1.7} color={CYAN} />
      <pointLight position={[-5, -2, 4]} intensity={1.1} color={PURPLE} />
      <pointLight position={[0, 3, -3]} intensity={0.8} color={GREEN} />

      <StarField />
      <NeuralCore />

      <gridHelper
        args={[42, 42, '#00d9ff', '#123047']}
        position={[0, -4.25, -5]}
        rotation={[0.06, 0, 0]}
      />
    </>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0.4, 8.5], fov: 68 }}
      gl={{
        antialias: true,
        alpha: false,
        powerPreference: 'high-performance',
      }}
      dpr={[1, 1.7]}
      style={{ width: '100%', height: '100%' }}
    >
      <Scene />
    </Canvas>
  );
}

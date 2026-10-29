import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import { useRef } from 'react'

function Sculpture() {
  const meshRef = useRef()

  useFrame(({ clock }) => {
    if (!meshRef.current) return
    meshRef.current.rotation.y = clock.elapsedTime * 0.28
    meshRef.current.rotation.x = 0.75 + Math.sin(clock.elapsedTime * 0.7) * 0.12
    meshRef.current.position.y = Math.sin(clock.elapsedTime * 0.9) * 0.18
  })

  return (
    <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={meshRef} castShadow receiveShadow>
        <torusKnotGeometry args={[1.1, 0.38, 180, 32]} />
        <meshPhysicalMaterial
          color="#171717"
          roughness={0.35}
          metalness={0.18}
          clearcoat={0.85}
          clearcoatRoughness={0.3}
        />
      </mesh>
    </Float>
  )
}

export default function HeroSculpture() {
  return (
    <div className="h-[500px] w-full overflow-hidden rounded-[32px] border border-[#ebe1d7] bg-[#f0ece7] md:h-[640px]">
      <Canvas camera={{ position: [0, 0, 4.7], fov: 32 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[3, 2, 2]} intensity={1.3} color="#fff7ee" />
        <directionalLight position={[-3, -1, 1]} intensity={0.7} color="#d2b38c" />
        <Sculpture />
      </Canvas>
    </div>
  )
}

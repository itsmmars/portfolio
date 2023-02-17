import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { inSphere } from 'maath/random'
import { Points, PointMaterial } from '@react-three/drei'

function Dots(props: any) {
  const ref = useRef<THREE.Mesh>(null!)
  const [sphere] = useState(() => inSphere(new Float32Array(5000), { radius: 5 }))
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10
    ref.current.rotation.y -= delta / 15
  })
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points 
        {...props}
        ref={ref} 
        positions={sphere} 
        stride={3} 
        frustumCulled={false}> 
        <PointMaterial 
          transparent color='red' 
          size={0.025} 
          sizeAttenuation={true} 
          depthWrite={false} />
      </Points>
    </group>
  )
}

export const Background = () => {
  return (
    <Canvas style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      zIndex: -1, 
      backgroundColor: 'white', 
      filter: 'blur(3px)',
      width: '100%', 
      height: '100%'
    }}>
      <Dots />
    </Canvas>
  )
}
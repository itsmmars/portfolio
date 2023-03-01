import { Points, PointMaterial } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useColorModeValue } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import { inSphere } from 'maath/random'

function Dots(props: any) {
  const ref = useRef<THREE.Mesh>(null!)
  const [sphere] = useState(() => inSphere(new Float32Array(10000), { radius: 8 }))
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10
    ref.current.rotation.y -= delta / 15
  })
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points 
        {...props}
        frustumCulled={false}
        positions={sphere} 
        stride={3} 
        ref={ref}> 
        <PointMaterial 
          sizeAttenuation={true} 
          depthWrite={false}
          size={0.033} 
          transparent 
          color='red' />
      </Points>
    </group>
  )
}

export const Background = () => {
  const bg = useColorModeValue('white', 'black')
  return (
    <Canvas style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      zIndex: -1, 
      backgroundColor: bg, 
      marginTop: '0px',
      filter: 'blur(3px)',
      width: '100%', 
      height: '100%'
    }}>
      <Dots />
    </Canvas>
  )
}
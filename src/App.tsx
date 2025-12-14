
import { Sky } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import {
Viverse,
SimpleCharacter,
BvhPhysicsBody,
PrototypeBox,
} from '@react-three/viverse'

export default function App() {
return (
 <Canvas
    style={{ position: 'absolute', inset: '0', touchAction: 'none' }}
  >
    <Viverse>
      <Sky />
      <directionalLight intensity={1.2} position={[-10, 10, -10]} />
      <ambientLight intensity={1} />
      <SimpleCharacter/>
      <BvhPhysicsBody>
        <PrototypeBox scale={[100, 1, 150]} position={[0, -0.5, 0]} />
      </BvhPhysicsBody>
    </Viverse>
  </Canvas>
)
}
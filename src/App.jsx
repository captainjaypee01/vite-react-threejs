import {Canvas, useFrame} from "@react-three/fiber";
import {OrbitControls, Sparkles} from "@react-three/drei";
import {useRef} from "react";

const RotatingCube = () => {
    const meshRef = useRef()

    useFrame(() => {
        if(meshRef.current){
            meshRef.current.rotation.y += 0.001
            meshRef.current.rotation.x += 0.001
        }
    })
    return (
        <mesh ref={meshRef}>
            <cylinderGeometry args={[1, 1, 1]} />
            <meshLambertMaterial color={"#468585"} emissive={"#468585"}/>

            <Sparkles count={100} scale={1} size={5} speed={0.002} noise={0.2} color="red" />
        </mesh>
    )
}
const App = () => {
    return (
    <Canvas style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <OrbitControls enableZoom enablePan enableRotate />
        <directionalLight position={[1, 1, 1]} intensity={10} color={0x9cdba6}/>

        <color attach="background" args={[0xf0f0f0]} />

        <RotatingCube />
    </Canvas>

    );
}

export default App;
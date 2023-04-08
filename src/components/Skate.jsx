import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

const Computers = ({ mobilePhone }) => {
    const skate = useGLTF("./skate/scene.gltf")
    return (
        <mesh>
            <hemisphereLight intensity={.5} groundColor="white" />
            <pointLight intensity={1} />
            <spotLight position={[-20, 50, 10]} angle={0.12} penumbra={0.12} castShadow shadow-mapSize={1024} />
            <primitive object={skate.scene}
                scale={mobilePhone ? 1.7 : 3.25}
                position={mobilePhone ? [0, -3, -1.2] : [0, -3.25, -3.5]}
                rotation={[-0.1, 1.3, -0.1]}
            />
        </mesh>
    )
}


const Skate = () => {
    const [isMobile, setisMobile] = useState(false)

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 500px)');

        setisMobile(mediaQuery.matches);

        const handleMediaQuery = (event) => {
            setisMobile(event.matches)
        }

        mediaQuery.addEventListener('change', handleMediaQuery)

        return () => {
            mediaQuery.removeEventListener('change', handleMediaQuery)
        }

    }, [])
    return (
        <Canvas shadows
            camera={{ position: [20, 3, 5], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}>

            <Suspense>
                <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
                <Computers mobilePhone={isMobile} />
            </Suspense>
            <Preload all />
        </Canvas>
    )
}

export default Skate
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Float, Decal, OrbitControls, Preload, useTexture } from '@react-three/drei'

const Ball = (props) => {
    const [Decal] = useTexture([props.imgUrl])
    return (
        <Float>
            <ambientLight />
        </Float>
    )
}
const BallCanvas = ({ icon }) => {
    return (
        <Canvas
            gl={{ preserveDrawingBuffer: true }}>

            <Suspense  >
                <OrbitControls enableZoom={false} />
                <Ball imgUrl={icon} />
            </Suspense>
            <Preload all />
        </Canvas>
    )
}

export default BallCanvas
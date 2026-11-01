import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, Center, OrbitControls } from '@react-three/drei';

export default function AvatarModel() {
    // Mengambil file dari public/storage/images/model.glb
    const { scene } = useGLTF('/storage/images/model.glb');
    const modelRef = useRef();

    // Membuat model berputar secara perlahan
    useFrame((state, delta) => {
        if (modelRef.current) {
            modelRef.current.rotation.y += delta * 0.5;
        }
    });

    return (
        <>
            <ambientLight intensity={1.5} />
            <directionalLight position={[10, 10, 5]} intensity={2} />
            <pointLight position={[-10, -10, -5]} intensity={1} />
            
            <Center>
                <primitive ref={modelRef} object={scene} scale={1.5} />
            </Center>

            {/* Opsional: Memungkinkan user memutar/geser model pakai mouse */}
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
        </>
    );
}
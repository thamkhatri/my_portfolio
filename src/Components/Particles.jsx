// src/components/Particles.jsx
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Particles() {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            container.clientWidth / container.clientHeight,
            0.1,
            1000
        );
        camera.position.z = 5;

        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(renderer.domElement);

        const particlesCount = 8000;
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particlesCount * 3);

        for (let i = 0; i < particlesCount * 3; i++) {
            positions[i] = (Math.random() - 0.5) * 15;
        }

        geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

        const material = new THREE.PointsMaterial({
            color: 0xffffff,
            size: 0.01,
        });

        const particles = new THREE.Points(geometry, material);
        scene.add(particles);

        const animate = () => {
            requestAnimationFrame(animate);

            particles.rotation.x += 0.0005;
            particles.rotation.y += 0.0005;

            renderer.render(scene, camera);
        };
        animate();

        const handleResize = () => {
            camera.aspect = container.clientWidth / container.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(container.clientWidth, container.clientHeight);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            container.removeChild(renderer.domElement);
            geometry.dispose();
            material.dispose();
        };
    }, []);

    return <div ref={containerRef} className="absolute inset-0 -z-10" />;
}

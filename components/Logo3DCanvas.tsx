"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

interface Logo3DCanvasProps {
  className?: string;
  autoRotate?: boolean;
  interactive?: boolean;
}

export default function Logo3DCanvas({
  className = "w-full h-[180px] sm:h-[240px] md:h-[300px] lg:h-[360px]",
  autoRotate = true,
  interactive = true,
}: Logo3DCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene setup
    const scene = new THREE.Scene();

    const getWidth = () => container.clientWidth || 800;
    const getHeight = () => container.clientHeight || 280;

    // 2. Camera setup
    const camera = new THREE.PerspectiveCamera(
      32,
      getWidth() / getHeight(),
      0.1,
      100
    );
    camera.position.set(0, 0, 8.2);

    // 3. Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(getWidth(), getHeight());
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.4;
    container.appendChild(renderer.domElement);

    // 4. Lighting setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 2.6);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 4.5);
    dirLight1.position.set(6, 9, 8);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xff5533, 3.5);
    dirLight2.position.set(-6, -3, 6);
    scene.add(dirLight2);

    const rimLight = new THREE.DirectionalLight(0xffffff, 3.0);
    rimLight.position.set(0, 6, -6);
    scene.add(rimLight);

    // 5. Model Container
    const modelGroup = new THREE.Group();
    scene.add(modelGroup);

    let rawModelSize = new THREE.Vector3(1, 1, 1);
    let rootModel: THREE.Object3D | null = null;

    const fitModelScale = () => {
      if (!rootModel) return;
      const width = getWidth();
      const height = getHeight();
      const aspect = width / height;

      camera.aspect = aspect;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);

      const vFov = (camera.fov * Math.PI) / 180;
      const visibleHeight = 2 * Math.tan(vFov / 2) * camera.position.z;
      const visibleWidth = visibleHeight * aspect;

      // When static, fill the available container area with nice padding
      const scaleX = (visibleWidth * 0.95) / rawModelSize.x;
      const scaleY = (visibleHeight * 0.92) / rawModelSize.y;
      const targetScale = Math.min(scaleX, scaleY);

      modelGroup.scale.set(targetScale, targetScale, targetScale);
    };

    // Mouse tracking variables (only active if interactive is true)
    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
    };

    if (interactive) {
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
    }

    // 6. Load GLB Model
    const loader = new GLTFLoader();
    loader.load(
      "/models/CORAUXIS_logo.glb",
      (gltf) => {
        const root = gltf.scene;
        rootModel = root;

        // Traverse and enhance materials
        root.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            mesh.castShadow = true;
            mesh.receiveShadow = true;

            const name = (mesh.name || "").toLowerCase();
            const parentName = (mesh.parent?.name || "").toLowerCase();

            // If it's the 'A' body or dot, give it vibrant radiant orange-red
            if (
              name.includes("a_") ||
              parentName.includes("a_") ||
              name.includes("dot") ||
              parentName.includes("dot")
            ) {
              mesh.material = new THREE.MeshStandardMaterial({
                color: new THREE.Color("#FF3B30"),
                roughness: 0.15,
                metalness: 0.2,
                emissive: new THREE.Color("#FF3B30"),
                emissiveIntensity: 0.45,
              });
            } else {
              // High-end glossy chrome white finish for C, O, R, U, X, I, S
              mesh.material = new THREE.MeshStandardMaterial({
                color: new THREE.Color("#FFFFFF"),
                roughness: 0.12,
                metalness: 0.3,
                emissive: new THREE.Color("#222222"),
                emissiveIntensity: 0.2,
              });
            }
          }
        });

        // Center the model at origin
        const box = new THREE.Box3().setFromObject(root);
        const center = box.getCenter(new THREE.Vector3());
        rawModelSize = box.getSize(new THREE.Vector3());

        root.position.x = -center.x;
        root.position.y = -center.y;
        root.position.z = -center.z;

        modelGroup.add(root);
        fitModelScale();
        setIsLoaded(true);
      },
      undefined,
      (error) => {
        console.error("Error loading 3D logo model:", error);
      }
    );

    // 7. Animation loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // NOTE: Moving animations commented out per user request
      /*
      // Smooth floating breathing movement
      if (autoRotate && rootModel) {
        modelGroup.position.y = Math.sin(elapsedTime * 1.6) * 0.1;
      }

      // Smooth cursor parallax damping
      targetRotY = mouseX * 0.38;
      targetRotX = -mouseY * 0.28;

      modelGroup.rotation.y += (targetRotY - modelGroup.rotation.y) * 0.08;
      modelGroup.rotation.x += (targetRotX - modelGroup.rotation.x) * 0.08;
      */

      renderer.render(scene, camera);
    };

    animate();

    // 8. Resize handler
    const handleResize = () => {
      fitModelScale();
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [autoRotate, interactive]);

  return (
    <div className={`relative flex items-center justify-center select-none pointer-events-auto ${className}`}>
      {/* Three.js canvas container */}
      <div ref={containerRef} className="w-full h-full flex items-center justify-center" />

      {/* Fallback image while loading */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center opacity-70 transition-opacity">
          <img
            src="/images/logo.png"
            alt="CORAUXIS"
            className="h-16 sm:h-24 md:h-28 w-auto object-contain select-none"
          />
        </div>
      )}
    </div>
  );
}

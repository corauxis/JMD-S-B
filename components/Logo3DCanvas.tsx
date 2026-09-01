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
    renderer.toneMapping = THREE.LinearToneMapping;
    renderer.toneMappingExposure = 1.0;
    container.appendChild(renderer.domElement);

    // 4. Balanced Studio Lighting setup (prevents wash-out & color shifting)
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.3);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.8);
    keyLight.position.set(4, 7, 8);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xffffff, 0.8);
    fillLight.position.set(-5, -2, 6);
    scene.add(fillLight);

    const topRimLight = new THREE.DirectionalLight(0xffffff, 1.2);
    topRimLight.position.set(0, 8, -4);
    scene.add(topRimLight);

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

            // Precise matching for CORAUXIS 'A' body and dot
            const isOrangeA =
              name.includes("a_body") ||
              name.includes("a_dot") ||
              parentName.includes("a_body") ||
              parentName.includes("a_dot");

            if (isOrangeA) {
              mesh.material = new THREE.MeshStandardMaterial({
                color: new THREE.Color("#FD3A25"),
                roughness: 0.25,
                metalness: 0.05,
                emissive: new THREE.Color("#FD3A25"),
                emissiveIntensity: 0.35,
              });
            } else {
              // Crisp pure white finish for C, O, R, U, X, I, S
              mesh.material = new THREE.MeshStandardMaterial({
                color: new THREE.Color("#FFFFFF"),
                roughness: 0.18,
                metalness: 0.10,
                emissive: new THREE.Color("#222222"),
                emissiveIntensity: 0.15,
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

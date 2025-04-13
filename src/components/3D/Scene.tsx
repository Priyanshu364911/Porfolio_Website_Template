
import { useEffect, useRef } from "react";
import * as THREE from "three";

interface SceneProps {
  className?: string;
}

const Scene = ({ className }: SceneProps) => {
  const mountRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!mountRef.current) return;
    
    // Scene setup
    const scene = new THREE.Scene();
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);
    
    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);
    
    // Create objects
    const geometries = [
      new THREE.IcosahedronGeometry(1, 0),
      new THREE.OctahedronGeometry(0.8, 0),
      new THREE.TetrahedronGeometry(0.6, 0),
      new THREE.SphereGeometry(0.4, 32, 32)
    ];
    
    const materials = [
      new THREE.MeshPhongMaterial({
        color: 0x8B5CF6,
        wireframe: true,
      }),
      new THREE.MeshPhongMaterial({
        color: 0x9F7AEA,
        wireframe: true,
      }),
      new THREE.MeshPhongMaterial({
        color: 0xA78BFA,
        wireframe: true,
      }),
      new THREE.MeshPhongMaterial({
        color: 0xC4B5FD,
        wireframe: false,
        transparent: true,
        opacity: 0.7,
      })
    ];
    
    const meshes: THREE.Mesh[] = [];
    
    geometries.forEach((geometry, i) => {
      const mesh = new THREE.Mesh(geometry, materials[i]);
      mesh.position.x = (Math.random() - 0.5) * 4;
      mesh.position.y = (Math.random() - 0.5) * 4;
      mesh.position.z = (Math.random() - 0.5) * 2;
      scene.add(mesh);
      meshes.push(mesh);
    });
    
    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      
      meshes.forEach((mesh, i) => {
        mesh.rotation.x += 0.003 * (i + 1);
        mesh.rotation.y += 0.004 * (i + 1);
        
        // Make objects float
        mesh.position.y += Math.sin(Date.now() * 0.001 * (i + 1)) * 0.005;
      });
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Handle resize
    const handleResize = () => {
      if (!mountRef.current) return;
      
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    };
    
    window.addEventListener("resize", handleResize);
    
    // Cleanup
    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  return <div ref={mountRef} className={className} />;
};

export default Scene;

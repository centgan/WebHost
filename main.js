import './style.css'
import * as THREE from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(70, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({canvas: document.querySelector("#bg"),});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene, camera);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({color:0xFF6347});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(20, 20, 20);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

// const lightHelper = new THREE.PointLightHelper(pointLight);
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(lightHelper, gridHelper);

const controls = new OrbitControls(camera, renderer.domElement);

function animate(){
    requestAnimationFrame(animate);
    // torus.rotation.x += 0.02;
    // torus.rotation.y += 0.005;
    // torus.rotation.z += 0.01;

    controls.update();

    renderer.render(scene, camera);
}

animate();

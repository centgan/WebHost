import './style.css'
import * as THREE from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

let up = true;
let start = true;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(70, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({canvas: document.querySelector("#bg"),});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.set(0, 0, 32);

renderer.render(scene, camera);

const geometry = new THREE.BoxGeometry(20, 20, 20);
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

// const controls = new OrbitControls(camera, renderer.domElement);

function animate(){
    requestAnimationFrame(animate);
    //rotation of cube
    cube.rotation.x += 0.005;
    cube.rotation.y += 0.005;
    cube.rotation.z += 0.005;

    if(cube.position.x < 12 && start){
        cube.position.x += 0.1;
        start = false;
    }else {
        if(up === true){
            cube.position.y += 0.005;
            cube.scale.x += 0.00005;
            cube.scale.y += 0.00005;
            cube.scale.z += 0.00005;
        } else if (up === false){
            cube.position.y -= 0.005;
            cube.scale.x -= 0.00005;
            cube.scale.y -= 0.00005;
            cube.scale.z -= 0.00005;
        }
        if (cube.position.y < 0){
            up = true;
        } else if (cube.position.y > 2) {
            up = false;
        }
        cube.position.x = -(window.pageYOffset/40) + 12;
    }
    // if (yOff > ){
    //
    // }

    // let oldValue = 0
    // let newValue = 0
    // window.addEventListener('scroll', (e) => {
    //     newValue = window.pageYOffset;
    //     if (oldValue < newValue) {
    //         cube.position.y += 0.05;
    //         cube.position.x += 0.05;
    //     } else if (oldValue > newValue) {
    //         cube.position.y -= 0.005;
    //         cube.position.x -= 0.005;
    //     }
    //     oldValue = newValue;
    // });

    // controls.update();

    renderer.render(scene, camera);
}

animate();
// document.body.onscroll = () => {
//     // animate()
//     console.log(document.getElementById().offsetHeight)
// }

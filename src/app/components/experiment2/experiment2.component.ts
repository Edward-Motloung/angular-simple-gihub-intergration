import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';


@Component({
  selector: 'app-experiment2',
  templateUrl: './experiment2.component.html',
  styleUrls: ['./experiment2.component.scss']
})
export class Experiment2Component implements AfterViewInit {

  @ViewChild('container', { static: true }) container: ElementRef | null = null;
  // @ts-ignore
  scene: THREE.Scene;
  // @ts-ignore
  camera: THREE.PerspectiveCamera;
  // @ts-ignore
  renderer: THREE.WebGLRenderer;
  loader: GLTFLoader | null = null;
  model?: any

  ngAfterViewInit() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(100, this.container?.nativeElement.offsetWidth / this.container?.nativeElement.offsetHeight, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    const controls = new OrbitControls( this.camera, this.renderer.domElement );
    this.camera.position.set(0, 0, 50);
    controls.update();
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.container?.nativeElement.offsetWidth, this.container?.nativeElement.offsetHeight);
    this.container?.nativeElement.appendChild(this.renderer.domElement);

    const color1 = new THREE.Color('rgba(33,37,41,0.5)');
    this.scene.background = color1;

    const gltfLoader = new GLTFLoader();
    gltfLoader.load('../../assets/models/robot_helmet_sketch/scene.gltf', (gltfScene) => {
      gltfScene.scene.position.y = 10;
      gltfScene.scene.scale.set(12,12,12)
      this.scene.add(gltfScene.scene);
      this.model = gltfScene.scene;

      const light = new THREE.DirectionalLight(0xffffff, 1);
      light.position.set(0,0,-1000);
      this.scene.add(light);

      const light2 = new THREE.DirectionalLight('white', .1);
      light2.position.set(250, 0, 1000);
      this.scene.add(light2);

      const light3 = new THREE.DirectionalLight(0xFF7D04, 2);
      light3.position.set(550, 0, -400);
      this.scene.add(light3);

      this.render(this.model);
    })
  }

  render(model: any) {
    requestAnimationFrame(() => {
      this.animateModel(model)
      this.render(model)
    });
    this.renderer?.render(this.scene, this.camera);
  }

  animateModel(model: any) {
    if (model) {
      model.rotation.y += 0.005;
    }
  }

}

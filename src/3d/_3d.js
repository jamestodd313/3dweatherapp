import * as THREE from 'three'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
export class _3d{
    constructor(container){
        this.scene = new THREE.Scene()
        this.camera = new THREE.PerspectiveCamera( 75, container.clientWidth / container.clientHeight, 0.1, 1000 )
        this.renderer = new THREE.WebGLRenderer({alpha: true})
        this.container = container
        this.model = null

        this.init = this.init.bind(this)
        this.startLoop = this.startLoop.bind(this)
        this.clearModels = this.clearModels.bind(this)
        this.renderModel = this.renderModel.bind(this)
        this.removeScene = this.removeScene.bind(this)

    }
    init(){
        this.scene.background = new THREE.Color(0x090B0B);
        this.camera.position.z = 5;
        this.renderer.setSize( this.container.clientWidth, this.container.clientHeight );
        this.renderer.render(this.scene, this.camera)
        this.container.appendChild( this.renderer.domElement );
    }
    startLoop(){
        requestAnimationFrame(this.startLoop);
        this.renderer.render( this.scene, this.camera );
    }
    clearModels(){
        while(this.scene.children.length > 0) this.scene.children.remove(this.scene.children[0])
    }
    renderModel(condition){
        let geo, mesh = undefined
        switch(condition.toLowerCase()){
            case "sunny":
                geo = new THREE.BoxGeometry(1, 1, 1)
                mesh = new THREE.MeshBasicMaterial({color: 0x00ff00})
                let loader = new GLTFLoader()
                loader.load('../../public/a_windy_day/out.glb', (model)=>{
                    this.model = JSON.parse(model.scene)
                    this.scene.add( this.model );
                })
            break
            default:
                geo = new THREE.BoxGeometry(1, 1, 1)
                mesh = new THREE.MeshBasicMaterial({color: 0x00f0f0})
            break
        }
        this.model = new THREE.Mesh(geo, mesh)
        this.scene.add( this.model );
    }
    removeScene(){
        this.container.removeChild(this.renderer.domElement)
    }
}
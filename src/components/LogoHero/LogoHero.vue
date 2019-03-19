<template>
  <div id="logo-hero">
    <p class="log" style="color:#00ffff; position:fixed; top:1%; left:1%;font-size:20px; z-index:10000">{{Math.round(scrollPosition)}}</p>
   <div id="canvas"></div>
   <!-- DIGITAL MKTING -->
    <div class="d-m">
      <h4>Digital Marketing</h4>
      <div class="left"></div>
      <div class="right"></div>
      <div class="dot"></div>
    </div>
    <!-- APP DEVELOPMENT -->
    <div class="app-dev">
     <h4>App Development</h4>
     <div class="left"></div>
     <div class="right"></div>
     <div class="dot"></div>
    </div>
    <!-- WEB DESIGN -->
    <div class="web-dev">
     <h4>Web Design &amp; Development</h4>
     <div class="left"></div>
     <div class="right"></div>
     <div class="dot"></div>
    </div>
     <!-- VIDEOGRAPHY -->
    <div class="videography">
     <h4>VIDEOGRAPHY</h4>
     <div class="left"></div>
     <div class="right"></div>
     <div class="dot"></div>
    </div>


  </div>
  
</template>
<script>
import * as THREE from 'three';
import OBJLoader from '@/three/OBJLoader';
import playAnim from './anim';
export default {
  name:'LogoHero',
  data(){
    return {
      camera:null,
      scene:null,
      renderer:null,
      mesh:null,
      width:null,
      height:null,
      object:null,
      mouseX:null,
      mouseY:null,
      movingLight:null,
      animated:false,
      scrollPosition:0
    }
  },
  mounted(){
    this.initThreeJs();
    this.renderThreeJs();

    this.$store.watch((state)=>{
      return this.$store.state.scrollPosition
    },
    (newVal)=>{
      this.scrollPosition = newVal;
       if(this.scrollPosition >700 && this.scrollPosition <800 && !this.animated){
        //update in store
        playAnim();
        this.animated = true;
        
      }
    })
    
    
  },

  methods:{


    //three js code
    initThreeJs:function (){
      
      var container = document.getElementById('canvas');
      
      this.width = container.clientWidth;
      this.height = container.clientHeight;
      
      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(75,this.width/this.height,0.1,100);
      this.camera.position.z = 50;
      this.renderer = new THREE.WebGLRenderer({antialise:true});
      this.renderer.setSize(window.innerWidth,window.innerHeight);
      this.renderer.setClearColor("#000000");
      container.appendChild(this.renderer.domElement);
      this.canvas = this.renderer.domElement;

      //listening for screen resize
      window.addEventListener('resize',()=>{
      this.width = container.clientWidth;
      this.height = container.clientHeight;
      this.renderer.setSize(this.width,this.height);
      this.camera.aspect = this.width/this.height;
      this.camera.updateProjectionMatrix();
       
      })
      var manager = new THREE.LoadingManager();
      var loader = new OBJLoader(manager);
      loader.load('model.obj',(model)=>{
        this.object = model;
        this.scene.add(this.object);
      })
          
     //spot light
      // LIGHTS
      var spotLight = new THREE.SpotLight( 0x00ffff, 7.04 );
      spotLight.position.set( -0.759, 95, 50.800 );
      spotLight.castShadow = true;
      spotLight.distance = 124;
      spotLight.decay = 1.00;
      spotLight.angle = 0.3;
      this.scene.add( spotLight );
      var spotLight2 = new THREE.SpotLight(0x00ffff,3);
      spotLight2.distance = 200;
      spotLight2.angle = 0.174;
      spotLight2.position.set(17,5,187);
      this.movingLight = spotLight2;
      this.scene.add(this.movingLight);


      //onMouseMove
      container.addEventListener( 'mousemove',(event)=>{
         this.mouseX = ( event.clientX - this.width/2 ) / 2;
        this.mouseY = ( event.clientY - this.height/2 ) / 2;
      }, false );
     
    },
    
    //animate
    renderThreeJs: function() {
      requestAnimationFrame( this.renderThreeJs );
      this.mouseX ? 
      this.object.rotation.y = this.mouseX*0.001:""
      this.camera.lookAt(this.scene.position);
      this.renderer.render( this.scene, this.camera);
    }
  },
  destroyed(){
  

  }

}
</script>

<style lang="scss" scopped>
@import '../../styles/components/LogoHero';

#logo-hero{
  background-color: #000;
  text-align: center;
  position: relative;
  overflow: hidden;
  width: 100%;
}
#canvas{
  width: 100%;
  height: 100vh;
  display: block;
}

</style>
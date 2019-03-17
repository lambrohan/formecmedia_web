<template>
  <div id="logo-hero">
   <div id="canvas"></div>
   <div class="d-m">
     <h4>Digital Marketing</h4>
     <div class="left"></div>
     <div class="right"></div>
     <div class="dot"></div>
   </div>
  </div>
  
</template>
<script>
import * as THREE from 'three';
import OBJLoader from '../three/OBJLoader';
import anime from 'animejs';
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
    }
  },
  mounted(){
    this.initThreeJs();
    this.renderThreeJs();
    this.initAnimeJS();
    
    
  },
  methods:{

    initAnimeJS:function(){
      var dmTimeline = anime.timeline({
        autoplay:true,
        easing:'linear',
      });

      dmTimeline.add({
        targets:'.d-m .dot',
        scale:1,
        duration:200
      },'+=200').add({
        targets:'.d-m .right',
        width:'20%',
        duration:200
      }).add({
        targets:'.d-m .right',
        height:'100%',
        duration:200,
      }).add({
        targets:'.d-m .left',
        width:'80%',
        duration:600,
        easing:'easeOutExpo'

      }).add({
        targets:'.d-m h4',
        opacity:1,
        duration:10
      },).add({
        targets:'.d-m h4',
        opacity:0,
        duration:100
      },).add({
        targets:'.d-m h4',
        opacity:1,
        duration:10
      },)



    },

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
  }

}
</script>

<style lang="scss">
@import '../styles/components/LogoHero';

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
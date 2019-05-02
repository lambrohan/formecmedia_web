<template>
  <div id="app-container">
    <PageIntro bg="#21B939" title="App Development"/>
    <Process v-bind:processList="processList"/>
    <AppShowcase/>
    <ToolsSlider v-bind:slides="slides"/>
    <Footer/>
    
  </div>
</template>

<script>
import PageIntro from '@/components/PageIntro';
import Process from '@/components/process/Process';
import AppShowcase from '@/components/AppShowcase';
import ToolsSlider from '@/components/ToolsSlider';
import Footer from '@/components/Footer.vue';
export default {
  name:'VideoView',
  components:{
    PageIntro,
    Process,
    AppShowcase,
    ToolsSlider,
    Footer
  },data(){
    return{
       processList:[
        {
          title:"UNDERSTANDING THE PROJECT SCOPE",
          body : "At the very begining we meet personaly and discuss the scope of project. During this phase we finalize the features your app needs."
        },
        {
          title:"MOCKUP DESIGN",
          body : "When all features are finalized we begin work on designing mockup. Taking your brand design in consideration and according UX guidlines we will show you how your app is going to look like and if you loved it, we could go to next step."
        },
        {
          title:"DEVELOPMENT OF APP",
          body :"Now that you finalized the mockup we can start turing those layouts into code and implement the features you required! We will interact with you in timely manner for status of project and queries also.",
        },
         {
          title:"TESTING AND OPTIMIZING",
          body : "Yay! Your app is almost ready to be released after we do the testing. During this phase we monitor the performance of app and see if there are some tweaks we can apply to make it even better.",
          
        },
         {
          title:"DEPLOY",
          body : "Its about time we hit the Play Store! In this phase we work out Terms & Conditions for users and other documentation for the application and roll out to production!",
          last:true
        },     
      ],
      slides:[
        {
          img:require("../assets/web/figma.jpg"),
          name:'Figma'
        },
        {
          img:require('../assets/app/studio.png'),
          name:'Android Studio'
        },
        {
          img:'https://betanews.com/wp-content/uploads/2018/06/google-cloud-logo.jpg',
          name:"Google Cloud"
        },
        {
          img:'https://tutorialedge.net/images/node.png',
          name:'Node'
        },
        {
          img:'https://cdn-images-1.medium.com/max/1200/0*CPTNvq87xG-sUGdx.png',
          name:'Firebase'
        },
        {
          img:'https://i2.wp.com/gluonhq.com/wp-content/uploads/2018/05/heroku-logotype-vertical-purple.png?fit=576%2C684&ssl=1',
          name:'Heroku'
        },
        {
          img:'https://miro.medium.com/max/630/1*fVBL9mtLJmHIH6YpU7WvHQ.png',
          name:'Postman'
        },
        {
          img:'https://cdn-images-1.medium.com/max/1200/1*49DDRZhUWvVnH-QNHuSUSw.png',
          name:'GraphQL'
        },
        
      ]
      
    }
  },mounted(){
    this.$store.commit('setMenuColor','color-app');
    window.scrollTo(0,0);
  }
  }
</script>

<style lang="scss">
#app-container{
  width: 100%;
  position: relative;
  background: #000;
}
</style>

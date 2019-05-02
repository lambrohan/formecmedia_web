<template>
  <div id="web-container">
    <PageIntro bg="#ffc6bf" title="Web Design and Development"/>
    <Process v-bind:processList="processList"/>
    <ProjectCase/>
    <ToolsSlider v-bind:slides="slides"/>
    <Footer/>

  </div>
</template>

<script>
import PageIntro from '@/components/PageIntro';
import Process from '@/components/process/Process';
import ProjectCase from '@/components/ProjectCase';
import ToolsSlider from '@/components/ToolsSlider';
import Footer from '@/components/Footer';
export default {
  name:'VideoView',
  components:{
    PageIntro,
    Process,
    ProjectCase,
    ToolsSlider,
    Footer
  },data(){
    return{
       processList:[
        {
          title:"CREATING MOCK-UP",
          body : "The first step for web designing is understanding your business and making intuitive layouts tailered to your brand."
        },
        {
          title:"DEVELOPMENT STAGE",
          body : "After finalizing the mock-up, the next stage is coding the actual website pages accordingly. During this stage you will be prompted for your inputs and will be kept up-to-date with the progress."

        },
        {
          title:"TESTING & OPTIMIZATION",
          body : "Testing all the components for any bugs and optimizing the site for lightening fast load time.",
        },
         {
          title:"DEPLOYING",
          body : `The final stage after enabling google search to index your site & Setting up SSL, is deploying your site. CONGRATULATIONS! Your site is live now.`,
          last:true
        },    
     
      ],
      slides:[
        {
          img:require("../assets/web/figma.jpg"),
          name:'Figma'
        },
        {
          img:"https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
          name:'React'
        },
        {
          img:'https://vuejs.org/images/logo.png',
          name:"Vue.js"
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
        }
      ]
    }
  },mounted(){
    this.$store.commit('setMenuColor','color-web');
    window.scrollTo(0,0);
  }
  }
</script>

<style lang="scss">
#web-container{
  width: 100%;
  position: relative;
  background: #000;
}
</style>

<template>
  <div id="home">
  <HomeIntro/> 
  <LogoHero/>
  <WhyUs/>
  <CaseStudy/>
  <ClientGallery/>
  <Team/>
  <Footer/>
    
  </div>
</template>

<script>
import HomeIntro from '@/components/HomeIntro.vue'
import LogoHero from '@/components/LogoHero/LogoHero.vue'
import ClientGallery from '@/components/gallery/ClientGallery.vue'
import Footer from '@/components/Footer.vue'
import CaseStudy from '@/components/case-study/CaseStudyMod.vue'
import WhyUs from '@/components/why-us.vue'
import Team from '@/components/Team.vue'

export default {
 name:"Home",
 components:{
   HomeIntro,
   LogoHero,
   WhyUs,
   CaseStudy,
   ClientGallery,
   Team,
   Footer
 },
 mounted(){
   this.$store.commit('setMenuColor','color-home');
   window.scrollTo(0,0);
 }
}
</script>
<style lang="scss" scopped>
#home{
  position: relative;
  background: #000;
  overflow: hidden;
  .texture{
    background: url('../assets/bgtexture.webp');
    width: 100%;
    height: 1000%;
    position: absolute;
    opacity: 0.1;
  }
}

</style>

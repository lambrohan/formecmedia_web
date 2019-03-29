<template>
  <div id="home">
  <HomeIntro/> 
  <LogoHero/>
  <CaseStudy/>
  <ClientGallery/>
  <Footer/>
    
  </div>
</template>

<script>
import HomeIntro from '@/components/HomeIntro.vue';
import LogoHero from '@/components/LogoHero/LogoHero.vue';
import ClientGallery from '@/components/gallery/ClientGallery.vue';
import Footer from '@/components/Footer.vue';
import CaseStudy from '@/components/case-study/CaseStudy.vue';

export default {
 name:"Home",
 components:{
   HomeIntro,
   LogoHero,
   CaseStudy,
   ClientGallery,
   Footer
 },
 mounted(){
   this.$store.commit('setMenuColor','color-home');
 }
}
</script>
<style lang="scss" scopped>
#home{
  position: relative;
  background: #000;
}

</style>

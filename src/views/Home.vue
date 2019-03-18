<template>
  <div id="home">
  <HomeIntro/> 
  <LogoHero/>
  <ClientGallery/>
  
    
  </div>
</template>

<script>
import HomeIntro from '@/components/HomeIntro.vue';
import LogoHero from '@/components/LogoHero/LogoHero.vue';
import ClientGallery from '@/components/gallery/ClientGallery.vue';

export default {
 name:"Home",
 components:{
   HomeIntro,
   LogoHero,
   ClientGallery
 }
}
</script>
<style lang="scss">
#home{
  position: relative;
}

</style>

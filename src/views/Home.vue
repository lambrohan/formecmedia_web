<template>
  <div id="home">
  <HomeIntro/> 
  <LogoHero/>
    
  </div>
</template>

<script>
import HomeIntro from '@/components/HomeIntro.vue';
import LogoHero from '@/components/LogoHero/LogoHero.vue';
export default {
 name:"Home",
 components:{
   HomeIntro,
   LogoHero
 }
}
</script>
<style lang="scss">
#home{
  position: relative;
}

</style>

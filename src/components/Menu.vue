<template>
  <div id="container">
    <div class="bg"></div>

  </div>
</template>
<script>
export default {
  name:"Menu"
  
}
</script>
<style lang="scss" scoped>
#container{
  width:100%;
  height: 100vh;
  position: absolute;

  .bg{
    width: 100%;
    height:100%;
    top:-100%;
    left: 0;
    position:fixed;
    background: #00ffff;
    z-index: 100;
  }
}
</style>



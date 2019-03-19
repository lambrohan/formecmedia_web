<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name:"MyApp",
  data(){
    return{
      scrollPosition:0
    }
  },
  mounted(){
    this.setupListener();
  },
  methods:{
    setupListener:function(){
    return window.addEventListener('scroll',()=>{
      this.scrollPosition = window.scrollY;
       //update in store
        this.$store.commit('updateScrollPosition',this.scrollPosition);
    })
    }
  }
  
}
</script>


<style lang="scss">

body{
  background: #000;
}

*{
  box-sizing: border-box;
}
  ::-webkit-scrollbar {
  width: 16px;
  background-color: #00ffff;
}
  ::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.8);
  
  }
</style>

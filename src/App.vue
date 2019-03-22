<template>
  <div id="app">
    <MenuView/>
    <router-view/>
  </div>
</template>

<script>
import MenuView from '@/components/Menu.vue'
export default {
  name:"MyApp",
  components:{
    MenuView
  },
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
  width: 8px;
  background-color: #00ffff;
}
  ::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.8);  
}


  #app{
    position: relative;
    width:100%;
  }
</style>

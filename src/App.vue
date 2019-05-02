<template>
  <div id="app">
    <MenuView/>
    <router-view/>
    <FloatingLogoPanel/>
    <Modal v-if="modalShown" v-bind:modalShown="modalShown"/>
  </div>
</template>

<script>
import MenuView from '@/components/Menu.vue'
import FloatingLogoPanel from '@/components/FloatingLogoPanel';
import Modal from '@/components/QuoteModal';
export default {
  name:"MyApp",
  components:{
    MenuView,
    FloatingLogoPanel,
    Modal
  },
  data(){
    return{
      modalShown:false
    }
  },
  mounted(){
    this.$store.watch(() => this.$store.getters.getModalState, res => {
    this.modalShown = res;
    },{immediate: true})
  },
  methods:{

  },
  
  
}
</script>


<style lang="scss">

.router-link-active{
  text-decoration: none;
  
}
a{
  text-decoration: none;
  color: inherit;
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

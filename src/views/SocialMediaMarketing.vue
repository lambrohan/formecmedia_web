<template>
  <div id="smm">
    <div class="intro">
      <div class="overlay"></div>
      <h4>Formec Media</h4>
      <h1>SOCIAL MEDIA MARKETING</h1>
    </div>
    <ProcessComponent v-bind:processList="processList" ></ProcessComponent>
  </div>
</template>

<script>
import ProcessComponent from '@/components/process/Process.vue';
export default {
  name:'SocailMediaMarketing',
  components:{
    ProcessComponent
  },
  data(){
    return{
      processList:[
        {
          title:"Heading one",
          body : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ea in perferendis maxime perspiciatis est quis laudantium quam ipsam modi!"
        },
        {
          title:"Heading two",
          body : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ea in perferendis maxime perspiciatis est quis laudantium quam ipsam modi!"
        },
        {
          title:"Heading three",
          body : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ea in perferendis maxime perspiciatis est quis laudantium quam ipsam modi!",
          last:true
        },
       
       
     
      ]
    }
  },
  mounted(){
    this.$store.commit('setMenuColor','color-smm');
  }
}
</script>

<style lang="scss" scoped>
h4,h1{
  margin:0;
  padding:0;
}
#smm{
  position: relative;
  width: 100%;
  background: #000;
}

@import '../styles/SMM';


</style>

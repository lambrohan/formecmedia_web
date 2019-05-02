<template>
   <div id="page-intro">
      <div class="overlay" :style="{'background':''+ bg}"></div>
      <h4>Formec Media</h4>
      <h1>{{title}}</h1>
    </div>
</template>

<script>
export default {
  name:'PageIntro',
  props:['bg','title']

}
</script>

<style lang="scss" >
#page-intro{
  width:100%;
  height:100vh;
  background-image:url('https://j.gifs.com/6XWP4V.gif');
  background-size: cover;
  background-position: center;
  position: relative;

  .overlay{
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.85;
  }

  h4{
    position: absolute;
    top:4rem;
    left: 50%;
    transform: translateX(-50%);
    font-style: normal;
    font-weight: 900;
    line-height: 15px;
    font-size: 14px;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.69em;
    text-indent: 0.69em;
    color: white;
  }

  h1{
    width: 686px;
    position: absolute;
    font-weight: 900;
    font-size: 96px;
    text-transform: uppercase;
    text-align: center;
    color: #fff;
    line-height: 101px;
    top:20%;
    left:50%;
    transform: translate(-50%,0);
    padding:0;
    margin: 0;
  }
}
</style>

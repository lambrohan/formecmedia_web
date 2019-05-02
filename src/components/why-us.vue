<template>
  <div id="wus">
    <img class="precursor-shape small" v-parallax="0.4" src="../assets/precursor-shape.png">
    <img class="precursor-shape big" v-parallax="0.2" src="../assets/precursor-shape.png">
    <h2>Why Us</h2>
    <hr>
    <div class="content">
      <p>Just give our digital marketers a buzz and get cracking crafting a campaign that will rocket your brand recall into orbit. Formec Media, a professional digital marketing company in Kolhapur, that takes care of all the digital marketing solutions for your brand, be it designs, content or social media strategy. </p>
      <p>Our team is fueled with thirst of knowledge. One thing that differentiates us from rest of the digital marketing companies is that we have the expertise to craft a listening brand right from the scratch. A digital marketing agency in Kolhapur which is laser-focused on solving the most complex digital problems with ease.</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scopped>
  #wus{
    width: 100%;
    z-index: 20;
    position: relative;
    margin-top: -100px;
    padding-bottom: 165px;
    overflow: hidden;

    .small{
      position: absolute;
      width: 90px;
      right: 10%;
      transform: rotate(180deg);
      
    }
    .big{
      width: 250px;
      position: absolute;
      right:60%;
      top:0;
    }

    h2{
      color: white;
      text-align: center;
      font-weight: 800;
      font-size: 24px;
      text-align: center;
      letter-spacing: 0.31em;
      text-transform: uppercase;
      z-index: 20;
    }
    hr{
      width: 40px;
    }

    .content{
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      color: aqua;
      box-sizing: border-box;
      padding:0 151px;
      
      p{
        max-width: 518px;
        font-size: 13px;
        line-height: 21px;
        text-align: justify;
        letter-spacing: 0.08em;
      }
    }

  }
</style>

<template>
  <div id="home-intro">
    <div class="gradient"></div>
    <h4>Formec Media</h4>
    <h1>A <br> Digital Marketing Company</h1>

  </div>
</template>

<script>
export default {
  name:"HomeIntro",
  
}
</script>

<style lang="scss" scoped>
#home-intro{
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url('../assets/saturn.jpg');
  background-size: cover;
  background-position: 0% 50%;

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
    color: black;
  }
  h1{
    width: 686px;
    position: absolute;
    font-family: Poppins;
    font-style: normal;
    font-weight: 900;
    line-height: 101px;
    font-size: 96px;
    text-align: center;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    text-align: center;
    top:10%;
    left:50%;
    transform: translateX(-50%);
  }
}
.gradient{
  position: absolute;
  width: 100%;
  height: 100vh;
  background: linear-gradient(180deg, rgba(0, 255, 255, 0.9) 0%,
    rgba(0, 255, 255, 0.9) 34.45%, rgba(0, 255, 255, 0.225) 72.12%,
    rgba(0, 255, 255, 0) 93.88%);
}

</style>



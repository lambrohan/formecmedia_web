<template>
  <div id="app">
    <router-view/>
  </div>
</template>

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

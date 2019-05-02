<template>
  <div id="modal">
    <div class="popup">
      <p class="close" @click="toggleModal">X</p>
      <form>
        <label for="select">Select Service</label>
        <select id="select">
          <option v-for="(option,index) in options" :key="option" :value="index">{{option}}</option>
        </select>
        <label for="query">Query</label>
        <textarea id="query" cols="20" rows="8" placeholder="Enter Query"></textarea>
        <label for="email">Email</label>
        <input type="email" placeholder="youremail@email.com">
        <button @click="handleSubmit" >Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name:'QuoteModal',
  props:['modalShown'],
  data(){
    return{
      options:[
        "Social Media Marketing",
        "Promotional Video",
        "Web Design & Development",
        "Mobile App Development"
      ]
    }
  },
  methods:{
    toggleModal:function(){
      this.$store.commit('toggleModal',false);
    },
    handleSubmit:function(){
      event.preventDefault();
      this.toggleModal();
    }
  }
}
</script>

<style lang="scss" scopped>
#modal{
  width: 100%;
  height: 100vh;
  position: fixed;
  top:0;
  left:0;
  z-index: 1000;
  background: #00ffff59;

  .popup{
    position: absolute;
    width: 60%;
    height: 500px;
    background: rgb(255, 255, 255);
    left:50%;
    top:50%;
    transform: translate(-50%, -50%);
    box-shadow: 2px 2px 16px rgba($color: #052b2b, $alpha: 0.7);


    .close{
      color: black;
      font-size: 20px;
      position: absolute;
      right:16px;
      top:10px;
      margin:0;
      padding:0;
      cursor: pointer;
      transition: 0.3s ease all;
    }

    .close:hover{
      color: #19adad;
    }

    button{
      padding:12px 20px;
      background: #00ffff;
      border: none;
      color: rgb(58, 58, 58);
      font-weight: bold;
      font-size: 16px;
    }

    form{
      width: 100%;
      display: flex;
      flex-direction: column;
      padding: 32px;
      font-family: 'Poppins';

      label{
        margin-top: 12px;
        margin-bottom: 2px;
        font-size: 12px;
      }

      select{
        width: 100%;
        padding: 8px;
        font-size: 16px;
        overflow: hidden;
        text-align: center;
        background: #9ff1f1;
        border: none;

        option{
          padding: 16px;
          display: block;
        }
        
      }

      textarea{
        padding: 8px;
        font-family: 'Poppins'
      }

      input{
        padding: 8px;
        font-size: 16px;
        margin-bottom: 16px;
      }
    }
  }
}

</style>

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    clients:[
     {
       name:"Mahendra Jewellers",
       icon:'./clients/mahendra.png'
    },
    {
      name:"Kisan Tyres",
      icon:'./clients/kisan.png'
    },
    
    {
      name:"Hongkong Resto Kolhapur",
      icon:'./clients/hongkong.png'
    },
    {
      name:"GNJ & Sons",
      icon:'./clients/gnj.png'
    },
    {
      name:"Tanatan Kolhapur",
      icon:'./clients/tanatan.png'
    },
    {
      name:"Rajakaka Electronics",
      icon:'./clients/rajakaka.png'
    },
    {
      name:"Bellpepper Resto",
      icon:'./clients/bellpepper.png'
    },
    {
      name:"Abhay Foods",
      icon:'./clients/abhay.png'
    },
    {
      name:"Exotico",
      icon:'./clients/exotico.png'
    },

    
    
  ],
    menuColor:'',
    modalShown:false
  },
  mutations: {
    updateScrollPosition:(state,position) => {
      state.scrollPosition = position;
    },
    setMenuColor: (state,color) => {
      state.menuColor = color;
    },
    toggleModal:(state,val)=>{
      state.modalShown = val;
    }

  },
  actions: {

  },
  getters:{
    getClientList: state => {
      return state.clients;
    },
    getScrollPosition: state => {
      return state.scrollPosition;
    },
    getMenuColor : state => {
      return state.menuColor;
    },
    getModalState : state => {
      return state.modalShown
    }
  }
})

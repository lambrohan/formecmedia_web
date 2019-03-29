import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    clients:[
      {name:"Mahendra Jewellers",icon:"https://images-na.ssl-images-amazon.com/images/I/51zRqKn8LnL._SX679_.jpg",link:"https://www.mahendrajewellers.com/"},
      {name:"",icon:""},
      {name:"Bellpepper Resto",icon:"https://images-na.ssl-images-amazon.com/images/I/51zRqKn8LnL._SX679_.jpg",link:""},
      {name:"",icon:""},
      {name:"Kisan Tyres",icon:"https://images-na.ssl-images-amazon.com/images/I/51zRqKn8LnL._SX679_.jpg",link:""},
      {name:"",icon:""},
      {name:"Yellow Chill Resto",icon:"https://images-na.ssl-images-amazon.com/images/I/51zRqKn8LnL._SX679_.jpg",link:""},
      {name:"",icon:""},
      {name:"Madhuri Bakery",icon:"https://images-na.ssl-images-amazon.com/images/I/51zRqKn8LnL._SX679_.jpg",link:""},
      {name:"",icon:""},
      {name:"Kiran Electricals",icon:"https://images-na.ssl-images-amazon.com/images/I/51zRqKn8LnL._SX679_.jpg",link:""},
      {name:"",icon:""},
      {name:"Hongkong Resto",icon:"https://images-na.ssl-images-amazon.com/images/I/51zRqKn8LnL._SX679_.jpg",link:""},
      {name:"",icon:""},
      {name:"GNJ & Sons",icon:"https://images-na.ssl-images-amazon.com/images/I/51zRqKn8LnL._SX679_.jpg",link:""},
      {name:"",icon:""},
      {name:"Tanatan Resto",icon:"https://images-na.ssl-images-amazon.com/images/I/51zRqKn8LnL._SX679_.jpg",link:""},
      {name:"",icon:""},
      {name:"Kajave Furniture",icon:"https://images-na.ssl-images-amazon.com/images/I/51zRqKn8LnL._SX679_.jpg",link:""},
      {name:"",icon:""},
      {name:"Unique Automobiles",icon:"",link:""},
      {name:"",icon:""},
      {name:"Dressland",icon:"",link:""},
      {name:"",icon:""},
      {name:"Rajakaka",icon:"",link:""},
      {name:"",icon:""},
      {name:"Abhay Foods",icon:"",link:""},
      {name:"",icon:""},
      {name:"Grace Plasto",icon:"",link:""},
    ],
    scrollPosition:0,
    menuColor:''
  },
  mutations: {
    updateScrollPosition:(state,position) => {
      state.scrollPosition = position;
    },
    setMenuColor: (state,color) => {
      state.menuColor = color;
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
    }
  }
})

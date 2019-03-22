import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    clients:[
      {name:"Mahendra Jewellers",icon:"https://images-na.ssl-images-amazon.com/images/I/51zRqKn8LnL._SX679_.jpg",link:"https://www.mahendrajewellers.com/"},
      {name:"Bellpepper Resto",icon:"https://images-na.ssl-images-amazon.com/images/I/51zRqKn8LnL._SX679_.jpg",link:""},
      {name:"Kisan Tyres",icon:"https://images-na.ssl-images-amazon.com/images/I/51zRqKn8LnL._SX679_.jpg",link:""},
      {name:"Yellow Chill Resto",icon:"https://images-na.ssl-images-amazon.com/images/I/51zRqKn8LnL._SX679_.jpg",link:""},
      {name:"Madhuri Bakery",icon:"https://images-na.ssl-images-amazon.com/images/I/51zRqKn8LnL._SX679_.jpg",link:""},
      {name:"Kiran Electricals",icon:"https://images-na.ssl-images-amazon.com/images/I/51zRqKn8LnL._SX679_.jpg",link:""},
      {name:"Hongkong Resto",icon:"https://images-na.ssl-images-amazon.com/images/I/51zRqKn8LnL._SX679_.jpg",link:""},
      {name:"GNJ & Sons",icon:"https://images-na.ssl-images-amazon.com/images/I/51zRqKn8LnL._SX679_.jpg",link:""},
      {name:"Tanatan Resto",icon:"https://images-na.ssl-images-amazon.com/images/I/51zRqKn8LnL._SX679_.jpg",link:""},
      {name:"Kajave Furniture",icon:"https://images-na.ssl-images-amazon.com/images/I/51zRqKn8LnL._SX679_.jpg",link:""},
      {name:"Unique Automobiles",icon:"",link:""},
      {name:"Dressland",icon:"",link:""},
      {name:"Rajakaka",icon:"",link:""},
      {name:"Abhay Foods",icon:"",link:""},
      {name:"Grace Plasto",icon:"",link:""}
    ],
    scrollPosition:0,
  },
  mutations: {
    updateScrollPosition:(state,position) => {
      state.scrollPosition = position;
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
    }
  }
})

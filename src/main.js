import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueParallaxJs from 'vue-parallax-js'

Vue.directive('vpshow', {
  inViewport (el) {
    var rect = el.getBoundingClientRect()
    return !(rect.bottom < 0 || rect.right < 0 || 
             rect.left > window.innerWidth ||
             rect.top > window.innerHeight)
  },

  bind(el, binding) {
    el.classList.add('before-enter')
    el.$onScroll = function() {
      if (binding.def.inViewport(el)) {
        el.classList.add('enter')
        el.classList.remove('before-enter')
        binding.def.unbind(el, binding)        
      }
    }
    document.addEventListener('scroll', el.$onScroll)
  },

  inserted(el, binding) {
    el.$onScroll()  
  },

  unbind(el, binding) {    
    document.removeEventListener('scroll', el.$onScroll)
    delete el.$onScroll
  }  
})

Vue.config.productionTip = false
Vue.use(VueParallaxJs);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

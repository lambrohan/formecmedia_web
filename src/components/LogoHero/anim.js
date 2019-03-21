import anime from 'animejs';

function playAnimations (){

  //  DIGITAL MARKETING TIMELINE
  var dmTimeline = anime.timeline({
    autoplay:false,
    easing:'linear',
    update:function(anim){
      var progress = Math.round(anim.progress);
      if(progress > 31){
        appDevTimeline.play();
      }else if(progress > 11){
        webDevTimeline.play();
      }
    }
  });
  
  dmTimeline.add({
    targets:'.d-m .dot',
    scale:1,
    opacity:1,
    duration:200,
  },'+=200').add({
    targets:'.d-m .right',
    width:'10%',
    duration:200,
    opacity:1
  }).add({
    targets:'.d-m .right',
    height:'100%',
    duration:200,
  }).add({
    targets:'.d-m .left',
    width:'90%',
    duration:600,
    easing:'easeOutExpo'
  }).add({
    targets:'.d-m h4',
    opacity:1,
    duration:10
  },'-=300').add({
    targets:'.d-m h4',
    opacity:0,
    duration:10
  },'-=250').add({
    targets:'.d-m h4',
    opacity:1,
    duration:10
  },'-=200');

  // APP DEV TIMELINE
  var appDevTimeline = anime.timeline({
    autoplay:false,
    easing:'linear',
    
  });
  appDevTimeline.add({
    targets:'.app-dev .dot',
    scale:1,
    opacity:1,
    duration:200
  },'+=200').add({
    targets:'.app-dev .right',
    width:'10%',
    opacity:1,
    duration:200
  }).add({
    targets:'.app-dev .right',
    height:'100%',
    duration:200,
  }).add({
    targets:'.app-dev .left',
    width:'90%',
    duration:600,
    easing:'easeOutExpo'
  }).add({
    targets:'.app-dev h4',
    opacity:1,
    duration:10
  },'-=300').add({
    targets:'.app-dev h4',
    opacity:0,
    duration:10
  },'-=250').add({
    targets:'.app-dev h4',
    opacity:1,
    duration:10
  },'-=200');

  // WEB DEV TIMELINE
  var webDevTimeline = anime.timeline({
    autoplay:false,
    easing:'linear',
    update:function(anim){
      if(anim.progress > 40){
        videoTimeline.play();
      }
    }
    
  });
  webDevTimeline.add({
    targets:'.web-dev .dot',
    scale:1,
    opacity:1,
    duration:200
  },'+=200').add({
    targets:'.web-dev .left',
    width:'15%',
    duration:200,
  }).add({
    targets:'.web-dev .right',
    height:'100%',
    opacity:1,
    duration:200,
  }).add({
    targets:'.web-dev .right',
    width:'85%',
    duration:600,
    easing:'easeOutExpo'
  }).add({
    targets:'.web-dev h4',
    opacity:1,
    width:'500px',
    duration:10
  },'-=300').add({
    targets:'.web-dev h4',
    opacity:0,
    duration:10
  },'-=250').add({
    targets:'.web-dev h4',
    opacity:1,
    duration:10
  },'-=200');

   // VIDEOGRAPHY TIMELINE
   var videoTimeline = anime.timeline({
    autoplay:false,
    easing:'linear',
    
  });
  videoTimeline.add({
    targets:'.videography .dot',
    scale:1,
    opacity:1,
    duration:200
  },'+=200').add({
    targets:'.videography .left',
    width:'8%',
    duration:200
  }).add({
    targets:'.videography .right',
    height:'100%',
    opacity:1,
    duration:200,
  }).add({
    targets:'.videography .right',
    width:'92%',
    duration:600,
    easing:'easeOutExpo'
  }).add({
    targets:'.videography h4',
    opacity:1,
    duration:10
  },'-=300').add({
    targets:'.videography h4',
    opacity:0,
    duration:10
  },'-=250').add({
    targets:'.videography h4',
    opacity:1,
    duration:10
  },'-=200');






  dmTimeline.restart();
  
}

export default playAnimations;
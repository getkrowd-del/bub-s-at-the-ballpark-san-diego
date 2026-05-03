// SLIDESHOW
(function(){
  var slides=document.querySelectorAll('.hs-slide');
  var dotsC=document.getElementById('hsDots');
  var pauseBtn=document.getElementById('hsPause');
  var cur=0,playing=true,timer=null;
  slides.forEach(function(_,i){
    var d=document.createElement('button');
    d.className='hs-dot'+(i===0?' active':'');
    d.addEventListener('click',function(){goTo(i);reset();});
    dotsC.appendChild(d);
  });
  function goTo(n){
    slides[cur].classList.remove('active');
    dotsC.children[cur].classList.remove('active');
    cur=(n+slides.length)%slides.length;
    slides[cur].classList.add('active');
    dotsC.children[cur].classList.add('active');
  }
  function startAuto(){stopAuto();timer=setInterval(function(){goTo(cur+1);},4000);}
  function stopAuto(){if(timer){clearInterval(timer);timer=null;}}
  function reset(){if(playing){stopAuto();startAuto();}}
  document.getElementById('hsNext').addEventListener('click',function(){goTo(cur+1);reset();});
  document.getElementById('hsPrev').addEventListener('click',function(){goTo(cur-1);reset();});
  pauseBtn.addEventListener('click',function(){
    if(playing){stopAuto();playing=false;pauseBtn.innerHTML='&#9654;';}
    else{startAuto();playing=true;pauseBtn.innerHTML='&#9646;&#9646;';}
  });
  startAuto();
})();

// CHAT
var _bcOpen=false;
function bcToggle(){_bcOpen=!_bcOpen;document.getElementById('bc-modal').style.display=_bcOpen?'block':'none';}
function bcClose(){_bcOpen=false;document.getElementById('bc-modal').style.display='none';}
setTimeout(function(){var b=document.getElementById('bc-bubble');if(b&&!_bcOpen)b.style.display='block';},3000);
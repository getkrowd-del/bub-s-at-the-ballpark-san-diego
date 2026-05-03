var HH=[
  {day:"Monday",title:"Happy Hour Draft Specials",desc:"$1.00 off all draft beers. Enjoy a cold one for less every Monday during Happy Hour.",img:"https://krowdimg.b-cdn.net/1062_20250903120425.png"},
  {day:"Tuesday",title:"$5 Well Drinks",desc:"All well liquor + a mixer for just $5.00. Your favorite cocktails at an unbeatable price.",img:"https://krowdimg.b-cdn.net/1062_20250903120713.png"},
  {day:"Thursday",title:"$5 Sidecars",desc:"Buy a draft beer and get a sidecar for $5. The perfect Thursday night combo.",img:"https://krowdimg.b-cdn.net/1062_20250903121020.png"},
  {day:"Friday",title:"½ Off Red Baskets",desc:"If it comes in a red basket — rings, fries & tots — it's half off. Friday never tasted so good.",img:"https://krowdimg.b-cdn.net/1062_20250903121233.png"}
];
var g=document.getElementById('hhGrid');
HH.forEach(function(h){
  g.innerHTML+='<div class="hh-card"><div class="hh-card-img"><img src="'+h.img+'" alt="'+h.title+'" loading="lazy"><span class="day-badge">'+h.day+'</span></div><div class="hh-card-body"><h3>'+h.title+'</h3><p>'+h.desc+'</p><div class="hh-time">🕒 3:00 PM – 5:00 PM</div></div></div>';
});

var _bcOpen=false;function bcToggle(){document.getElementById('bc-bubble').style.display='none';_bcOpen=!_bcOpen;document.getElementById('bc-modal').style.display=_bcOpen?'block':'none';}function bcClose(){_bcOpen=false;document.getElementById('bc-modal').style.display='none';}setTimeout(function(){var b=document.getElementById('bc-bubble');if(b&&!_bcOpen)b.style.display='block';},3000);
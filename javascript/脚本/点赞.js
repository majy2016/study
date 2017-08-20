var i = $(".like-btn");
var l = 0;
//click完后才提交，时间太长，不会被采用，时间少点
function click(){
  while (l<199){
    i.click();
    console.log("点击次数："+l);
    l = l + 1 ;
   //sleep(60);
  }
}

function sleep(d){
  for(var t = Date.now();Date.now() - t <= d;);
}

click()
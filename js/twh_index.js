/**
 * Created by Administrator on 2017/4/20.
 */
//      童文华JS开始
var lrtubiao = document.getElementsByClassName('lrtubiao')[0];
var twhwelcome = document.getElementsByClassName('welcome')[0];
var twhul = twhwelcome.children[0];
var clickRight = document.getElementById('click-right');
var clickLeft = document.getElementById("click-left");
var twhliArr = twhul.children;
var flag=true;
twhwelcome.onmouseenter = function () {
   lrtubiao.style.display="block";
}
twhwelcome.onmouseleave = function(){
   lrtubiao.style.display="none";
}
var jishuqi=0;
twhul.appendChild(twhliArr[0].cloneNode(true));
clickRight.onclick= function () {
   if(flag){
      flag = false;
      twhautoPlay();
   }
}
clickLeft.onclick= function () {
   jishuqi--;
   if(jishuqi===-1){
      twhul.style.left=-880*5+"px";
      jishuqi=4;
   }
   animate(twhul,{"left":-880*jishuqi});
}


function twhautoPlay() {

      jishuqi++;
      if(jishuqi===twhliArr.length){
         twhul.style.left=0;
         jishuqi=1;
      }

      animate(twhul,{"left":-880*jishuqi}, function () {
         flag=true;
      });
}

var leftBanner = document.getElementById('leftBanner');
bannerTimer=setTimeout(function () {
    animate(leftBanner,{"width":0,"height":0,"left":85,"top":263});
},5000);


var twh4 = document.getElementsByClassName('twh_4')[0];
twh4.onclick= function () {
    window.open("11111111/zyjs.html","_self");
}


//JS创建Li标签,加图片  滚动条栏
var gundongtiao =document.getElementsByClassName('gundongtiao')[0];
for(var i = 1; i <= 10;i++){
    var twhnewLi = document.createElement("li");
    twhnewLi.innerHTML = '<a href="#"><img src="images/twh'+i+'.jpg"/></a>';
    gundongtiao.appendChild(twhnewLi);
}
//滚动条
var gundongtiaoxk = document.getElementsByClassName('gundongtiaoxk')[0];
var gundongtiao =document.getElementsByClassName('gundongtiao')[0];
var twhscroBottm = document.getElementById('twhscroBottm');
var spsp = twhscroBottm.children[0];
var barWidth = spsp.offsetWidth;


spsp.onmousedown = function (event) {
    event = event || window.event;
    var pagex = event.pageX || event.clientX + scroll().left;
    var barx = spsp.offsetLeft;
    var x = pagex - barx;
    document.onmousemove = function (event) {
        event = event || window.event;
        var pagex = event.pageX || event.clientX + scroll().left;
        var xx = pagex - x;
        if(xx<0){
            xx = 0;
        }
        if(xx>twhscroBottm.offsetWidth - barWidth){
            xx = twhscroBottm.offsetWidth - barWidth;
        }
        spsp.style.left = xx+"px";
        console.log(spsp.style.left);
        var bili2 = (gundongtiao.offsetWidth-gundongtiaoxk.clientWidth)/(twhscroBottm.offsetWidth-barWidth);

        var xxx = bili2*xx;
        gundongtiao.style.left = -xxx + "px";
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
    }
}
document.onmouseup = function () {
    document.onmousemove = null;
}

//旋转木马
var xzJson = [
    {   //  1
        width:300,
        top:20,
        left:150,
        "opacity":0.5,
        z:2
    },
    {  // 2
        width:400,
        top:110,
        left:0,
        "opacity":0.8,
        z:3
    },
    {   // 3
        width:530,
        top:150,
        left:250,
        "opacity":1,
        z:4
    },
    {  // 4
        width:400,
        top:110,
        left:600,
        "opacity":0.8,
        z:3
    },
    {   //5
        width:300,
        top:20,
        left:550,
        "opacity":0.5,
        z:2
    }
];
var carousel = document.getElementById('carousel');
var mumaLi = carousel.getElementsByTagName('li');
var flag =  true;
var mumatimer = null;
var newMumali=[];
autoPlay();
mumatimer = setInterval(function () {
    autoPlay(false);
},2000)
carousel.onmouseenter = function () {
    clearInterval(mumatimer);

}
carousel.onmouseleave = function () {
    mumatimer = setInterval(function () {
        autoPlay(false);
    },2000)
}
function autoPlay(bool,n,fn) {
    if(bool !== undefined){
        if(bool){
            xzJson.push(xzJson.shift());
        }else{
            xzJson.unshift(xzJson.pop());
        }
    }
    for(var i=0;i<mumaLi.length;i++){
        animate(mumaLi[i],xzJson[i], function () {
        });
    }
    if(n){
        flag=true;
        fn();
    }

}



function scroll(){
    return{
        top:window.pageYOffset || document.documentElement.scrollTop,
        left:window.pageXOffset || document.documentElement.scrollLeft
    }
}


















/**滑动到顶部
 * Created by 高永胜 on 2017/4/19.
 */
var gotop = document.getElementsByClassName("gotop")[0];
var timer = null;
var leader = 0;
//绑定页面滑动事件;
window.onscroll = function () {
    if(scroll().top > 10){
        gotop.style.display="block"
    }else{
        //隐藏
        gotop.style.display="none"
    }
    //我们用也页面滑动为leader赋值,让leader成为页面的纵坐标;!!!
    leader = scroll().top;
}
//      window.scrollTo(x,y);   x代表横坐标;,y代表纵坐标;
gotop.onclick = function () {
    //瞬间闪动到页面最顶端;
//                window.scrollTo(0,0);
    //模拟缓动动画,页面滑动到最顶端;
    clearInterval(timer);
    timer = setInterval(function () {
        //1.获取步长;
        var step = (0 - leader)/10;
        //2.二次处理
        step = step > 0?Math.ceil(step):Math.floor(step);
        //3.赋值;
        leader = leader + step;
        window.scrollTo(0,leader);
        //4.清除定时器;
        if(leader === 0){
            clearInterval(timer);
        }
    },20);
}
function scroll(){
    return {
        top: window.pageYOffset || document.documentElement.scrollTop,
        left: window.pageXOffset || document.documentElement.scrollLeft
    }
}


/**
 * Created by 断天涯 on 2017/4/19.
 */

//热门推荐
var arrOfJson =[
    {"name":"What Goes Around Comes Around","img":"jll1"},
    {"name":"& Other Stories","img":"jll2"},
    {"name":"(Balenciaga)","img":"jll3"},
    {"name":"ASKA Collection","img":"jll4"},
    {"name":"Porsche Design","img":"jll5"},
    {"name":"Anthropologie","img":"jll6"},
    {"name":"ScaliseBains De Mer","img":"jll7"},
    {"name":"BCBG Max Azria","img":"jll8"},
    {"name":"Pretty Ballarinas","img":"jll9"},
    {"name":"O’ MY SOLE","img":"jll10"},
    {"name":"Kyle by Alene Too","img":"jll11"},
    {"name":"Vacheron Constantin）","img":"jll12"},
    {"name":"lacoste","img":"jll13"},
    {"name":"Patek Philippe","img":"jll14"},
    {"name":"Ralph Lauren","img":"jll15"},
    {"name":"Tory Burch","img":"jll16"},
    {"name":"Stefano Ricci","img":"jll17"},
    {"name":"Scotch & Soda","img":"jll18"},
    {"name":"Sandro","img":"jll19"},
    {"name":"Richard Mille","img":"jll20"},
    {"name":"Paper Source","img":"jll21"},
    {"name":"Panache ","img":"jll22"},
    {"name":"Max Mara","img":"jll23"},
    {"name":"Palter DeLiso","img":"jll24"},
    {"name":"L'Occitane en Provence","img":"jll25"},
    {"name":"Carolina Herrera","img":"jll26"},
    {"name":"AllSaints","img":"jll27"},
    {"name":"Badgley Mischka","img":"jll28"},
    {"name":"Alice + olivia","img":"jll29"},
    {"name":"Breguet","img":"jll30"},
    {"name":"Crate & Barrel","img":"jll31"},
    {"name":"Diptyque","img":"jll32"},
    {"name":"David Orgell","img":"jll33"},
    {"name":"Escada","img":"jll34"},
    {"name":"Dsquared2","img":"jll35"},
    {"name":"Hugo Boss","img":"jll36"},
    {"name":"Guess","img":"jll37"},
    {"name":"Ermenegildo Zegna","img":"jll38"},
    {"name":"","img":"jll39"},
    {"name":"ISAIA","img":"jll40"},
    {"name":"Indochino","img":"jll41"},
    {"name":"Giuseppe Zanotti","img":"jll42"},
    {"name":"Serapian Milano","img":"jll43"},
    {"name":"Lladro","img":"jll44"},
    {"name":"KLS","img":"jll45"},
    {"name":"Yoga Smoga","img":"jll46"},
    {"name":"Winnie Couture","img":"jll47"},
    {"name":"Catimini","img":"jll48"},
    {"name":"Auntie Barbara's Kids","img":"jll49"},
    {"name":"Etro","img":"jll50"},
    {"name":"Jill Sander Navy","img":"jll51"},
    {"name":"COS","img":"jll52"},
    {"name":" Chanel","img":"jll53"},
    {"name":" Hermès","img":"jll54"},
    {"name":"Bally","img":"jll55"},
    {"name":"Dior","img":"jll56"},
    {"name":" (Giorgio Armani)","img":"jll57"},
    {"name":" (Prada)","img":"jll58"},
    {"name":" (Louis Vuitton)","img":"jll59"},
    {"name":" (Versace)","img":"jll60"}
];


var ul =document.getElementsByClassName("picbox2-1")[0];

for(var i=1;i<=60;i++){
    var newLi = document.createElement("li");
    if(i>=10){
        newLi.innerHTML =' <a href="#">'+
            '<img src="images/shopping/0'+i+'.jpg"/>'+
            '</a>'+
            '<span>'+
            '<a href="#">'+arrOfJson[i-1].name+'</a>'+
            '</span>'

    }else {
        newLi.innerHTML =' <a href="#">'+
            '<img src="images/shopping/00'+i+'.jpg"/>'+
            '</a>'+
            '<span>'+
            '<a href="#">'+arrOfJson[i-1].name+'</a>'+
            '</span>'
    }

    ul.appendChild(newLi);
}





//主题推荐的js部分
var scrollBar = document.getElementsByClassName("scrollBar")[0];
var jililinul =document.getElementsByClassName("jililin123")[0];
var timer =null;
var bool1=false;
var bool2=false;

jilili();

function jilili() {
    fn(jililinul,-1856, function () {
        fn(jililinul,0, function () {
            fn(jililinul,-1856, function () {
                fn(jililinul,0);
            })
        });

    });
    fn123(scrollBar,855, function () {
        fn123(scrollBar,0, function () {
            fn123(scrollBar,855, function () {
                fn123(scrollBar,0)
            });
        });
    });
}

//封装
function fn(ele,target,fn) {
    clearInterval(ele.timer);
    ele.timer=setInterval(function () {
        var step = target>ele.offsetLeft?26:-26;
        ele.style.left=ele.offsetLeft+step+"px";
        console.log( target-ele.offsetLeft,ele.offsetLeft);
        if(Math.abs(target-ele.offsetLeft) <= Math.abs(step)){
            ele.style.left=target+"px";
            bool1=true;
            //clearInterval(ele.timer);
        }
        if(bool1){
            clearInterval(ele.timer);
            if(fn){
                bool1 = false;
                fn();
            }
        }

    },120);
};

function fn123(ele,target,fn) {
    clearInterval(ele.timer);
    ele.timer = setInterval(function () {
        var step = target > ele.offsetLeft ? 4 : -4;
        ele.style.left = ele.offsetLeft + step + "px";
        if (Math.abs(target - ele.offsetLeft) <= Math.abs(step)) {
            ele.style.left = target + "px";
            //clearInterval(ele.timer);
            bool2 = true;
        }
        if(bool2){
            clearInterval(ele.timer);
            if(fn){
                bool2 = false;
                fn();
            }
        }

    }, 40);
}

//楼层跳跃

//var jllol = document.getElementsByTagName("jililinol")[0];
//var olLiArr = jllol.children;
////定义三个变量: 目标位置,当前位置,定时器;
//var target=0,leader=790+"px",timer=null;
//    //自定义属性,绑定元素的索引值;
//   for(var i=0;i<olLiArr.length;i++) {
//       //olLiArr[i].index = i;
//       //1.老三步;
//       olLiArr[i].onclick = function () {
//           //2.指定目标位置;(最后做)
//           target = (i+1)*leader.offsetTop;//点击之后,利用索引值,然后获取到ul中的li该索引值位置的li距离顶部的距离;
//
//           //3.随便给目标位置付一个值,然后利用缓动动画,让页面走到目标位置;
//           clearInterval(timer);
//           timer = setInterval(function () {
//               //1.获取步长
//               var step = (target - leader) / 10;
//               //2.二次处理步长
//               step = step > 0 ? Math.ceil(step) : Math.floor(step);
//               //3.f赋值
//               leader += step;
//               window.scrollTo(0, leader);
//               //4.清除定时器
//               if (leader === target) {
//                   clearInterval(timer);
//               }
//           }, 30);
//       }
//   }
////获取页面的纵坐标;
//   window.onscroll = function () {
//    //页面顶部被卷去多少,纵坐标就是多少
//    leader = scroll().top+"px";
//}
//
//







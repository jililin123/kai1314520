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
    {"name":"O' MY SOLE","img":"jll10"},
    {"name":"Kyle by Alene Too","img":"jll11"},
    {"name":"Vacheron Constantin","img":"jll12"},
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
    {"name":"Rodeo Drive sisters Street","img":"jll39"},
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
    {"name":" (Chanel)","img":"jll53"},
    {"name":" Hermes","img":"jll54"},
    {"name":" (Bally)","img":"jll55"},
    {"name":"(Dior)","img":"jll56"},
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
            '<img src="images/0'+i+'.jpg"/>'+
            '</a>'+
            '<span>'+
            '<a href="#">'+arrOfJson[i-1].name+'</a>'+
            '</span>';


    }else {
        newLi.innerHTML =' <a href="#">'+
            '<img src="images/00'+i+'.jpg"/>'+
            '</a>'+
            '<span>'+
            '<a href="#">'+arrOfJson[i-1].name+'</a>'+
            '</span>';
    }

    ul.appendChild(newLi);

}




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

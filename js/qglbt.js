window.onload = function () {
    var ul = document.getElementById('topHead-ul');
    var liArr = ul.getElementsByTagName("li");
    var angle = document.getElementsByTagName("i")[0];
    var count = 6;

    for(var i=0;i<liArr.length;i++){
        liArr[i]["index"] = i;
        liArr[i].onmouseover = function () {
            if(this.index>3){
                animate(angle,{"left":this.index*this.scrollWidth + 61});
            }else{
                animate(angle, {"left":this.index*this.scrollWidth});
            }
        }
        liArr[i].onmouseout = function () {
            if(count>3){
                animate(angle, {"left":count*this.scrollWidth + 61});
            }else{
                animate(angle, {"left":count*this.scrollWidth});
            }
        }
        liArr[i].onclick = function () {
            count = this["index"];
        }
    }


    //var welcome = document.getElementById('welcome');
    //var indexNav = document.getElementsByClassName('indexNav')[0];
    //window.onscroll= function () {
    //    if(60<= scroll().top){
    //        indexNav.className='indexNav fixed';
    //        welcome.style.marginTop='250px';
    //    }
    //}










    var right=document.querySelector("#right");
    var left=document.querySelector("#left");
    var uls=document.querySelectorAll("#lbt ul");
    var anniu = document.querySelector("#anniu");
    var qglbt = document.querySelector("#qglbt");



    qglbt.onmouseenter= function () {
        anniu.style.display="block";
    }
    //qglbt.onmouseleave= function () {
    //    anniu.style.display="none";
    //}
    var index=0;


    var flag=true;

    right.onclick=function(){
        if(flag){
            flag=false;
            index--;
            for (var i = 0; i < uls.length; i++) {
                uls[i].style.transform="rotateX("+index*90+"deg)";
                uls[i].style.transition="all 1s "+0.5*i+"s";
            }
        }
    };

    uls[uls.length-1].addEventListener("transitionend",function(){
        flag=true;
    });
    left.onclick=function(){

        if(flag){
            flag=false;
            index++;
            for (var i = 0; i < uls.length; i++) {
                uls[i].style.transform="rotateX("+index*90+"deg)";
                uls[i].style.transition="all 1s "+0.5*i+"s";
            }

        }

    }

}





function animate(ele,json,fn){
    clearInterval(ele.timer);
    ele.timer = setInterval(function () {
        var bool = true;
        for(var k in json){
            if(k === "z"){
                ele.style.zIndex = json[k];
            }else if(k === "opacity"){
                if(getStyle(ele,k)*10 === 0){
                    var leader = 0;
                }else{
                    var leader = parseInt(getStyle(ele,k)*10) || 10;
                }
                var step = (parseInt(json[k]*10)-leader)/10;
                step = step>0?Math.ceil(step):Math.floor(step);
                leader = leader + step;
                ele.style[k] = leader/10;
                ele.style.filter = "alpha(opacity="+leader*10+")";
                if(parseInt(json[k]*10) !== leader){
                    bool = false;
                }
            }else{
                var leader = parseInt(getStyle(ele,k)) || 0;
                var step = (json[k]-leader)/10;
                step = step>0?Math.ceil(step):Math.floor(step);
                leader = leader + step;
                ele.style[k] = leader + "px";
                if(json[k] !== leader){
                    bool = false;
                }
            }
        }
        if(bool){
            clearInterval(ele.timer);
            if(fn){
                fn();

            }
        }
    },30);
}


function getStyle(ele,attr){
    if(window.getComputedStyle !== undefined){
        return window.getComputedStyle(ele,null)[attr];
    }else{
        return ele.currentStyle[attr];
    }
}

function scroll(){
    return {
        top: window.pageYOffset || document.documentElement.scrollTop,
        left: window.pageXOffset || document.documentElement.scrollLeft
    };
}
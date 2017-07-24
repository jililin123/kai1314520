/**
 * 
 */
window.onload = function () {
    var ul = document.getElementById("wxf_top");
    var liArr = ul.getElementsByTagName("li");
    var angle = document.getElementsByTagName("i")[0];
    var count = 0;
    for(var i=0;i<liArr.length;i++){
        liArr[i]["index"] = i;
        liArr[i].onmouseover = function () {
            if(this.index>3){
                animate(angle, this.index*angle.scrollWidth + 61);
            }else{
                animate(angle, this.index*angle.scrollWidth);
            }
        }
        liArr[i].onmouseout = function () {
            
            if(this.index>3){
                animate(angle, this.index*angle.scrollWidth + 61);
            }else{
                animate(angle, this.index*angle.scrollWidth);
            }
        }
        liArr[i].onclick = function () {
            count = this["index"];
        }
    }
//中间部分代码------------------------------------
   $(function(){
        $(".bg_1 ul li").mouseenter(function(){
            $(this).addClass("liColor").siblings("li").removeClass("liColor");
            $(this).children("i").addClass("trangle").parent("li").siblings("li").children("i").removeClass("trangle");
            $(".ctt>div").eq($(this).index()).stop().fadeIn(1000).siblings("div").hide();

        })
    })
//底部代码----------------------------------------
 var gotop = document.getElementsByClassName("gotop")[0];
 var indexNav = document.getElementsByClassName("indexNav")[0];
    var timer = null;
    var leader = 0;
    window.onscroll = function () {
        if(scroll().top > 100){
            gotop.style.display="block";
        }else{
            gotop.style.display="none";
        }
        leader = scroll().top;
    }
    gotop.onclick = function () {
        clearInterval(timer);
        timer = setInterval(function () {
            var step = (0 - leader)/10;
            step = step > 0?Math.ceil(step):Math.floor(step);
            leader = leader + step;
            window.scrollTo(0,leader);
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
}
function animate(ele,target) {
    clearInterval(ele.timer);
    ele.timer = setInterval(function () {
        var step = (target-ele.offsetLeft)/10;
        step = step>0?Math.ceil(step):Math.floor(step);
        ele.style.left = ele.offsetLeft + step +"px";
        if(Math.abs(target-ele.offsetLeft) <= Math.abs(step)){
            ele.style.left = target + "px";
            clearInterval(ele.timer);
        }
    },16);
}









    
 



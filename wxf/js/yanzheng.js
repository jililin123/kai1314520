/*
* @Author: Administrator
* @Date:   2017-04-22 15:36:08
* @Last Modified by:   Administrator
* @Last Modified time: 2017-04-23 00:17:56
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
                animate(angle, this.index*this.scrollWidth + 61);
            }else{
                animate(angle, this.index*this.scrollWidth);
            }
        }
        liArr[i].onmouseout = function () {
            if(this.index>3){
                animate(angle, this.index*this.scrollWidth + 61);
            }else{
                animate(angle, this.index*this.scrollWidth);
            }
        }
        liArr[i].onclick = function () {
            count = this["index"];
        }
    }


//-------------------------------------------------------------------
    var inpArr = document.getElementsByTagName("input");
    var btn = document.getElementsByTagName("button")[0];
    var p1 = document.getElementById("p1");
    var p2 = document.getElementById("p2");
    fn(inpArr[0],/^[\u4e00-\u9fa5]{2,4}$/);
    fn(inpArr[1],/^[\$a-zA-Z0-9_-]{6}$/);
    btn.onclick = function () {
        if(inpArr[2].checked == true){
            $(".fensss").show(1000).children("div").html("真爱粉私聊哟!").dblclick(function () {
                $(".fensss").hide(1000);
            });
        }else{
            $(".fensss").show(1000).children("div").html("黑粉给我滚!!!").dblclick(function () {
                $(".fensss").hide(1000);
            });
        }
    }
     //封装
     function fn(ele,reg) {
         ele.onblur = function () {
             if(this.value.trim() === ""){
                this.nextElementSibling.className = "wrong";
                this.nextElementSibling.innerHTML = "内容不能为空!";
                return;
             }

             if(reg.test(this.value)){
                 this.nextElementSibling.className = "right";
                 this.nextElementSibling.innerHTML = "输入正确";
             }else{
                 this.nextElementSibling.className = "wrong";
                 this.nextElementSibling.innerHTML = "对不起,格式错误!";
             }
         }
     }

//----------------------------------------------------------------------------------
    
	$(".yan_1>.inpt>.fr").click(function(){
		$(".yan_1").addClass("hide").siblings(".erWm").removeClass("hide");
		window.getSelection?window.getSelection().removeAllRanges():document.selection.empty();
	})

	$(".erWm>.fr").click(function(){
		$(".erWm").addClass("hide").siblings(".yan_1").removeClass("hide");
		window.getSelection?window.getSelection().removeAllRanges():document.selection.empty();
	})

    var img1 = document.getElementById("img1");
    var img2 = document.getElementById("img2");
    var zuo = document.getElementsByClassName("zuo_t")[0];
    var you = document.getElementsByClassName("you_fd")[0];
    var ii = zuo.children[0];

    zuo.onmouseover = function () {
        show(ii);
        show(you);
    }
    zuo.onmouseout = function () {
        hide(ii);
        hide(you);
    }
    zuo.onmousemove = function (event) {
        event = event || window.event;
        var pagex = event.pageX || event.clientX + scroll().left;
        var pagey = event.pageY || event.clientY + scroll().top;
        var smallx = zuo.offsetLeft;
        var smally = zuo.offsetTop;
        console.log(smallx);
        console.log(smally);
        var x = pagex - smallx - ii.offsetWidth/2;
        var y = pagey - smally - ii.offsetHeight/2;
        if (x < 0) {
            x = 0;
        }
        if (x > ii.offsetWidth) {
            x = ii.offsetWidth;
        }
        if (y < 0) {
            y = 0;
        }
        if (y > ii.offsetHeight) {
            y = ii.offsetHeight;
        }

        ii.style.left = x + "px";
        ii.style.top = y + "px";

        var bili2 = (img2.offsetWidth-you.offsetWidth)/(zuo.offsetWidth-ii.offsetWidth);
        var xx = x*bili2;
        var yy = y*bili2;
        img2.style.marginTop = -yy+"px";
        img2.style.marginLeft = -xx+"px";
    }

//------------------------------------------------------------------

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













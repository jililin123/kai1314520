/**
 * Created by ¶ÏÌìÑÄ on 2017/4/19.
 */
window.onload = function () {
    var ul =document.getElementById("jll-top-ul");
    var liArr = ul.getElementsByTagName("li");
    var angle = document.getElementsByTagName("i")[0];
    var count = 0;
    var key = true;

    for(var i =0; i<liArr.length;i++){
        if(i===4){
            continue;
        }
        liArr[i].onmouseover = function () {
            animate(angle,this.offsetLeft);
        }
        liArr[i].onmouseout = function () {
            animate(angle,count);
        }
        liArr[i].onclick = function () {
            count = this.offsetLeft;
        }
    }
    //for(var i=0;i<liArr.length;i++){
    //    liArr[i]["index"] = i;
    //    liArr[i].onmouseover = function () {
    //        if(this.index>3){
    //            animate(angle, this.index*this.scrollWidth +61);
    //        }else{
    //            animate(angle, this.index*this.scrollWidth);
    //        }
    //    }
    //    liArr[i].onmouseout = function () {
    //        if(this.index>3){
    //            if(key == true){
    //                animate(angle, count*this.scrollWidth);
    //            }else {
    //                animate(angle, count*this.scrollWidth+61);
    //            }
    //        }else{
    //            if(key == false){
    //                animate(angle, count*this.scrollWidth+61);
    //            }else {
    //                animate(angle, count*this.scrollWidth);
    //            }
    //        }
    //    }
    //    liArr[i].onclick = function () {
    //        count = this["index"];
    //        if(this["index"]>3){
    //            animate(angle, (this.index)*this.scrollWidth+61);
    //            key = false;
    //        }else {
    //            key = true;
    //            animate(angle, (this.index)*this.scrollWidth);
    //        }
    //    }
    //}
}
function animate(ele,target) {
    clearInterval(ele.timer);
    ele.timer = setInterval(function () {
        var step = (target-ele.offsetLeft)/10;
        step = step>0?Math.ceil(step):Math.floor(step);
        ele.style.left = ele.offsetLeft + step +"px";
        //console.log(1);
        if(Math.abs(target-ele.offsetLeft) <= Math.abs(step)){
            ele.style.left = target + "px";
            clearInterval(ele.timer);
        }
    },16);
}

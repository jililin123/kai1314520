window.onload = function () {
    var ul = document.getElementById('topHead-ul');
    var liArr = ul.getElementsByTagName("li");
    var angle = document.getElementsByTagName("i")[0];
    var count = 7;

    for (var i = 0; i < liArr.length; i++) {
        liArr[i]["index"] = i;
        liArr[i].onmouseover = function () {
            if (this.index > 3) {
                animate(angle, {"left": this.index * this.scrollWidth + 61});
            } else {
                animate(angle, {"left": this.index * this.scrollWidth});
            }
        }
        liArr[i].onmouseout = function () {
            if (count > 3) {
                animate(angle, {"left": count * this.scrollWidth + 61});
            } else {
                animate(angle, {"left": count * this.scrollWidth});
            }
        }
        liArr[i].onclick = function () {
            count = this["index"];
        }
    }


    var shurukuang = document.getElementsByClassName('shurukuang')[0];
    var textarea = shurukuang.getElementsByTagName('textarea')[0];
    var btn = shurukuang.getElementsByTagName('button')[0];
    var zhitiaoliuyan = document.getElementsByClassName('zhitiaoliuyan')[0];
    var zhitiao = document.getElementById('zhitiao');
    var shuzi = 2;
    var tuozhuai = document.getElementsByClassName('tuozhuai');
    var yidong = tuozhuai.parentNode;
    var num = 0;

    var oldLi = zhitiao.children;
    for (var i = 0; i < oldLi.length; i++) {
        oldLi[i].style.left=(Math.random()*350)+"px";
        oldLi[i].style.top=Math.random()*250+"px";
        oldLi[i].onclick= function () {
            this.style.zIndex=shuzi++;
        }


        oldLi[i].index = i;
        oldLi[i].children[0].onmousedown = function (event) {
            event = event || window.event;
            var pagex = event.pageX || event.clientX + scroll().left;
            var pagey = event.pageY || event.clientY + scroll().top;
            var boxx = this.parentNode.offsetLeft;
            var boxy = this.parentNode.offsetTop;
            var x = pagex - boxx;
            var y = pagey - boxy;
            num = this.parentElement.index;
            document.onmousemove = function (event) {

                event = event || window.event;
                var pagex = event.pageX || event.clientX + scroll().left;
                var pagey = event.pageY || event.clientY + scroll().top;
                //console.log(oldLi[flagOfLi]);
                oldLi[num].style.left = pagex - x + "px";
                oldLi[num].style.top = pagey - y + "px";

                if(oldLi[num].offsetTop<-100){
                    oldLi[num].style.top= "-100px";
                }
                if(oldLi[num].offsetLeft <-30){
                    oldLi[num].style.left="-30px";
                }
                if(oldLi[num].offsetLeft>400){
                    oldLi[num].style.left="400px";
                }
                if(oldLi[num].offsetTop>286){
                    oldLi[num].style.top="286px";
                }
                window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
            }
        }
        document.onmouseup = function () {
            document.onmousemove = null;
        }
    }


    btn.onclick = function () {
        var str = "";

        if ("" === textarea.value.trim()) {
            alert("输入内容为空");
            textarea.value = "";
            return;
        }
        if (textarea.value[textarea.value.length - 1] === ".") {
            str = "死黑粉";
        } else {
            str = "童文华的真爱粉";
        }

        var newLi = document.createElement('li');
        newLi.innerHTML =
            '<div class="tuozhuai"></div>' +
            '<div class="zhitiaoliuyan">' + textarea.value + '</div>' +
            '<div class="zhitiaofoot">' + str + '</div>';
        var y = parseInt(Math.random() * 250);
        var x = parseInt(Math.random() * 350);
        newLi.style.left = x + "px";
        newLi.style.top = y + "px"

        zhitiao.appendChild(newLi);

        newLi.onclick = function () {
            this.style.zIndex = shuzi++;
        }
        newLi.children[0].onmousedown = function (event) {
            event = event || window.event;
            var pagex = event.pageX || event.clientX + scroll().left;
            var pagey = event.pageY || event.clientY + scroll().top;
            var boxx = newLi.offsetLeft;
            var boxy = newLi.offsetTop;
            var x = pagex - boxx;
            var y = pagey - boxy;
            document.onmousemove = function (event) {
                event = event || window.event;
                var pagex = event.pageX || event.clientX + scroll().left;
                var pagey = event.pageY || event.clientY + scroll().top;


                newLi.style.left = pagex - x + "px";
                newLi.style.top = pagey - y + "px";

                if (newLi.offsetTop < 0) {
                    newLi.style.top = 0;
                }
                if (newLi.offsetLeft < 0) {
                    newLi.style.left = 0;
                }
                if (newLi.offsetLeft > 400) {
                    newLi.style.left = "400px";
                }
                if (newLi.offsetTop > 286) {
                    newLi.style.top = "286px";
                }
                window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
            }
        }
        document.onmouseup = function () {
            document.onmousemove = null;
        }
        newLi.children[0].ondblclick = function () {
            if (newLi.lastElementChild.innerHTML === "死黑粉") {
                newLi.parentNode.removeChild(this.parentNode);
            }
        }

        textarea.value = "";
    }
}




















function animate(ele,json,fn){
    clearInterval(ele.timer);
    ele.timer = setInterval(function () {
        var bool = true;
        for(var k in json){
            if(k === "z-index"){
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
    }
}
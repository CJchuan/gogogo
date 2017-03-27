import Vue from "vue";
const rem={
    count:function (){
    var docEl = document.documentElement;
       var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
       var  recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 10 * (clientWidth / 375) + 'px';
        };

    if (!document.addEventListener) return;
    window.addEventListener(resizeEvt, recalc, false);
    document.addEventListener('DOMContentLoaded', recalc, false);
}
}
export default rem
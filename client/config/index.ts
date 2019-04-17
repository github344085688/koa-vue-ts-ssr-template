/**
 * Created by f on 2019/4/3.
 */
import Vue from 'vue'
const flex = {
  install: (vue: any) => {
    Vue.mixin({
      mounted () {
        (function (doc, win) {
          let docEl = doc.documentElement,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            recalc = function () {
              let clientWidth = docEl.clientWidth;
              if (!clientWidth) return;
              if (clientWidth < 750) {
                docEl.style.fontSize = 30 * (clientWidth / 750) + 'px';
              } else {
                docEl.style.fontSize = 14 + 'px';
              }
            };
          if (!doc.addEventListener) return;
          win.addEventListener(resizeEvt, recalc, false);
          doc.addEventListener('DOMContentLoaded', recalc, false);
        })(document, window);
      },
      methods: {
        greetingFns: function () {
          console.log('greeting');
        }
      }
    })
    // clientHeight() {
    //   return EASY_ENV_IS_BROWSER ? document.body.clientHeight : '';
    // }
    console.log('docEl')
    /*if (typeof document) {
     let docEl = document.documentElement;

     }*/

  }
}
export default flex;
/*
 (function (doc, win) {
 let docEl = doc.documentElement,
 resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
 recalc = function () {
 let clientWidth = docEl.clientWidth;
 if (!clientWidth) return;
 if (clientWidth < 750) {
 docEl.style.fontSize = 30 * (clientWidth / 750) + 'px';
 } else {
 docEl.style.fontSize = 14 + 'px';
 }
 };
 if (!doc.addEventListener) return;
 win.addEventListener(resizeEvt, recalc, false);
 doc.addEventListener('DOMContentLoaded', recalc, false);
 })(document, window);*/

function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var r={id:e,exports:{}};return o[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},n.parcelRequired7c6=r),r("kyEFX").register(JSON.parse('{"5ZPII":"index.03807664.js","3bIHe":"amazon_link.626c9508.png","dkcwB":"apple_link.652b354e.png","2D6jo":"bookshop_link.1d091ebd.png","2bpE4":"index.a99bbf4e.js"}')),r("j2XVn"),r("92F0t"),r("4dIBK"),r("awoeA"),r("PuMMO"),r("hvEUv"),r("fKLyw"),r("75VGX"),r("74Aiq"),r("4S0r6"),r("cjUus"),r("gY4QW"),r("eqJOk");var i={};i=new URL(r("kyEFX").resolve("3bIHe"),import.meta.url).toString();var l={};l=new URL(r("kyEFX").resolve("dkcwB"),import.meta.url).toString();var a={};a=new URL(r("kyEFX").resolve("2D6jo"),import.meta.url).toString(),r("gY4QW");const s=document.querySelector(".main"),c=document.querySelector(".modal_pop-up__container"),d=document.querySelector(".modal_pop-up__description"),u=document.querySelector(".no-description"),p=document.querySelector(".backdrop_pop-up"),_=document.querySelector(".modal_pop-up__close-btn");let k;function b(){p.classList.toggle("backdrop_pop-up--is-hidden"),p.removeEventListener("click",g),_.removeEventListener("click",b),window.removeEventListener("keydown",f),d.innerHTML=""}function f(e){"Escape"===e.code&&b()}function g(e){e.target===e.currentTarget&&b()}s.addEventListener("click",(async function(n){if(!n.target.closest(".top-books_quick-view"))return;const o=n.target.closest(".top-books_quick-view").getAttribute("data-bookId");k=o,console.log(o),p.classList.remove("backdrop_pop-up--is-hidden"),p.addEventListener("click",g),_.addEventListener("click",b),window.addEventListener("keydown",f),await async function(n){c.innerHTML="";try{const o=await async function(e){const n=`${m}${e}`,o=await fetch(n);if(!o.ok)throw new Error(o.statusText);return await o.json()}(n),{book_image:t,title:r,author:s,description:d,buy_links:p}=o;u.innerHTML=""===d?"We hope you will love it":"";const _=`<div class="modal-info">\n    <img class="book__img" src="${t}" alt="${r}"/>\n    <div class="modal-info__box">\n       <h2 class="book__title">${r}</h2>\n       <h3 class="book__author">${s}</h3>\n       <p class="book__description">${d}</p>\n       <ul class="list seller__list">\n         <li>\n              <a class="seller__link" href="${p[0].url}" target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Amazon">\n                <img src="${e(i)}" alt="amazon" />\n              </a>\n            </li>\n            <li>\n              <a class="seller__link" href="${p[1].url}" target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Apple-books">\n                <img src="${e(l)}" alt="apple-books" />\n              </a>\n            </li>\n            <li>\n              <a class="seller__link" href="${p[4].url}" target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Bookshop">\n                <img src="${e(a)}" alt="bookshop" />\n              </a>\n            </li>\n       </ul>\n       </div>\n    </div>\n    <button class="btn modal__btn-add" type="button"\n    data-bookId='${n}'>add to shopping list</button>`;c.innerHTML=_;!function(e){for(let n=0;n<e.length;n++){e[n].addEventListener("click",(function(e){e.preventDefault(),window.open(this.href)}))}}(document.querySelectorAll(".modal__link"))}catch(e){console.log(e)}}(o)})),_.addEventListener("click",b);const m="https://books-backend.p.goit.global/books/";
//# sourceMappingURL=index.03807664.js.map

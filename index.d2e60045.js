function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=o.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,o){n[e]=o},o.parcelRequired7c6=r),r("kyEFX").register(JSON.parse('{"5ZPII":"index.d2e60045.js","3bIHe":"amazon_link.626c9508.png","dkcwB":"apple_link.652b354e.png","2D6jo":"bookshop_link.1d091ebd.png","hqwGB":"index.4347ba85.js"}')),r("j2XVn"),r("92F0t"),r("4dIBK"),r("awoeA"),r("PuMMO"),r("hvEUv"),r("fKLyw"),r("75VGX"),r("74Aiq"),r("4S0r6");var a=r("lMq6R"),l=r("j2XVn");const s=document.querySelector(".category-list"),i=document.querySelector(".js-top-books-container"),c=document.querySelector("h1");console.dir(c);document.querySelector(".all-category");s.addEventListener("click",(async e=>{const o=e.target.textContent;(0,l.apiRequestCategory)(o).then((o=>{console.log(o);const t=(0,a.createMarkupCategory)(o);i.innerHTML=t,c.innerText=`${e.target.textContent}`})).catch((e=>console.log(e)))})),fetch("https://books-backend.p.goit.global/books/category-list").then((e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})).then((e=>{s.insertAdjacentHTML("beforeend",e.map((e=>`<li class="category-list_item">\n        <p class="category-list_name">${e.list_name}</p>\n</li>`)).sort().join(""))})).catch((e=>console.log(e))),r("gY4QW"),r("eqJOk");var d={};d=new URL(r("kyEFX").resolve("3bIHe"),import.meta.url).toString();var u={};u=new URL(r("kyEFX").resolve("dkcwB"),import.meta.url).toString();var p={};p=new URL(r("kyEFX").resolve("2D6jo"),import.meta.url).toString(),r("gY4QW");var _={save:(e,o)=>{try{const t=JSON.stringify(o);localStorage.setItem(e,t)}catch(e){console.error("Set state error: ",e.message)}},load:e=>{try{const o=localStorage.getItem(e);return null===o?void 0:JSON.parse(o)}catch(e){console.error("Get state error: ",e.message)}},remove:e=>{try{localStorage.removeItem(e)}catch(e){console.error("Remove state error: ",e.message)}}};const g=document.querySelector(".main"),k=document.querySelector(".modal_pop-up__container"),m=document.querySelector(".modal_pop-up__description"),b=document.querySelector(".no-description"),f=document.querySelector(".backdrop_pop-up"),v=document.querySelector(".modal_pop-up__close-btn");let y;function h(){f.classList.toggle("backdrop_pop-up--is-hidden"),f.removeEventListener("click",S),v.removeEventListener("click",h),window.removeEventListener("keydown",w),m.innerHTML=""}function w(e){"Escape"===e.code&&h()}function S(e){e.target===e.currentTarget&&h()}g.addEventListener("click",(async function(o){if(!o.target.closest(".top-books_quick-view"))return;const t=o.target.closest(".top-books_quick-view").getAttribute("data-bookId");y=t,console.log(t),f.classList.remove("backdrop_pop-up--is-hidden"),f.addEventListener("click",S),v.addEventListener("click",h),window.addEventListener("keydown",w),await async function(o){k.innerHTML="";try{const t=await async function(e){const o=`${E}${e}`,t=await fetch(o);if(!t.ok)throw new Error(t.statusText);return await t.json()}(o);_.save("active-book",t);const n=Boolean(_.load("selected-books")?.find((e=>e._id===t._id))),{book_image:r,title:a,author:l,description:s,buy_links:i}=t;b.innerHTML=""===s?"We hope you will love it":"";const c=`<div class="modal-info">\n    <img class="book__img" src="${r}" alt="${a}"/>\n    <div class="modal-info__box">\n       <h2 class="book__title">${a}</h2>\n       <h3 class="book__author">${l}</h3>\n       <p class="book__description">${s}</p>\n       <ul class="list seller__list">\n         <li>\n              <a class="seller__link" href="${i[0].url}" target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Amazon">\n                <img src="${e(d)}" alt="amazon" />\n              </a>\n            </li>\n            <li>\n              <a class="seller__link" href="${i[1].url}" target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Apple-books">\n                <img src="${e(u)}" alt="apple-books" />\n              </a>\n            </li>\n            <li>\n              <a class="seller__link" href="${i[4].url}" target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Bookshop">\n                <img src="${e(p)}" alt="bookshop" />\n              </a>\n            </li>\n       </ul>\n       </div>\n    </div>\n    <button class="btn modal__btn-add" type="button"\n    data-bookId='${o}'>${n?"remove from the shopping list":"add to shopping list"}</button>`;k.innerHTML=c;!function(e){for(let o=0;o<e.length;o++){e[o].addEventListener("click",(function(e){e.preventDefault(),window.open(this.href)}))}}(document.querySelectorAll(".modal__link"))}catch(e){console.log(e)}}(t)})),v.addEventListener("click",h);const E="https://books-backend.p.goit.global/books/";
//# sourceMappingURL=index.d2e60045.js.map

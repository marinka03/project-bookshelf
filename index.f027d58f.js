!function(){function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=o.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,o){n[e]=o},o.parcelRequired7c6=r),r("iE7OH").register(JSON.parse('{"EVgbq":"index.f027d58f.js","9qBCW":"amazon_link.626c9508.png","gTCLq":"apple_link.652b354e.png","7wZd0":"bookshop_link.1d091ebd.png","i8gtI":"index.c2d399a3.js"}')),r("2tTzi"),r("iYDPN"),r("bNmPK"),r("6N62V"),r("1uU1u"),r("6FlSt"),r("d6S5l"),r("18VO4"),r("23Ajj"),r("9VC5X");var a=r("kfaQ1"),s=r("2tTzi");const l=document.querySelector(".category-list"),i=document.querySelector(".js-section-top-books");document.querySelector(".all-category");l.addEventListener("click",(async e=>{const o=e.target.textContent;(0,s.apiRequestCategory)(o).then((o=>{console.log(o);const t=(0,a.createMarkupCategory)(o);i.innerHTML=`<h1 class="title-top-books">${e.target.textContent}</h1><div class="js-top-books-container">${t}</div>;`})).catch((e=>console.log(e)))})),fetch("https://books-backend.p.goit.global/books/category-list").then((e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})).then((e=>{l.insertAdjacentHTML("beforeend",e.map((e=>`<li class="category-list_item">\n        <p class="category-list_name">${e.list_name}</p>\n</li>`)).sort().join(""))})).catch((e=>console.log(e))),r("cRUDO"),r("RX4Re");var c={};c=r("aNJCr").getBundleURL("EVgbq")+r("iE7OH").resolve("9qBCW");var d={};d=r("aNJCr").getBundleURL("EVgbq")+r("iE7OH").resolve("gTCLq");var u={};u=r("aNJCr").getBundleURL("EVgbq")+r("iE7OH").resolve("7wZd0"),r("cRUDO");var p={save:(e,o)=>{try{const t=JSON.stringify(o);localStorage.setItem(e,t)}catch(e){console.error("Set state error: ",e.message)}},load:e=>{try{const o=localStorage.getItem(e);return null===o?void 0:JSON.parse(o)}catch(e){console.error("Get state error: ",e.message)}},remove:e=>{try{localStorage.removeItem(e)}catch(e){console.error("Remove state error: ",e.message)}}};r("fkNhc"),r("gQOBw"),r("gQOBw"),r("cokon"),r("cRUDO");const g=document.querySelector(".main"),b=document.querySelector(".modal_pop-up__container"),_=document.querySelector(".modal_pop-up__description"),k=document.querySelector(".no-description"),m=document.querySelector(".backdrop_pop-up"),f=document.querySelector(".modal_pop-up__close-btn");let h;function v(){m.classList.toggle("backdrop_pop-up--is-hidden"),m.removeEventListener("click",w),f.removeEventListener("click",v),window.removeEventListener("keydown",y),_.innerHTML=""}function y(e){"Escape"===e.code&&v()}function w(e){e.target===e.currentTarget&&v()}g.addEventListener("click",(async function(o){if(!o.target.closest(".top-books_quick-view"))return;const t=o.target.closest(".top-books_quick-view").getAttribute("data-bookId");h=t,console.log(t),m.classList.remove("backdrop_pop-up--is-hidden"),m.addEventListener("click",w),f.addEventListener("click",v),window.addEventListener("keydown",y),await async function(o){b.innerHTML="";try{const t=await async function(e){const o=`${E}${e}`,t=await fetch(o);if(!t.ok)throw new Error(t.statusText);return await t.json()}(o);p.save("active-book",t);const n=Boolean(p.load("selected-books")?.find((e=>e._id===t._id))),{book_image:r,title:a,author:s,description:l,buy_links:i}=t;k.innerHTML=""===l?"We hope you will love it":"";const g=`<div class="modal-info">\n    <img class="book__img" src="${r}" alt="${a}"/>\n    <div class="modal-info__box">\n       <h2 class="book__title">${a}</h2>\n       <h3 class="book__author">${s}</h3>\n       <p class="book__description">${l}</p>\n       <ul class="list seller__list">\n         <li>\n              <a class="seller__link" href="${i[0].url}" target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Amazon">\n                <img src="${e(c)}" alt="amazon" />\n              </a>\n            </li>\n            <li>\n              <a class="seller__link" href="${i[1].url}" target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Apple-books">\n                <img src="${e(d)}" alt="apple-books" />\n              </a>\n            </li>\n            <li>\n              <a class="seller__link" href="${i[4].url}" target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Bookshop">\n                <img src="${e(u)}" alt="bookshop" />\n              </a>\n            </li>\n       </ul>\n       </div>\n    </div>\n    <button class="btn modal__btn-add" type="button"\n    data-bookId='${o}'>${n?"remove from the shopping list":"add to shopping list"}</button>\n    <button class="btn modalbtn-remove" data-bookId='${o}' type="button">remove from the shopping list</button>\n    <p class="modal__btn-text">Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.</p>\n    <p class="modal__btn-need-login">First you need to login</p>`;b.innerHTML=g;!function(e){for(let o=0;o<e.length;o++){e[o].addEventListener("click",(function(e){e.preventDefault(),window.open(this.href)}))}}(document.querySelectorAll(".modal__link"))}catch(e){console.log(e)}}(t)})),f.addEventListener("click",v);const E="https://books-backend.p.goit.global/books/"}();
//# sourceMappingURL=index.f027d58f.js.map

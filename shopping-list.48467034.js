function n(n,o,e,i){Object.defineProperty(n,o,{get:e,set:i,enumerable:!0,configurable:!0})}function o(n){return n&&n.__esModule?n.default:n}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},s={},r=e.parcelRequired7c6;null==r&&((r=function(n){if(n in i)return i[n].exports;if(n in s){var o=s[n];delete s[n];var e={id:n,exports:{}};return i[n]=e,o.call(e.exports,e,e.exports),e.exports}var r=new Error("Cannot find module '"+n+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(n,o){s[n]=o},e.parcelRequired7c6=r),r.register("kyEFX",(function(o,e){var i,s;n(o.exports,"register",(function(){return i}),(function(n){return i=n})),n(o.exports,"resolve",(function(){return s}),(function(n){return s=n}));var r={};i=function(n){for(var o=Object.keys(n),e=0;e<o.length;e++)r[o[e]]=n[o[e]]},s=function(n){var o=r[n];if(null==o)throw new Error("Could not resolve bundle with id "+n);return o}})),r("kyEFX").register(JSON.parse('{"3bDNW":"shopping-list.48467034.js","3bIHe":"amazon_link.626c9508.png","dkcwB":"apple_link.652b354e.png","2D6jo":"bookshop_link.1d091ebd.png","8uu4p":"trash.2b5e5aae.png","hqwGB":"index.05745e8a.js"}')),r("j2XVn"),r("92F0t"),r("awoeA");var l=r("j2XVn"),t=r("gY4QW");t=r("gY4QW"),t=r("gY4QW");setTimeout((()=>{console.log("jvnnre",t.bookList),a.insertAdjacentHTML("beforeend",c(t.bookList))}),5e3),(0,l.hideLoader)();document.querySelector(".js-container-list");const a=document.querySelector(".js-listInShopping");JSON.parse(localStorage.getItem("shopping-list"));function c(n){return n.map((n=>`\n    <li class="shopping-list-card js-li-shopping" data-id=${n._id}>\n      <div class="shopping-list-card__cover">\n        <img src="${n.book_image}" width='116'>\n      </div>\n      <div class="shopping-list-card__content">\n        <h1 class="shopping-list-card__title">${n.title}</h1>\n        <p class="shopping-list-card__category">${n.age_group||"No category"}</p> \n<div class="shopping-list-card__wrapper">\n        <p class="shopping-list-card__desc">${n.description||"No description"}</p>\n</div>\n<div class="shopping-list-card__cellar">       \n <p class="shopping-list-card__author">${n.contributor}</p>\n        <ul class="shopping-list-card__links">\n                   <li>\n              <a class="seller__link shopping-list-card__amazon" href=# target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Amazon">\n                <img src="${n.title}" alt="amazon" />\n              </a>\n            </li>\n            <li>\n              <a class="seller__link shopping-list-card__book" href=# target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Apple-books">\n                <img src="${n.title}" alt="apple-books" />\n              </a>\n            </li>\n            <li>\n              <a class="seller__link shopping-list-card__book" href=# target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Bookshop">\n                <img src="${n.title}" alt="bookshop" />\n              </a>\n            </li>\n        </ul></div>\n        <button class="shopping-list-card__button" onclick="deleteBook(${n.id})">\n        \n        <img src="${n.title}" width="16" height="16" class="js-delete shopping-list-card__icon" alt="Remove">\n        \n        </button>\n\n      </div>\n  `)).join("")}a.addEventListener("click",(function(n){if(n.target.classList.contains("js-delete")){const o=n.target.closest(".js-li-shopping").dataset.id;console.log(o);const e=t.bookList.findIndex((n=>n._id===o));console.log(t.bookList[e]),t.bookList.splice(e,1),console.log(t.bookList),a.innerHTML=c(t.bookList)}}));var p;p=new URL(r("kyEFX").resolve("3bIHe"),import.meta.url).toString();var d;d=new URL(r("kyEFX").resolve("dkcwB"),import.meta.url).toString();var _;_=new URL(r("kyEFX").resolve("2D6jo"),import.meta.url).toString();var g;g=new URL(r("kyEFX").resolve("8uu4p"),import.meta.url).toString();l=r("j2XVn"),t=r("gY4QW");setTimeout((()=>{u.insertAdjacentHTML("beforeend",b(t.bookList))}),5e3);const u=document.querySelector(".js-listInShopping");let h=t.bookList;function b(n){return n.map((n=>`\n    <li class="shopping-list-card" data-bookId='${n._id}'> \n      <div class="shopping-list-card__cover">\n        <img src="${n.book_image}" alt="${n.title}" class="shopping-list-card__image">\n      </div>\n      <div class="shopping-list-card__content">\n<div class="shopping-list-card__index">\n        <h1 class="shopping-list-card__title">${n.title}</h1>\n        <p class="shopping-list-card__category">${n.list_name||"No list name"}</p>\n</div>\n        <div class="shopping-list-card__wrapper">\n          <p class="shopping-list-card__desc">${n.description||"We hope you will love it"}</p>\n        </div>\n        <div class="shopping-list-card__cellar">\n          <p class="shopping-list-card__author">${n.contributor}</p>\n          <ul class="shopping-list-card__links">\n             <li>\n              <a class="seller__link shopping-list-card__amazon" href=${n.amazon_product_url} target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Amazon">\n                <img src="${o(p)}" alt="amazon" />\n              </a>\n            </li>\n            <li>\n              <a class="seller__link shopping-list-card__book" href=${n.buy_links[1].url} target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Apple-books">\n                <img src="${o(d)}" alt="apple-books" />\n              </a>\n            </li>\n            <li>\n              <a class="seller__link shopping-list-card__book" href=${n.buy_links[2].url} target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Bookshop">\n                <img src="${o(_)}" alt="bookshop" />\n              </a>\n            </li>\n          </ul>\n        </div>\n        <button class="shopping-list-card__button" onclick="deleteBook('${n._id}')">\n          <img src="${o(g)}" width="16" height="16" class="shopping-list-card__icon" alt="Remove">\n        </button>\n      </div>\n    </li>`)).join("")}console.log(t.bookList,"asdkjasldj"),window.deleteBook=function(n){document.querySelector(`.shopping-list-card[data-bookId="${n}"]`).remove(),h=h.filter((o=>o._id!==n))},b(t.bookList),(0,l.hideLoader)(),r("hvEUv"),r("fKLyw"),r("75VGX"),r("74Aiq"),r("4S0r6"),r("gY4QW"),r("eqJOk"),r("4dIBK");
//# sourceMappingURL=shopping-list.48467034.js.map
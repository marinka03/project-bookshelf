function o(o,n,e,i){Object.defineProperty(o,n,{get:e,set:i,enumerable:!0,configurable:!0})}function n(o){return o&&o.__esModule?o.default:o}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},r={},t=e.parcelRequired7c6;null==t&&((t=function(o){if(o in i)return i[o].exports;if(o in r){var n=r[o];delete r[o];var e={id:o,exports:{}};return i[o]=e,n.call(e.exports,e,e.exports),e.exports}var t=new Error("Cannot find module '"+o+"'");throw t.code="MODULE_NOT_FOUND",t}).register=function(o,n){r[o]=n},e.parcelRequired7c6=t),t.register("kyEFX",(function(n,e){var i,r;o(n.exports,"register",(function(){return i}),(function(o){return i=o})),o(n.exports,"resolve",(function(){return r}),(function(o){return r=o}));var t={};i=function(o){for(var n=Object.keys(o),e=0;e<n.length;e++)t[n[e]]=o[n[e]]},r=function(o){var n=t[o];if(null==n)throw new Error("Could not resolve bundle with id "+o);return n}})),t("kyEFX").register(JSON.parse('{"3bDNW":"shopping-list.882303ea.js","3bIHe":"amazon_link.626c9508.png","dkcwB":"apple_link.652b354e.png","2D6jo":"bookshop_link.1d091ebd.png","8uu4p":"trash.2b5e5aae.png","hqwGB":"index.4347ba85.js"}')),t("j2XVn"),t("92F0t"),t("awoeA");var s=t("j2XVn"),l=t("gY4QW");t("gY4QW"),l=t("gY4QW");setTimeout((()=>{console.log("jvnnre",l.bookList),a.insertAdjacentHTML("beforeend",c(l.bookList))}),5e3),(0,s.hideLoader)();document.querySelector(".js-container-list");const a=document.querySelector(".js-listInShopping");JSON.parse(localStorage.getItem("shopping-list"));function c(o){return o.map((o=>`\n    <li class="shopping-list-card js-li-shopping" data-id=${o._id}>\n      <div class="shopping-list-card__cover">\n        <img src="${o.book_image}" width='116'>\n      </div>\n      <div class="shopping-list-card__content">\n        <h1 class="shopping-list-card__title">${o.title}</h1>\n        <p class="shopping-list-card__category">${o.age_group||"No category"}</p> \n<div class="shopping-list-card__wrapper">\n        <p class="shopping-list-card__desc">${o.description||"No description"}</p>\n</div>\n<div class="shopping-list-card__cellar">       \n <p class="shopping-list-card__author">${o.contributor}</p>\n        <ul class="shopping-list-card__links">\n                   <li>\n              <a class="seller__link shopping-list-card__amazon" href=# target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Amazon">\n                <img src="${o.title}" alt="amazon" />\n              </a>\n            </li>\n            <li>\n              <a class="seller__link shopping-list-card__book" href=# target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Apple-books">\n                <img src="${o.title}" alt="apple-books" />\n              </a>\n            </li>\n            <li>\n              <a class="seller__link shopping-list-card__book" href=# target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Bookshop">\n                <img src="${o.title}" alt="bookshop" />\n              </a>\n            </li>\n        </ul></div>\n        <button class="shopping-list-card__button" onclick="deleteBook(${o.id})">\n        \n        <img src="${o.title}" width="16" height="16" class="js-delete shopping-list-card__icon" alt="Remove">\n        \n        </button>\n\n      </div>\n  `)).join("")}a.addEventListener("click",(function(o){if(o.target.classList.contains("js-delete")){const n=o.target.closest(".js-li-shopping").dataset.id;console.log(n);const e=l.bookList.findIndex((o=>o._id===n));console.log(l.bookList[e]),l.bookList.splice(e,1),console.log(l.bookList),a.innerHTML=c(l.bookList)}}));var p={};p=new URL(t("kyEFX").resolve("3bIHe"),import.meta.url).toString();var d={};d=new URL(t("kyEFX").resolve("dkcwB"),import.meta.url).toString();var g={};g=new URL(t("kyEFX").resolve("2D6jo"),import.meta.url).toString();var _={};_=new URL(t("kyEFX").resolve("8uu4p"),import.meta.url).toString();s=t("j2XVn");let u=[{id:1,title:"Harry Potter",book_image:"harry-potter.jpg",buy_links:[{name:"Amazon",url:"https://www.amazon.com/Harry-Potter-Philosophers-Stone-Rowling/dp/B01MTGVJ6X/ref=sr_1_9"},{name:"Audible",url:"https://www.audible.com/pd/Harry-Potter-and-the-Sorcerers-Stone-Audiobook/B017V4SPQQ"}],contributor:"J.K. Rowling",age_group:"Children",description:"Fantasy novel about the boy wizard Harry Potter"},{id:2,title:"Lord of the Rings",book_image:"lord-of-the-rings.jpg",buy_links:[{name:"Amazon",url:"https://www.amazon.com/Lord-Rings-Fellowship-Ultimate-Collectors/dp/B007ZQAKHU/ref=sr_1_2"},{name:"Audible",url:"https://www.audible.com/pd/The-Fellowship-of-the-Ring-Audiobook/B0099RKI5W"}],contributor:"J.R.R. Tolkien",description:"Epic fantasy adventure novel set in Middle-earth"},{id:3,title:"Lord of the Rings",book_image:"lord-of-the-rings.jpg",buy_links:[{name:"Amazon",url:"https://www.amazon.com/Lord-Rings-Fellowship-Ultimate-Collectors/dp/B007ZQAKHU/ref=sr_1_2"},{name:"Audible",url:"https://www.audible.com/pd/The-Fellowship-of-the-Ring-Audiobook/B0099RKI5W"}],contributor:"J.R.R. Tolkien",description:"Epic fantasy adventure novel set in Middle-earth"},{id:4,title:"Lord of the Rings",book_image:"lord-of-the-rings.jpg",buy_links:[{name:"Amazon",url:"https://www.amazon.com/Lord-Rings-Fellowship-Ultimate-Collectors/dp/B007ZQAKHU/ref=sr_1_2"},{name:"Audible",url:"https://www.audible.com/pd/The-Fellowship-of-the-Ring-Audiobook/B0099RKI5W"}],contributor:"J.R.R. Tolkien",description:"Epic fantasy adventure novel set in Middle-earth"}];function h(){const o=document.querySelector(".js-listInShopping");u.forEach((e=>{o.insertAdjacentHTML("beforeend",function(o){return`\n    <li class="shopping-list-card">\n      <div class="shopping-list-card__cover">\n        <img src="${o.book_image}">\n      </div>\n      <div class="shopping-list-card__content">\n        <h1 class="shopping-list-card__title">${o.title}</h1>\n        <p class="shopping-list-card__category">${o.age_group||"No category"}</p> \n<div class="shopping-list-card__wrapper">\n        <p class="shopping-list-card__desc">${o.description||"No description"}</p>\n</div>\n<div class="shopping-list-card__cellar">       \n <p class="shopping-list-card__author">${o.contributor}</p>\n        <ul class="shopping-list-card__links">\n                   <li>\n              <a class="seller__link shopping-list-card__amazon" href=# target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Amazon">\n                <img src="${n(p)}" alt="amazon" />\n              </a>\n            </li>\n            <li>\n              <a class="seller__link shopping-list-card__book" href=# target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Apple-books">\n                <img src="${n(d)}" alt="apple-books" />\n              </a>\n            </li>\n            <li>\n              <a class="seller__link shopping-list-card__book" href=# target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Bookshop">\n                <img src="${n(g)}" alt="bookshop" />\n              </a>\n            </li>\n        </ul></div>\n        <button class="shopping-list-card__button" onclick="deleteBook(${o.id})">\n        \n        <img src="${n(_)}" width="16" height="16" class="shopping-list-card__icon" alt="Remove">\n        \n        </button>\n\n      </div>\n  `}(e))}))}window.deleteBook=function(o){u=u.filter((n=>n.id!==o)),document.querySelector(".js-listInShopping").innerHTML="",h()},(0,s.hideLoader)(),t("hvEUv"),t("fKLyw"),t("75VGX"),t("74Aiq"),t("4S0r6"),t("gY4QW"),t("eqJOk"),t("4dIBK");
//# sourceMappingURL=shopping-list.882303ea.js.map

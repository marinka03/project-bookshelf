!function(){function e(e,n,o,t){Object.defineProperty(e,n,{get:o,set:t,enumerable:!0,configurable:!0})}function n(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},s=o.parcelRequired7c6;null==s&&((s=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,n){r[e]=n},o.parcelRequired7c6=s),s.register("iE7OH",(function(n,o){var t,r;e(n.exports,"register",(function(){return t}),(function(e){return t=e})),e(n.exports,"resolve",(function(){return r}),(function(e){return r=e}));var s={};t=function(e){for(var n=Object.keys(e),o=0;o<n.length;o++)s[n[o]]=e[n[o]]},r=function(e){var n=s[e];if(null==n)throw new Error("Could not resolve bundle with id "+e);return n}})),s.register("aNJCr",(function(n,o){var t;e(n.exports,"getBundleURL",(function(){return t}),(function(e){return t=e}));var r={};function s(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}t=function(e){var n=r[e];return n||(n=function(){try{throw new Error}catch(n){var e=(""+n.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return s(e[2])}return"/"}(),r[e]=n),n}})),s.register("4WFAO",(function(e,o){var t=s("2tTzi"),r=s("9rMDt"),i=s("bNaMu");r=s("9rMDt");s("gQOBw");var l=s("cRUDO");(0,t.hideLoader)();const a=document.querySelector(".js-listInShopping"),c=document.querySelector(".js-wrapper-empty-page");console.log(c),console.log(JSON.parse(localStorage.getItem("userdata"))||{});const p=JSON.parse(localStorage.getItem("userdata"))||{};console.log(p.books);const d=c;if(console.log(p),console.log(Object.keys(p).length),!Object.keys(p).length)return void console.log("vfekbmnubneubn");p.books.length?(console.log("2"),c.style.display="none"):(console.log(p.books),console.log("1"),c.style.display="block");const g=[];p.books.forEach((e=>{var n;(n=e,fetch(`https://books-backend.p.goit.global/books/${n}`).then((e=>e.json()))).then((e=>{console.log(e),g.push(e),a.insertAdjacentHTML("beforeend",(0,r.generateCard)(e))}))})),a.addEventListener("click",(function(e){if(e.target.classList.contains("js-delete")){const o=e.target.closest(".js-li-shopping").dataset.id;console.log(o);const t=g.findIndex((e=>e._id===o));console.log(g[t]),g.splice(t,1),console.log(g),console.log("vjn;evo;n;e"),(0,l.removeBook)(o),a.innerHTML=(0,r.generateCards)(g),g.length||(console.log(c.style.display),console.log(c.style.display),console.log(c),console.log(d),console.log("1"),a.innerHTML=`<div class="wrapper-empty-page js-wrapper-empty-page"><p class="wrapper-empty-page_description js-descr-empty">This page is empty, add some books and proceed to order.</p><img class="js-image-empty" src="${n(i)}" alt="This page is empty" /></div>`)}})),(0,t.hideLoader)()})),s.register("9rMDt",(function(o,t){e(o.exports,"generateCard",(function(){return p})),e(o.exports,"generateCards",(function(){return d}));var r=s("kkLcy"),i=s("6wWXs"),l=s("9mWdI"),a=s("gh1Iy"),c=s("2tTzi");document.querySelector(".js-listInShopping");function p(e){return`\n    <li class="shopping-list-card js-li-shopping" data-id='${e._id}'> \n      <div class="shopping-list-card__cover">\n        <img src="${e.book_image}" alt="${e.title}" class="shopping-list-card__image">\n      </div>\n      <div class="shopping-list-card__content">\n<div class="shopping-list-card__index">\n        <h1 class="shopping-list-card__title">${e.title}</h1>\n        <p class="shopping-list-card__category">${e.list_name||"No list name"}</p>\n</div>\n        <div class="shopping-list-card__wrapper">\n          <p class="shopping-list-card__desc">${e.description||"We hope you will love it"}</p>\n        </div>\n        <div class="shopping-list-card__cellar">\n          <p class="shopping-list-card__author">${e.contributor}</p>\n          <ul class="shopping-list-card__links">\n             <li>\n              <a class="seller__link shopping-list-card__amazon" href=${e.amazon_product_url} target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Amazon">\n                <img src="${n(r)}" alt="amazon" />\n              </a>\n            </li>\n            <li>\n              <a class="seller__link shopping-list-card__book" href=${e.buy_links[1].url} target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Apple-books">\n                <img src="${n(i)}" alt="apple-books" />\n              </a>\n            </li>\n            <li>\n              <a class="seller__link shopping-list-card__book" href=${e.buy_links[2].url} target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Bookshop">\n                <img src="${n(l)}" alt="bookshop" />\n              </a>\n            </li>\n          </ul>\n        </div>\n        <button class="shopping-list-card__button js-delete">\n          <img src="${n(a)}" width="16" height="16" class="shopping-list-card__icon js-delete" alt="Remove">\n        </button>\n      </div>\n    </li>`}function d(e){return e.map(p).join("")}(0,c.hideLoader)()})),s.register("kkLcy",(function(e,n){e.exports=s("aNJCr").getBundleURL("7ttGv")+s("iE7OH").resolve("9qBCW")})),s.register("6wWXs",(function(e,n){e.exports=s("aNJCr").getBundleURL("7ttGv")+s("iE7OH").resolve("gTCLq")})),s.register("9mWdI",(function(e,n){e.exports=s("aNJCr").getBundleURL("7ttGv")+s("iE7OH").resolve("7wZd0")})),s.register("gh1Iy",(function(e,n){e.exports=s("aNJCr").getBundleURL("7ttGv")+s("iE7OH").resolve("edP1o")})),s.register("bNaMu",(function(e,n){e.exports=s("aNJCr").getBundleURL("7ttGv")+s("iE7OH").resolve("Ei7NO")})),s("iE7OH").register(JSON.parse('{"7ttGv":"shopping-list.53b0deb8.js","Ei7NO":"shopping_list.1426356a.png","9qBCW":"amazon_link.626c9508.png","gTCLq":"apple_link.652b354e.png","7wZd0":"bookshop_link.1d091ebd.png","edP1o":"trash.2b5e5aae.png","9rLXW":"index.a36c6971.js"}')),s("2tTzi"),s("iYDPN"),s("9rMDt"),s("4WFAO"),s("6FlSt"),s("d6S5l"),s("18VO4"),s("23Ajj"),s("9VC5X"),s("cRUDO"),s("RX4Re"),s("bNmPK")}();
//# sourceMappingURL=shopping-list.53b0deb8.js.map

!function(){function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},n.parcelRequired7c6=i),i.register("iE7OH",(function(t,n){var o,r;e(t.exports,"register",(function(){return o}),(function(e){return o=e})),e(t.exports,"resolve",(function(){return r}),(function(e){return r=e}));var i={};o=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},r=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i.register("aNJCr",(function(t,n){var o;e(t.exports,"getBundleURL",(function(){return o}),(function(e){return o=e}));var r={};function i(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}o=function(e){var t=r[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return i(e[2])}return"/"}(),r[e]=t),t}})),i("iE7OH").register(JSON.parse('{"7ttGv":"shopping-list.cfd08243.js","9qBCW":"amazon_link.626c9508.png","gTCLq":"apple_link.652b354e.png","7wZd0":"bookshop_link.1d091ebd.png","edP1o":"trash.2b5e5aae.png","amwco":"index.76fbbc8e.js"}')),i("2tTzi"),i("iYDPN"),i("6N62V");var l=i("2tTzi"),a=i("cRUDO");i("cRUDO"),a=i("cRUDO");setTimeout((()=>{console.log("jvnnre",a.bookList),s.insertAdjacentHTML("beforeend",c(a.bookList))}),5e3),(0,l.hideLoader)();document.querySelector(".js-container-list");const s=document.querySelector(".js-listInShopping");JSON.parse(localStorage.getItem("shopping-list"));function c(e){return e.map((e=>`<li class='js-li-shopping' data-id='${e._id}'>\n\t\t\t\t<img src="${e.book_image}" alt="${e.title}" width='116'>\n\t\t\t\t<h2>${e.title}</h2>\n\t\t\t\t<h3>${e.list_name}</h3>\n\t\t\t\t<p>${e.description}</p>\n\t\t\t\t<h3>${e.author}</h3>\n\t\t\t\t<button class='js-delete'>Delete</button>\n\t\t\t\t<a href="${e.amazon_product_url}">Amazon</a>\n\t\t\t\t<a href="${e.buy_links[1].url}">Book1</a>\n\t\t\t\t<a href="${e.buy_links[2].url}">Book2</a>\n\t\t\t</li>`)).join("")}var d={};d=i("aNJCr").getBundleURL("7ttGv")+i("iE7OH").resolve("9qBCW");var p={};p=i("aNJCr").getBundleURL("7ttGv")+i("iE7OH").resolve("gTCLq");var u={};u=i("aNJCr").getBundleURL("7ttGv")+i("iE7OH").resolve("7wZd0");var h={};h=i("aNJCr").getBundleURL("7ttGv")+i("iE7OH").resolve("edP1o");l=i("2tTzi");let g=[{id:1,title:"Harry Potter",book_image:"harry-potter.jpg",buy_links:[{name:"Amazon",url:"https://www.amazon.com/Harry-Potter-Philosophers-Stone-Rowling/dp/B01MTGVJ6X/ref=sr_1_9"},{name:"Audible",url:"https://www.audible.com/pd/Harry-Potter-and-the-Sorcerers-Stone-Audiobook/B017V4SPQQ"}],contributor:"J.K. Rowling",age_group:"Children",description:"Fantasy novel about the boy wizard Harry Potter"},{id:2,title:"Lord of the Rings",book_image:"lord-of-the-rings.jpg",buy_links:[{name:"Amazon",url:"https://www.amazon.com/Lord-Rings-Fellowship-Ultimate-Collectors/dp/B007ZQAKHU/ref=sr_1_2"},{name:"Audible",url:"https://www.audible.com/pd/The-Fellowship-of-the-Ring-Audiobook/B0099RKI5W"}],contributor:"J.R.R. Tolkien",description:"Epic fantasy adventure novel set in Middle-earth"},{id:3,title:"Lord of the Rings",book_image:"lord-of-the-rings.jpg",buy_links:[{name:"Amazon",url:"https://www.amazon.com/Lord-Rings-Fellowship-Ultimate-Collectors/dp/B007ZQAKHU/ref=sr_1_2"},{name:"Audible",url:"https://www.audible.com/pd/The-Fellowship-of-the-Ring-Audiobook/B0099RKI5W"}],contributor:"J.R.R. Tolkien",description:"Epic fantasy adventure novel set in Middle-earth"},{id:4,title:"Lord of the Rings",book_image:"lord-of-the-rings.jpg",buy_links:[{name:"Amazon",url:"https://www.amazon.com/Lord-Rings-Fellowship-Ultimate-Collectors/dp/B007ZQAKHU/ref=sr_1_2"},{name:"Audible",url:"https://www.audible.com/pd/The-Fellowship-of-the-Ring-Audiobook/B0099RKI5W"}],contributor:"J.R.R. Tolkien",description:"Epic fantasy adventure novel set in Middle-earth"}];function f(){const e=document.querySelector(".js-listInShopping");g.forEach((n=>{e.insertAdjacentHTML("beforeend",function(e){return`\n    <li class="shopping-list-card">\n      <div class="shopping-list-card__cover">\n        <img src="${e.book_image}">\n      </div>\n      <div class="shopping-list-card__content">\n        <h1 class="shopping-list-card__title">${e.title}</h1>\n        <p class="shopping-list-card__category">${e.age_group||"No category"}</p> \n<div class="shopping-list-card__wrapper">\n        <p class="shopping-list-card__desc">${e.description||"No description"}</p>\n</div>\n<div class="shopping-list-card__cellar">       \n <p class="shopping-list-card__author">${e.contributor}</p>\n        <ul class="shopping-list-card__links">\n                   <li>\n              <a class="seller__link shopping-list-card__amazon" href=# target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Amazon">\n                <img src="${t(d)}" alt="amazon" />\n              </a>\n            </li>\n            <li>\n              <a class="seller__link shopping-list-card__book" href=# target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Apple-books">\n                <img src="${t(p)}" alt="apple-books" />\n              </a>\n            </li>\n            <li>\n              <a class="seller__link shopping-list-card__book" href=# target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Bookshop">\n                <img src="${t(u)}" alt="bookshop" />\n              </a>\n            </li>\n        </ul></div>\n        <button class="shopping-list-card__button" onclick="deleteBook(${e.id})">\n        \n        <img src="${t(h)}" width="16" height="16" class="shopping-list-card__icon" alt="Remove">\n        \n        </button>\n\n      </div>\n  `}(n))}))}window.deleteBook=function(e){g=g.filter((t=>t.id!==e)),document.querySelector(".js-listInShopping").innerHTML="",f()},(0,l.hideLoader)(),i("6FlSt"),i("d6S5l"),i("18VO4"),i("23Ajj"),i("9VC5X"),i("8z8B0"),i("cRUDO"),i("RX4Re"),i("bNmPK")}();
//# sourceMappingURL=shopping-list.cfd08243.js.map

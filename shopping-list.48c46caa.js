function e(e,o,n,t){Object.defineProperty(e,o,{get:n,set:t,enumerable:!0,configurable:!0})}function o(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in r){var o=r[e];delete r[e];var n={id:e,exports:{}};return t[e]=n,o.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){r[e]=o},n.parcelRequired7c6=i),i.register("kyEFX",(function(o,n){var t,r;e(o.exports,"register",(function(){return t}),(function(e){return t=e})),e(o.exports,"resolve",(function(){return r}),(function(e){return r=e}));var i={};t=function(e){for(var o=Object.keys(e),n=0;n<o.length;n++)i[o[n]]=e[o[n]]},r=function(e){var o=i[e];if(null==o)throw new Error("Could not resolve bundle with id "+e);return o}})),i("kyEFX").register(JSON.parse('{"3bDNW":"shopping-list.48c46caa.js","3bIHe":"amazon_link.626c9508.png","dkcwB":"apple_link.652b354e.png","2D6jo":"bookshop_link.1d091ebd.png","8uu4p":"trash.2b5e5aae.png","9KvYn":"index.702cccf1.js"}')),i("j2XVn"),i("92F0t"),i("awoeA");var l=i("j2XVn"),s=i("gY4QW");i("gY4QW"),s=i("gY4QW");setTimeout((()=>{console.log("jvnnre",s.bookList),a.insertAdjacentHTML("beforeend",p(s.bookList))}),5e3),(0,l.hideLoader)();document.querySelector(".js-container-list");const a=document.querySelector(".js-listInShopping");JSON.parse(localStorage.getItem("shopping-list"));function p(e){return e.map((e=>`<li class='js-li-shopping' data-id='${e._id}'>\n\t\t\t\t<img src="${e.book_image}" alt="${e.title}" width='116'>\n\t\t\t\t<h2>${e.title}</h2>\n\t\t\t\t<h3>${e.list_name}</h3>\n\t\t\t\t<p>${e.description}</p>\n\t\t\t\t<h3>${e.author}</h3>\n\t\t\t\t<button class='js-delete'>Delete</button>\n\t\t\t\t<a href="${e.amazon_product_url}">Amazon</a>\n\t\t\t\t<a href="${e.buy_links[1].url}">Book1</a>\n\t\t\t\t<a href="${e.buy_links[2].url}">Book2</a>\n\t\t\t</li>`)).join("")}var d={};d=new URL(i("kyEFX").resolve("3bIHe"),import.meta.url).toString();var c={};c=new URL(i("kyEFX").resolve("dkcwB"),import.meta.url).toString();var u={};u=new URL(i("kyEFX").resolve("2D6jo"),import.meta.url).toString();var g={};g=new URL(i("kyEFX").resolve("8uu4p"),import.meta.url).toString();l=i("j2XVn");let h=[{id:1,title:"Harry Potter",book_image:"harry-potter.jpg",buy_links:[{name:"Amazon",url:"https://www.amazon.com/Harry-Potter-Philosophers-Stone-Rowling/dp/B01MTGVJ6X/ref=sr_1_9"},{name:"Audible",url:"https://www.audible.com/pd/Harry-Potter-and-the-Sorcerers-Stone-Audiobook/B017V4SPQQ"}],contributor:"J.K. Rowling",age_group:"Children",description:"Fantasy novel about the boy wizard Harry Potter"},{id:2,title:"Lord of the Rings",book_image:"lord-of-the-rings.jpg",buy_links:[{name:"Amazon",url:"https://www.amazon.com/Lord-Rings-Fellowship-Ultimate-Collectors/dp/B007ZQAKHU/ref=sr_1_2"},{name:"Audible",url:"https://www.audible.com/pd/The-Fellowship-of-the-Ring-Audiobook/B0099RKI5W"}],contributor:"J.R.R. Tolkien",description:"Epic fantasy adventure novel set in Middle-earth"},{id:3,title:"Lord of the Rings",book_image:"lord-of-the-rings.jpg",buy_links:[{name:"Amazon",url:"https://www.amazon.com/Lord-Rings-Fellowship-Ultimate-Collectors/dp/B007ZQAKHU/ref=sr_1_2"},{name:"Audible",url:"https://www.audible.com/pd/The-Fellowship-of-the-Ring-Audiobook/B0099RKI5W"}],contributor:"J.R.R. Tolkien",description:"Epic fantasy adventure novel set in Middle-earth"},{id:4,title:"Lord of the Rings",book_image:"lord-of-the-rings.jpg",buy_links:[{name:"Amazon",url:"https://www.amazon.com/Lord-Rings-Fellowship-Ultimate-Collectors/dp/B007ZQAKHU/ref=sr_1_2"},{name:"Audible",url:"https://www.audible.com/pd/The-Fellowship-of-the-Ring-Audiobook/B0099RKI5W"}],contributor:"J.R.R. Tolkien",description:"Epic fantasy adventure novel set in Middle-earth"}];function _(){const e=document.querySelector(".js-listInShopping");h.forEach((n=>{e.insertAdjacentHTML("beforeend",function(e){return`\n    <li class="shopping-list-card">\n      <div class="shopping-list-card__cover">\n        <img src="${e.book_image}">\n      </div>\n      <div class="shopping-list-card__content">\n        <h1 class="shopping-list-card__title">${e.title}</h1>\n        <p class="shopping-list-card__category">${e.age_group||"No category"}</p> \n<div class="shopping-list-card__wrapper">\n        <p class="shopping-list-card__desc">${e.description||"No description"}</p>\n</div>\n<div class="shopping-list-card__cellar">       \n <p class="shopping-list-card__author">${e.contributor}</p>\n        <ul class="shopping-list-card__links">\n                   <li>\n              <a class="seller__link shopping-list-card__amazon" href=# target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Amazon">\n                <img src="${o(d)}" alt="amazon" />\n              </a>\n            </li>\n            <li>\n              <a class="seller__link shopping-list-card__book" href=# target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Apple-books">\n                <img src="${o(c)}" alt="apple-books" />\n              </a>\n            </li>\n            <li>\n              <a class="seller__link shopping-list-card__book" href=# target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Bookshop">\n                <img src="${o(u)}" alt="bookshop" />\n              </a>\n            </li>\n        </ul></div>\n        <button class="shopping-list-card__button" onclick="deleteBook(${e.id})">\n        \n        <img src="${o(g)}" width="16" height="16" class="shopping-list-card__icon" alt="Remove">\n        \n        </button>\n\n      </div>\n  `}(n))}))}window.deleteBook=function(e){h=h.filter((o=>o.id!==e)),document.querySelector(".js-listInShopping").innerHTML="",_()},(0,l.hideLoader)(),i("hvEUv"),i("fKLyw"),i("75VGX"),i("74Aiq"),i("4S0r6"),i("cjUus"),i("gY4QW"),i("eqJOk"),i("4dIBK");
//# sourceMappingURL=shopping-list.48c46caa.js.map
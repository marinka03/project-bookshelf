function t(t){return t&&t.__esModule?t.default:t}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n={},s=o.parcelRequired7c6;null==s&&((s=function(t){if(t in e)return e[t].exports;if(t in n){var o=n[t];delete n[t];var s={id:t,exports:{}};return e[t]=s,o.call(s.exports,s,s.exports),s.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,o){n[t]=o},o.parcelRequired7c6=s),s("kyEFX").register(JSON.parse('{"5ZPII":"index.15a9d7a1.js","3bIHe":"amazon_link.626c9508.png","dkcwB":"apple_link.652b354e.png","2D6jo":"bookshop_link.1d091ebd.png","3TeDo":"index.4fe50326.js"}')),s("j2XVn"),s("92F0t"),s("4dIBK");var a=s("j2XVn");s("j2XVn");function l(t){return t.map((t=>`<div class="top-books_book">\n            <img class="top-books_image" src="${t.book_image}" alt="book_image"  width="180"></img>\n            <h3 class="top-books_title">${t.title}</h3>\n            <p class="top-books_author">${t.contributor}</p>\n            <button class='top-books_quick-view ' data-bookId='${t._id}' type="button">quick view</button>\n        </div>`)).join("")}a=s("j2XVn");const r=(t,o)=>{try{const e=JSON.stringify(o);localStorage.setItem(t,e)}catch(t){console.error("Set state error: ",t.message)}},i=t=>{try{const o=localStorage.getItem(t);return null===o?void 0:JSON.parse(o)}catch(t){console.error("Get state error: ",t.message)}};var c={save:r,load:i,remove:t=>{try{localStorage.removeItem(t)}catch(t){console.error("Remove state error: ",t.message)}}};const d=document.querySelector(".category-list"),p=document.querySelector(".js-section-top-books");function u(){const t=i("activeCategory"),o=document.querySelector(".active-category"),e=document.querySelectorAll(".category-list_item");o&&o.classList.remove("active-category"),e.forEach((o=>{o.getAttribute("data-category")===t&&o.classList.add("active-category")}))}function b(t){r("activeCategory",t)}d.addEventListener("click",(async t=>{const o=t.target.textContent;t.target;t.target.textContent!==d.textContent&&("All categories"===o?(g(),b(t.target.textContent),u()):(0,a.apiRequestCategory)(o).then((o=>{const e=l(o);p.innerHTML=`<h1 class="title-top-books">${t.target.textContent}</h1><div class="category-books_container">${e}</div>`,b(t.target.textContent),u()})).catch((t=>console.log(t))))})),fetch("https://books-backend.p.goit.global/books/category-list").then((t=>{if(!t.ok)throw new Error(t.statusText);return t.json()})).then((t=>{d.insertAdjacentHTML("beforeend",t.map((t=>`<li class="category-list_item" data-category='${t.list_name}'>\n        <p class="category-list_name">${t.list_name}</p>\n</li>`)).sort().join(""))})).catch((t=>console.log(t)));const k=document.querySelector(".js-section-top-books");function g(){(0,a.apiRequestTopBooks)().then((t=>{const o=`<h1 class="title-top-books">Best Sellers <span>Books</span></h1><div class="js-top-books-container">${t.map((t=>{const o=t.books.map((t=>`<li class="top-books_list list">\n    <div class="top-books_book">\n        <img class="top-books_image" src="${t.book_image}" alt="book_image"  width="180">\n        <h3 class="top-books_title">${t.title}</h3>\n        <p class="top-books_author">${t.contributor}</p>\n        <button class='top-books_quick-view ' data-bookId='${t._id}' type="button">quick view</button></div>\n  \n</li>`)).join("");return`\n      <ul class="top-books">\n      <p class="top-books_category">${t.list_name}</p>\n      <div class="top-books_container">${o}</div>\n      <div class="js-top-books_button top-books_button link" data-category='${t.list_name}'>see more</div>\n      </ul>`})).join("")}</div>`;k.innerHTML=o,t.page!==t.total_pages&&(paginationBtn.hidden=!1),b("All categories"),u()})).catch((t=>console.log(t)))}g(),document.body.addEventListener("click",(function(t){if(t.target.classList.contains("js-top-books_button")){const o=t.target.getAttribute("data-category");(0,a.apiRequestCategory)(o).then((t=>{console.log("data :>> ",t);const e=l(t);k.innerHTML=`<h1 class="title-top-books">${o}</h1><div class="category-books_container">${e}</div>`,b(o),u()})).catch((t=>console.log(t)))}})),s("hvEUv"),s("fKLyw"),s("75VGX"),s("74Aiq"),s("4S0r6"),s("gY4QW"),s("eqJOk");var _={};_=new URL(s("kyEFX").resolve("3bIHe"),import.meta.url).toString();var m={};m=new URL(s("kyEFX").resolve("dkcwB"),import.meta.url).toString();var y={};y=new URL(s("kyEFX").resolve("2D6jo"),import.meta.url).toString(),s("gKkQl"),s("eyjy7"),s("eyjy7"),s("jAzyG");var v=s("gY4QW");s("ffjl9");const h=document.querySelector(".main"),f=document.querySelector(".modal_pop-up__container"),w=document.querySelector(".modal_pop-up__description"),S=document.querySelector(".no-description"),$=document.querySelector(".backdrop_pop-up"),L=document.querySelector(".modal_pop-up__close-btn");let q;function E(){$.classList.toggle("backdrop_pop-up--is-hidden"),$.removeEventListener("click",H),L.removeEventListener("click",E),window.removeEventListener("keydown",j),w.innerHTML=""}function j(t){"Escape"===t.code&&E()}function H(t){t.target===t.currentTarget&&E()}function A(){const t=localStorage.getItem("userdata");if(t){return JSON.parse(t)}return null}h.addEventListener("click",(async function(o){if(!o.target.closest(".top-books_quick-view"))return;const e=o.target.closest(".top-books_quick-view").getAttribute("data-bookId");q=e,console.log(e),$.classList.remove("backdrop_pop-up--is-hidden"),$.addEventListener("click",H),L.addEventListener("click",E),window.addEventListener("keydown",j),await async function(o){f.innerHTML="";try{const s=await async function(t){const o=`${x}${t}`,e=await fetch(o);if(!e.ok)throw new Error(e.statusText);return await e.json()}(o);c.save("active-book",s);const a=Boolean(c.load("selected-books")?.find((t=>t._id===s._id))),{book_image:l,title:r,author:i,description:d,buy_links:p}=s;S.innerHTML=""===d?"We hope you will love it":"";const u=`<div class="modal-info">\n    <img class="book__img" src="${l}" alt="${r}"/>\n    <div class="modal-info__box">\n       <h2 class="book__title">${r}</h2>\n       <h3 class="book__author">${i}</h3>\n       <p class="book__description">${d}</p>\n       <ul class="list seller__list">\n         <li>\n              <a class="seller__link" href="${p[0].url}" target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Amazon">\n                <img src="${t(_)}" alt="amazon" />\n              </a>\n            </li>\n            <li>\n              <a class="seller__link" href="${p[1].url}" target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Apple-books">\n                <img src="${t(m)}" alt="apple-books" />\n              </a>\n            </li>\n            <li>\n              <a class="seller__link" href="${p[4].url}" target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Bookshop">\n                <img src="${t(y)}" alt="bookshop" />\n              </a>\n            </li>\n       </ul>\n       </div>\n    </div>\n    <button class="btn modal__btn-add" type="button"\n    data-bookId='${o}'>${a?"remove from the shopping list":"add to shopping list"}</button>\n    <button class="btn modal__btn-remove" data-bookId='${o}' type="button">remove from the shopping list</button>\n    <p class="modal__btn-text">Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.</p>\n    <p class="modal__btn-need-login">First you need to login</p>`;f.innerHTML=u;const b=document.querySelector(".modal__btn-remove"),k=document.querySelector(".modal__btn-need-login"),g=document.querySelector(".modal__btn-add"),h=document.querySelector(".modal__btn-text");function e(t){A().books.map((o=>{o===t&&(b.style.display="block",g.style.display="none",h.style.display="none")}))}function n(){A()||(k.style.display="block",b.style.display="none",g.style.display="none")}g.addEventListener("click",(t=>{const o=t.target.getAttribute("data-bookId");(0,v.addbooktosl)(o),b.style.display="block",g.style.display="none",h.style.display="block",setTimeout((()=>{h.style.display="none"}),6500)})),b.addEventListener("click",(t=>{const o=t.target.getAttribute("data-bookId");(0,v.removeBook)(o),b.style.display="none",g.style.display="block",h.style.display="none"})),n(),e(o);!function(t){for(let o=0;o<t.length;o++){t[o].addEventListener("click",(function(t){t.preventDefault(),window.open(this.href)}))}}(document.querySelectorAll(".modal__link"))}catch(w){console.log(w)}}(e)})),L.addEventListener("click",E),console.log(A());const x="https://books-backend.p.goit.global/books/";
//# sourceMappingURL=index.15a9d7a1.js.map
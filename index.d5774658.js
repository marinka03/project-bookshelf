!function(){function t(t){return t&&t.__esModule?t.default:t}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n={},s=o.parcelRequired7c6;null==s&&((s=function(t){if(t in e)return e[t].exports;if(t in n){var o=n[t];delete n[t];var s={id:t,exports:{}};return e[t]=s,o.call(s.exports,s,s.exports),s.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,o){n[t]=o},o.parcelRequired7c6=s),s("iE7OH").register(JSON.parse('{"EVgbq":"index.d5774658.js","9qBCW":"amazon_link.626c9508.png","gTCLq":"apple_link.652b354e.png","7wZd0":"bookshop_link.1d091ebd.png","eJWEp":"index.df90bdf1.js"}')),s("2tTzi"),s("iYDPN"),s("bNmPK");var a=s("2tTzi");s("2tTzi");function l(t){return t.map((t=>`<div class="top-books_book">\n            <img class="top-books_image" src="${t.book_image}" alt="book_image"  width="180"></img>\n            <h3 class="top-books_title">${t.title}</h3>\n            <p class="top-books_author">${t.contributor}</p>\n            <button class='top-books_quick-view ' data-bookId='${t._id}' type="button">quick view</button>\n        </div>`)).join("")}a=s("2tTzi");const i=(t,o)=>{try{const e=JSON.stringify(o);localStorage.setItem(t,e)}catch(t){console.error("Set state error: ",t.message)}},r=t=>{try{const o=localStorage.getItem(t);return null===o?void 0:JSON.parse(o)}catch(t){console.error("Get state error: ",t.message)}};var c={save:i,load:r,remove:t=>{try{localStorage.removeItem(t)}catch(t){console.error("Remove state error: ",t.message)}}};const d=document.querySelector(".category-list"),p=document.querySelector(".js-section-top-books");function u(){const t=r("activeCategory"),o=document.querySelector(".active-category"),e=document.querySelectorAll(".category-list_item");o&&o.classList.remove("active-category"),e.forEach((o=>{o.getAttribute("data-category")===t&&o.classList.add("active-category")}))}function b(t){i("activeCategory",t)}d.addEventListener("click",(async t=>{const o=t.target.textContent;t.target;t.target.textContent!==d.textContent&&("All categories"===o?(k(),b(t.target.textContent),u()):(0,a.apiRequestCategory)(o).then((o=>{const e=l(o);p.innerHTML=`<h1 class="title-top-books">${t.target.textContent}</h1><div class="category-books_container">${e}</div>`,b(t.target.textContent),u()})).catch((t=>console.log(t))))})),fetch("https://books-backend.p.goit.global/books/category-list").then((t=>{if(!t.ok)throw new Error(t.statusText);return t.json()})).then((t=>{d.insertAdjacentHTML("beforeend",t.map((t=>`<li class="category-list_item" data-category='${t.list_name}'>\n        <p class="category-list_name">${t.list_name}</p>\n</li>`)).sort().join(""))})).catch((t=>console.log(t)));const g=document.querySelector(".js-section-top-books");function k(){(0,a.apiRequestTopBooks)().then((t=>{const o=`<h1 class="title-top-books">Best Sellers <span>Books</span></h1><div class="js-top-books-container">${t.map((t=>{const o=t.books.map((t=>`<li class="top-books_list list">\n    <div class="top-books_book">\n        <img class="top-books_image" src="${t.book_image}" alt="book_image"  width="180">\n        <h3 class="top-books_title">${t.title}</h3>\n        <p class="top-books_author">${t.contributor}</p>\n        <button class='top-books_quick-view ' data-bookId='${t._id}' type="button">quick view</button></div>\n  \n</li>`)).join("");return`\n      <ul class="top-books">\n      <p class="top-books_category">${t.list_name}</p>\n      <div class="top-books_container">${o}</div>\n      <div class="js-top-books_button top-books_button link" data-category='${t.list_name}'>see more</div>\n      </ul>`})).join("")}</div>`;g.innerHTML=o,t.page!==t.total_pages&&(paginationBtn.hidden=!1),b("All categories"),u()})).catch((t=>console.log(t)))}k(),document.body.addEventListener("click",(function(t){if(t.target.classList.contains("js-top-books_button")){const o=t.target.getAttribute("data-category");(0,a.apiRequestCategory)(o).then((t=>{console.log("data :>> ",t);const e=l(t);g.innerHTML=`<h1 class="title-top-books">${o}</h1><div class="category-books_container">${e}</div>`,b(o),u()})).catch((t=>console.log(t)))}})),s("6FlSt"),s("d6S5l"),s("18VO4"),s("23Ajj"),s("9VC5X"),s("cRUDO"),s("RX4Re");var _={};_=s("aNJCr").getBundleURL("EVgbq")+s("iE7OH").resolve("9qBCW");var m={};m=s("aNJCr").getBundleURL("EVgbq")+s("iE7OH").resolve("gTCLq");var y={};y=s("aNJCr").getBundleURL("EVgbq")+s("iE7OH").resolve("7wZd0"),s("fkNhc"),s("gQOBw"),s("gQOBw"),s("cokon");var v=s("cRUDO");s("2xDiJ");const h=document.querySelector(".main"),f=document.querySelector(".modal_pop-up__container"),q=document.querySelector(".modal_pop-up__description"),w=document.querySelector(".no-description"),$=document.querySelector(".backdrop_pop-up"),E=document.querySelector(".modal_pop-up__close-btn");let S;function L(){$.classList.toggle("backdrop_pop-up--is-hidden"),$.removeEventListener("click",H),E.removeEventListener("click",L),window.removeEventListener("keydown",T),q.innerHTML=""}function T(t){"Escape"===t.code&&L()}function H(t){t.target===t.currentTarget&&L()}function x(){const t=localStorage.getItem("userdata");if(t){return JSON.parse(t)}return null}h.addEventListener("click",(async function(o){if(!o.target.closest(".top-books_quick-view"))return;const e=o.target.closest(".top-books_quick-view").getAttribute("data-bookId");S=e,console.log(e),$.classList.remove("backdrop_pop-up--is-hidden"),$.addEventListener("click",H),E.addEventListener("click",L),window.addEventListener("keydown",T),await async function(o){f.innerHTML="";try{const s=await async function(t){const o=`${C}${t}`,e=await fetch(o);if(!e.ok)throw new Error(e.statusText);return await e.json()}(o);c.save("active-book",s);const a=Boolean(c.load("selected-books")?.find((t=>t._id===s._id))),{book_image:l,title:i,author:r,description:d,buy_links:p}=s;w.innerHTML=""===d?"We hope you will love it":"";const u=`<div class="modal-info">\n    <img class="book__img" src="${l}" alt="${i}"/>\n    <div class="modal-info__box">\n       <h2 class="book__title">${i}</h2>\n       <h3 class="book__author">${r}</h3>\n       <p class="book__description">${d}</p>\n       <ul class="list seller__list">\n         <li>\n              <a class="seller__link" href="${p[0].url}" target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Amazon">\n                <img src="${t(_)}" alt="amazon" />\n              </a>\n            </li>\n            <li>\n              <a class="seller__link" href="${p[1].url}" target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Apple-books">\n                <img src="${t(m)}" alt="apple-books" />\n              </a>\n            </li>\n            <li>\n              <a class="seller__link" href="${p[4].url}" target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Bookshop">\n                <img src="${t(y)}" alt="bookshop" />\n              </a>\n            </li>\n       </ul>\n       </div>\n    </div>\n    <button class="btn modal__btn-add" type="button"\n    data-bookId='${o}'>${a?"remove from the shopping list":"add to shopping list"}</button>\n    <button class="btn modal__btn-remove" data-bookId='${o}' type="button">remove from the shopping list</button>\n    <p class="modal__btn-text">Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.</p>\n    <p class="modal__btn-need-login">First you need to login</p>`;f.innerHTML=u;const b=document.querySelector(".modal__btn-remove"),g=document.querySelector(".modal__btn-need-login"),k=document.querySelector(".modal__btn-add"),h=document.querySelector(".modal__btn-text");function e(t){x().books.map((o=>{o===t&&(b.style.display="block",k.style.display="none",h.style.display="none")}))}function n(){x()||(g.style.display="block",b.style.display="none",k.style.display="none")}k.addEventListener("click",(t=>{const o=t.target.getAttribute("data-bookId");(0,v.addbooktosl)(o),b.style.display="block",k.style.display="none",h.style.display="block",setTimeout((()=>{h.style.display="none"}),6500)})),b.addEventListener("click",(t=>{const o=t.target.getAttribute("data-bookId");(0,v.removeBook)(o),b.style.display="none",k.style.display="block",h.style.display="none"})),n(),e(o);!function(t){for(let o=0;o<t.length;o++){t[o].addEventListener("click",(function(t){t.preventDefault(),window.open(this.href)}))}}(document.querySelectorAll(".modal__link"))}catch(q){console.log(q)}}(e)})),E.addEventListener("click",L),console.log(x());const C="https://books-backend.p.goit.global/books/"}();
//# sourceMappingURL=index.d5774658.js.map
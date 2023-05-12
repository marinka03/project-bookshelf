const containerEl = document.querySelector('.js-container');
const listEl = document.querySelector('.js-listInShopping');

const arrToShoppingList = [];
const array = [];

apiFetch().then(data =>
  containerEl.insertAdjacentHTML('beforeend', createMarkupTopBooks(data))
);

containerEl.addEventListener('click', addToShoppingList);

function addToShoppingList(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains('js-addToShopping')) {
    return;
  }

  const li = evt.target.closest('.js-card');
  const id = li.dataset.id;

  apiFetchCate(id).then(data => {
    const inShoppingList = array.some(item => li.dataset.id === item._id);
    if (inShoppingList) {
      return;
    }
    array.push(data);
    console.log(array);
    listEl.innerHTML = createMarkupBooksInShopping(array);
  });

  const mas = document.querySelectorAll('.js-card');

  const findEl = [...mas].find(item => item.dataset.id === id);

  //   const inShoppingList = arrToShoppingList.some(
  //     item => item.dataset.id === findEl.dataset.id
  //   );

  //   if (inShoppingList) {
  //     return;
  //   }
  //   const inShoppingList = arrToShoppingList.some(
  //     item => li.dataset.id === item.dataset.id
  //   );
  //   if (inShoppingList) {
  //     return;
  //   }
  //   arrToShoppingList.push(li);
  //   console.log(arrToShoppingList);

  // listEl.insertAdjacentElement('beforeend', arrToShoppingList[0])
  //   listEl.append(...arrToShoppingList);
}

function apiFetch() {
  return fetch('https://books-backend.p.goit.global/books/top-books').then(
    resp => resp.json()
  );
}

function createMarkupTopBooks(books) {
  return books
    .map(book => {
      const booksArr = book.books
        .map(
          bookOne => `<li class='js-card' data-id=${bookOne._id}>
				<h2>${book.list_name}</h2>
				<img src="${bookOne.book_image}" alt="" width='180'>
				<p>${bookOne.author}</p>
				<button class='js-addToShopping'>Add to shopping list</button>
			</li>`
        )
        .join('');
      return `<ul>${booksArr}</ul>`;
    })
    .join('');
}

// // const listEl = document.querySelector('.js-listInShopping');

function apiFetchCate(id) {
  return fetch(`https://books-backend.p.goit.global/books/${id}`).then(resp =>
    resp.json()
  );
}

function createMarkupBooksInShopping(books) {
  return books
    .map(
      book =>
        `<li>
				<img src="${book.book_image}" alt="${book.title}" width='116'>
				<h2>${book.title}</h2>
				<h3>${book.list_name}</h3>
				<p>${book.description}</p>
				<h3>${book.author}</h3>
				<button>Delete</button>
				<a href="${book.amazon_product_url}">Amazon</a>
				<a href="${book.buy_links[1].url}">Book1</a>
				<a href="${book.buy_links[2].url}">Book2</a>
			</li>`
    )
    .join('');
}

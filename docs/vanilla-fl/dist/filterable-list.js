'use strict';

/* Filterable List */
var input = document.getElementById('filterInput'),
    inputValue = void 0,
    ul = void 0,
    li = void 0,
    a = void 0;

input.addEventListener('input', filteredOut);

function filteredOut() {
  inputValue = input.value.toUpperCase();
  ul = document.getElementById('contacts');
  li = ul.querySelectorAll('li.item');

  li.forEach(function (item) {
    a = item.querySelectorAll('a')[0];
    if (a.innerHTML.toUpperCase().indexOf(inputValue) > -1) item.style.display = '';else item.style.display = 'none';
  });
}
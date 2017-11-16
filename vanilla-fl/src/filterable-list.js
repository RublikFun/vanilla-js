/* Filterable List */
let input = document.getElementById('filterInput'),
  inputValue, ul, li, a;

input.addEventListener('input', filteredOut);

function filteredOut() {
  inputValue = input.value.toUpperCase();
  ul = document.getElementById('contacts');
  li = ul.querySelectorAll('li.item');

  li.forEach(function(item) {
    a = item.querySelectorAll('a')[0];
    if (a.innerHTML.toUpperCase().indexOf(inputValue) > -1) item.style.display = ''; 
    else item.style.display = 'none';
  });
}
// Starting JS
let app = document.querySelector('#app');
let listItem = document.querySelector('#list-item');
let form = document.querySelector('form');
let item = document.querySelector('input');
// let submit = document.querySelector('button');

let lines = [];

form.addEventListener('submit', (e) => {
  let listText = item.value;
  console.log(listText);
  e.preventDefault();
  lines.push(listText);
  item.focus();
  console.log(lines);
});

// create a list element
let list = document.createElement('ul');

// Loop through each line and add it to the list
for (let line of lines) {
  // Get and clone the inner content
  // Then, find the li element
  let li = listItem.content.cloneNode(true).querySelector('li');

  // Add the line text, then add it to the list
  li.textContent = line;
  list.append(li);
}

// Add the list to the UI
app.append(list);

function generateMenu(content) {

  // 1. Create an ul element called menu
  let menu = document.createElement('ul')
  let foodArray = ['Fried rice', 'Noodles', 'Beef noodles', 'Dumplings', 'Burger']
  // 2. 5 items li, each add to menu
  foodArray.forEach(food => {
    let li = document.createElement('li');
    li.innerText = food;
    menu.appendChild(li);
  })
  content.replaceChildren(menu)
}

export default generateMenu
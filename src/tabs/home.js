
function generateHome(content) {
  // 1. Create a new div called home
  let home = document.createElement('div');
  // 2. Add lorem ipsum text to the home div
  home.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates blanditiis nobis hic autem, magni tempora necessitatibus ab fugiat optio inventore consectetur, error aliquid. Enim alias modi quas minus cupiditate earum?'
  content.replaceChildren(home)
}

export default generateHome
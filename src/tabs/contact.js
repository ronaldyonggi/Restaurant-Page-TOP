function generateContact(content) {
  let phone = document.createElement('p')
  phone.innerText = '123-456-7890'

  let email = document.createElement('p')
  email.innerText = 'fourchoices@gmail.com'

  let address = document.createElement('p')
  address.innerText = '999 Teddy St, Bear York, NY'

  let elements = [phone, email, address];
  let container = document.createElement('div')
  elements.forEach(element => container.appendChild(element))

  content.replaceChildren(container);
}

export default generateContact
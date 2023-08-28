/* Desenvolva sua lógica aqui ... */
import { products, categories } from "./productsData.js";
import {darkMode} from "./theme.js"

const createCard = (product) => {
  const createCardLi = document.createElement("li")
  const createCardImg = document.createElement("img")
  const createCardP1 = document.createElement("p")
  const createCardH2 = document.createElement("h2")
  const createCardSpan = document.createElement("span")
  const createCardP2 = document.createElement("p")
  const createCardbutton = document.createElement("button")

  createCardLi.classList.add("list__product")
  createCardH2.classList.add("price__h2")
  createCardSpan.classList.add("price__span")
  createCardbutton.classList.add("price__button")

  createCardP1.innerText = `${product.band} ${product.year}`

  createCardH2.innerText = product.title
  createCardP2.innerText = `R$ ${product.price}.00`
  createCardbutton.innerText = "Comprar"

  createCardImg.src = product.img
  createCardImg.alt = product.title


  createCardSpan.append(createCardP2, createCardbutton)
  createCardLi.append(createCardImg, createCardP1, createCardH2, createCardSpan)

  return createCardLi

}




const renderbutton = (categories) => {
  const listRender = document.querySelector(".filter__select")

  categories.forEach(category => {
    const libutton = document.createElement("li")
    const buttonCategory = document.createElement("button")

    buttonCategory.innerText = category

    buttonCategory.classList.add("button__category")

    libutton.append(buttonCategory)
    listRender.append(libutton)
  });

}
renderbutton(categories)


const rendercards = (albumArray) => {
  const albumlist = document.querySelector(".render__cards")
  albumlist.innerHTML = ""

  albumArray.forEach(album => {
    const card = createCard(album)
    albumlist.append(card)
    return card
  })
}
rendercards(products)




const eventButton = (categoryArray, productArray) => {
  const buttons = document.querySelectorAll(".button__category");
  const valueFilter = document.querySelector(".valor__filter")
  const input = document.querySelector("#filter__imput")
  const cardsContainer = document.querySelector(".render__cards")


  let filteredArray = products
  let categoryIndex = 0
  let inputValue = input.value

  valueFilter.innerText = `Até R$ ${inputValue}`

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      categoryIndex = index

      if (categoryIndex === 0) {
        filteredArray = productArray.filter(product => product.price <= inputValue)
      } else {
        filteredArray = productArray.filter(product => product.category === categoryIndex && product.price <= inputValue)
      }

      rendercards(filteredArray, cardsContainer)

    })
  })

  input.addEventListener("input", (event) => {
    inputValue = event.target.value;
    valueFilter.innerText = `Até R$ ${Number(inputValue).toFixed(2)}`

    if (categoryIndex === 0) {
      filteredArray = productArray.filter(product => product.price <= inputValue)
    } else {
      filteredArray = productArray.filter(product => product.category === categoryIndex && product.price <= inputValue)
    }
    valueFilter.innerText = `Até R$ ${input.value}`

    rendercards(filteredArray, cardsContainer)

  });
}
eventButton(categories, products)
darkMode()

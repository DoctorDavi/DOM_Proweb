// base obj
const product = {
  crazy: {
    name: 'Crazy',
    price: 31000,
    amount: 0,
    img: 'images/products/burger-1.png',
    get totalSum() {
      return this.amount * this.price
    }
  },
  light: {
    name: 'Light',
    price: 26000,
    amount: 0,
    img: 'images/products/burger-2.png',
    get totalSum() {
      return this.amount * this.price
    }
  },
  cheeseburger: {
    name: 'CheeseBurger',
    price: 29000,
    amount: 0,
    img: 'images/products/burger-3.png',
    get totalSum() {
      return this.amount * this.price
    }
  },
  dburger: {
    name: 'dBurger',
    price: 24000,
    amount: 0,
    img: 'images/products/burger-4.png',
    get totalSum() {
      return this.amount * this.price
    }
  },
}

// .active - показывает какой-либо скрытый элемент

const basketBtnCount = document.querySelector('.warapper__navbar-count'),
  basketBtn = document.querySelector('.wrapper__navbar-btn'),
  basketModal = document.querySelector('.wrapper__navbar-basket'),
  basketBtnClose = document.querySelector('.wrapper__navbar-close'),
  basketChecklist = document.querySelector('.wrapper__navbar-checklist'),
  totalPriceBasket = document.querySelector('.wrapper__navbar-totalprice'),
  productBtns = document.querySelectorAll('.wrapper__list-btn')

productBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    plusOrMinus(btn)
  })
})

function plusOrMinus(btn) {
  // closest(selector) - выбирает ближайшего родителя дочернего элемента 
  let parent = btn.closest('.wrapper__list-card'),
    parentId = parent.getAttribute('id')
  product[parentId].amount++
  basket()
}

function basket() {
  const productArray = []
  for (const key in product) {
    // productObject
    const po = product[key]
    // toLowerCase() - преобразует большие буквы в маленькие 
    // toUpperCase() - преобразует маленькие буквы в заглавные  
    const productCard = document.querySelector(`#${po.name.toLowerCase()}`),
      parentIndicator = productCard.querySelector('.wrapper__list-count')
    if (po.amount) {
      productArray.push(po)
      parentIndicator.classList.add('active')
      parentIndicator.innerHTML = po.amount
    } else {
      parentIndicator.classList.remove('active')
      parentIndicator.innerHTML = 0
    }
  }
  let allCount = totalCountProduct()
  if (allCount) {
    basketBtnCount.classList.add('active')
  } else {
    basketBtnCount.classList.remove('active')
  }
  basketBtnCount.innerHTML = allCount
}

function totalCountProduct() {
  let total = 0
  for (const key in product) {
    total += product[key].amount
  }
  return total
}

basketBtn.addEventListener('click', () => {
  basketModal.classList.toggle('active')
})

basketBtnClose.addEventListener('click', () => {
  basketModal.classList.remove('active')
})

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
  productBtns = document.querySelectorAll('.wrapper__list-btn'),
  btnCard = document.querySelector('.wrapper__navbar-bottom'),
  print__body = document.querySelector('.print__body'),
  print__footer = document.querySelector('.print__footer')

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
  totalPriceBasket.innerHTML = totalSumProduct() + ' сум'
  basketChecklist.innerHTML = ''
  productArray.forEach(prod => basketChecklist.innerHTML += cardItem(prod))
}

function totalCountProduct() {
  let total = 0
  for (const key in product) {
    total += product[key].amount
  }
  return total
}

function totalSumProduct() {
  let total = 0
  for (const key in product) {
    total += product[key].totalSum
  }
  return total.toLocaleString()
}

function cardItem(prod) {
  let { name, totalSum: price, amount, img } = prod
  return `
    <div class="wrapper__navbar-product">
      <div class="wrapper__navbar-info">
        <img src="${img}" class="wrapper__navbar-productImage" alt="" />
        <div>
          <div class="wrapper__navbar-infoName">${name}</div>
          <div class="wrapper__navbar-infoPrice">${price.toLocaleString()} сум</div>
        </div>
      </div>
      <div class="wrapper__navbar-option" id="${name.toLowerCase()}_card">
        <button class="wrapper__navbar-symbol fa-minus" data-symbol="-">-</button>
        <output class="wrapper__navbar-count">${amount}</output>
        <button class="wrapper__navbar-symbol fa-plus" data-symbol="+">+</button>
      </div>
    </div>
  `
}

basketBtn.addEventListener('click', () => {
  basketModal.classList.toggle('active')
})

basketBtnClose.addEventListener('click', () => {
  basketModal.classList.remove('active')
})

// показывает объект окна браузера 
window.addEventListener('click', e => {
  let btn = e.target
  if (btn.classList.contains('wrapper__navbar-symbol')) {
    let attr = btn.getAttribute('data-symbol'),
      parent = btn.closest('.wrapper__navbar-option')
    if (parent) {
      const parentId = parent.getAttribute('id').split('_')[0]
      if (attr == '-') product[parentId].amount--
      else if (attr == '+') product[parentId].amount++
      basket()
    }
  }
})

btnCard.addEventListener('click', () => {
  print__body.innerHTML = ''
  for (const key in product) {
    const el = product[key]
    const { name, totalSum, amount } = el
    print__body.innerHTML += `
      <div class="print__body-item">
        <div class="print__body-item_name">
          <span>${name}</span>
          <span>${amount}</span>
        </div>
        <p class="print__body-item_price">${totalSum.toLocaleString()} сум</p>
      </div>
    `
  }
  print__footer.innerHTML = totalSumProduct() + ' сум'
  window.print()
})

// console.dir(document);

// console.dir(item);

// item.style.background = 'red'
// item.style.height = '400px'

// item.addEventListener('mouseover', function () {
//     this.style.background = 'red'
// })

// item.addEventListener('mouseout', () => {
//     item.style.background = 'green'
// })

// let item = document.querySelector('.item')

// let body = document.querySelector('#ravshan')
// console.dir(body);

// let img = document.querySelector('.img')

// console.log(img.hasAttribute('src'));

// if (!img.hasAttribute('src')) {
//     img.setAttribute('src', './img.jpg')
//     img.setAttribute('data', 'orange')
//     img.classList.add('bobic')
// }

// if (img.classList.contains('img')) {
//     img.classList.remove('img')
// }

// let title = document.querySelector('.item')

// title.addEventListener('click', function () {
// if (!this.classList.contains('added')) {
//     this.classList.add('added')
// } else {
//     this.classList.remove('added')
// }
//   this.classList.toggle('added')
// })


// если мы хотим собрать несколько элементов в одну коллекцию мы берем метод
// querySelectorAll - собирает html коллекцию в объект похожий на массив 
// коллекция - список - list - массив - array
// псевдомассив - объект похожий по структуре на массив но не имеющий большую 
// часть методов массива

// let cards = document.querySelectorAll('.card')

// for (let i = 0; i < cards.length; i++) {
//   const el = cards[i]
//   el.style.background = el.getAttribute('data-bg')

//   el.addEventListener('click', function () {
//     body.style.background = el.getAttribute('data-bg')
//   })
// }

function randColor() {
  // Math.floor(Math.random() * 256) - рандомный цвет 
  let r = Math.floor(Math.random() * 256)
  let g = Math.floor(Math.random() * 256)
  let b = Math.floor(Math.random() * 256)
  return `rgb(${r}, ${g}, ${b})`
}

let button = document.querySelector('.btn')

button.addEventListener('click', function() {
  body.style.background = randColor()
})

// DOM - DOCUMENT OBJECT MODEL
// document - обращается к dom дереву
// console.dir(document);

// console.dir() - открывает внутренние дирекции объекта 

// querySelector()
// тег - название тега 
// класс - .название класса 
// id - #название id

// console.dir(item);

// item.style.background = 'red'
// item.style.height = '400px'

// element.addEventListener('тип события', function() {}) - добавить слушателя событий 
// function() {} контекст this доступен 
// () => {} контекст this не доступен 
// click = клик
// dblclick = двойной клик
// mouseover = при наведении на элемент 
// mouseout = при отводе мыши с элемента 
// item.addEventListener('mouseover', function () {
//   this.style.background = 'red'
// })

// item.addEventListener('mouseout', () => {
//   item.style.background = 'green'
// })

// let img = document.querySelector('.img')

// getAttribute() - получает значение внутри указанного атрибута
// setAttribute() - назначает новый указанный атрибут 
// hasAttribute() - проверяет есть ли указанный атрибут 
// removeAttribute() - удалеят указанный атрибут 
// el.classList - обращается к списку классов элемента имеет свои методы 
// el.classList.add() - добавляет класс
// el.classList.remove() - удаляет класс
// el.classList.contains() - проверяет на наличие указанного класса 
// el.classList.toggle() - работает как переключатель класса 
// if (!img.hasAttribute('src')) {
//   img.setAttribute('src', './img.jpg')
//   img.setAttribute('data', 'orange')
//   img.classList.toggle('bobic')
// }

// if (img.classList.contains('img')) {
//   img.classList.remove('img')
// }

let title = document.querySelector('.item')

title.addEventListener('click', function() {
  // if (!this.classList.contains('added')) {
  //   this.classList.add('added')
  // } else {
  //   this.classList.remove('added')
  // }
  this.classList.toggle('added')
})

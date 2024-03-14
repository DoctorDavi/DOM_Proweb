const hour = document.querySelector('.h'),
  min = document.querySelector('.m'),
  sec = document.querySelector('.s'),
  hoursNumber = document.querySelector('.hours'),
  minutesNumber = document.querySelector('.minutes')

// new Date() - возвращает текущее время указанное на компьютере

// рекурсия - это когда функция вызывает саму себя 
// callback - функция вызывающая другую функцию 

function clock() {
  let time = new Date(),
    seconds = time.getSeconds() * 6,
    minutes = time.getMinutes() * 6,
    hours = time.getHours() * 30

  sec.style = `transform: rotate(${seconds}deg); transition: 1s linear;`
  min.style = `transform: rotate(${minutes}deg); transition: 1s linear;`
  hour.style = `transform: rotate(${hours}deg); transition: 1s linear;`

  // setTimeout(функция, милисекунды) - задержка вызова функции 

  // innerHTML - позволяет выводить то что находится внутри html тега 
  // менять его значение и писать в нем html код 

  hoursNumber.innerHTML = time.getHours() < 10
    ? '0' + time.getHours()
    : time.getHours()
  minutesNumber.innerHTML = time.getMinutes() < 10
    ? '0' + time.getMinutes()
    : time.getMinutes()

  setTimeout(() => clock(), 1000);
}

clock()

const links = document.querySelectorAll('.tabsItem'),
  tabs = document.querySelectorAll('.tabsContentItem')


links.forEach((item, i) => {
  item.addEventListener('click', (e) => {
    // e.preventDefault() - убирает функции html с элемента 
    e.preventDefault()

    links.forEach((link, index) => {
      link.classList.remove('active')
      tabs[index].classList.remove('active')
    })

    changeTab(item, tabs[i])
  })
})

// декомпозиция - разбиение одной задачи на несколько других более
// мелких задач

function changeTab(el, el2) {
  el.classList.add('active')
  el2.classList.add('active')
}

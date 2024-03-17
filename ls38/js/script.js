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

  if (time.getSeconds() == 0) {
    sec.style = `transform: rotate(${seconds}deg); transition: none;`
    min.style = `transform: rotate(${minutes}deg); transition: none;`
    hour.style = `transform: rotate(${hours}deg); transition: none;`
  } else {
    sec.style = `transform: rotate(${seconds}deg); transition: 1s linear;`
    min.style = `transform: rotate(${minutes}deg); transition: 1s linear;`
    hour.style = `transform: rotate(${hours}deg); transition: 1s linear;`
  }

  // setTimeout(функция, милисекунды) - задержка вызова функции 

  // innerHTML - позволяет выводить то что находится внутри html тега 
  // менять его значение и писать в нем html код 

  hoursNumber.innerHTML = time.getHours() < 10
    ? '0' + time.getHours()
    : time.getHours()
  minutesNumber.innerHTML = time.getMinutes() < 10
    ? '0' + time.getMinutes()
    : time.getMinutes()

  setTimeout(() => clock(), 200);
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


const hoursWatch = document.querySelector('.stopwatch__hours'),
  minutesWatch = document.querySelector('.stopwatch__minutes'),
  secondsWatch = document.querySelector('.stopwatch__seconds'),
  watchBtn = document.querySelector('.stopwatch__btn'),
  watchInfo = document.querySelector('.tabsLink__span')


watchBtn.addEventListener('click', function () {
  if (this.innerHTML == 'start') {
    this.innerHTML = 'stop'
    watchInfo.classList.add('active')
    let i = 0
    setTimeout(() => stopWatch(this, i), 1000)
  } else if (this.innerHTML == 'stop') {
    this.innerHTML = 'clear'
    watchInfo.classList.remove('active')
    watchInfo.classList.add('active_clear')
  } else {
    this.innerHTML = 'start'
    watchInfo.classList.remove('active_clear')
    hoursWatch.innerHTML = 0
    minutesWatch.innerHTML = 0
    secondsWatch.innerHTML = 0
  }
})

function stopWatch(el, i) {
  if (el.innerHTML == 'stop') {
    if (i == 59) {
      i = 0
      secondsWatch.innerHTML = i
      if (minutesWatch.innerHTML == 59) {
        minutesWatch.innerHTML = 0
        hoursWatch.innerHTML++
      } else {
        minutesWatch.innerHTML++
      }
    } else {
      i++
      secondsWatch.innerHTML = i
    }
    setTimeout(() => stopWatch(el, i), 1000);
  }
  // stopWatch(el, i)
  // setInterval(() => stopWatch(el, i), 1000);
}

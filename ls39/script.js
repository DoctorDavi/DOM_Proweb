// Оператор Spread - Rest
// Деструктуризация 

// Spread - оператор расширения 

// это вытаскивать элементы из массива и объединять их создавая копию 
// массива которого вы берете 
// ...Spread оператор указывается как 3 точки
// cars = regular

// let regular = ['VW', 'Skoda', 'Audi']
// let electric = ['tesla', 'BYD', 'ZIC']
// let cars = [].concat(electric)
// объявление ссылки на другой массив 
// cars[0] = 'GM'
// let cars2 = [...regular, 'Mercedes', ...electric]
// cars2[0] = 'BMW'

// console.log(regular);
// console.log(cars2);

// let word = 'helloWorld!'
// let letters2 = word.split('')
// const letters = [...word]
// console.log(letters);
// console.log(letters2);

// const cars3 = document.querySelectorAll('.cars span')

// const numbers = [1, 2, 3]
// const auto = [...cars3, ...numbers]

// console.log(cars3);
// console.log(auto);

// REST визуально он напоминает spread ...REST
// если spread - берет элементы из массива и распаковывает или вливает 
// их по одному в другой массив, то rest наоборот берет нужные элементы 
// и запаковывает их в массив 

// 2 типа задач где работает rest 
// функции
// деструктуризация 

// function convert(rate, ...sums) {
//   return sums.map(sum => sum / rate)
// }

// console.log(convert(12500, 625000, 1250000, 1000000));

// деструктуризация - это синтаксис
// позволяет получить значение нужных элементов из массива
// или свойства объектов (ключа) и присвоить их переменным

// let name = pet.name,
//   year = pet.year,
//   type = pet.type
// name = 'qwe'
// console.log(pet);

// console.log(name, year, type);

// console.log(name, year, type);

// const pet = {
//   name: 'Tyson',
//   year: 2023,
//   type: 'золотистый ретривер',
//   size: {
//     length: '1.5m',
//     height: '1.2m',
//     width: '0.4m',
//   }
// }
// let { name, year, type } = pet

// let { length, height, width } = pet.size

// console.log(length, height, width);

// let cars = {
//   name: 'Tesla',
//   year: 2020,
//   type: 'electrocar',
//   size: {
//     length: '2.4m',
//     height: '1.5m',
//     width: '1.2m',
//   }
// }

// const { name: newName, year: newYear, type: newType } = pet
// console.log(newName);
// console.log(newYear);
// console.log(newType);

// let { width: w, length: l, height: h } = cars.size
// console.log(w, l, h);
// console.log(cars.size.width, cars.size.length, cars.size.height);

const laptop = ['hp', 2022, 'silver']

let [laptopHpName, laptopYear, laptopColor] = laptop
console.log(laptopHpName, laptopYear, laptopColor);

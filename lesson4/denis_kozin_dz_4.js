//1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе объект,
// в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 мы должны получить
// следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее
// сообщение с помощью console.log и вернуть пустой объект.

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

function makeAnObj(num){
    return Object.assign({}, {
        hundreds: Math.floor(num / 100),
        dozens: Math.floor((num - Math.floor(num / 100) * 100) / 10),
        units: (num - Math.floor(num / 100) * 100 -  Math.floor((num - Math.floor(num / 100) * 100) / 10) * 10)
    })
}

console.log(makeAnObj(randomInteger(0, 999)))

// output: { hundreds: 8, dozens: 5, units: 9 }

///2.Продолжить работу с интернет-магазином:
// 2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
// 2.2. Реализуйте такие объекты.
// 2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.

let cartReal = {goods:[{name:'tovar1', quantity: 2, price:10}, {name:'tovar2', quantity: 10, price:50}, {name:'tovar3', quantity: 7, price:30}],
                countBasketPrice: function(){
    return this.goods.map(s => s.price * s.quantity).reduce((a, b)=> a + b, 0)
                }
}

console.log(cartReal.countBasketPrice())

// output: 730

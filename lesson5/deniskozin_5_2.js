//2. Сделать генерацию корзины динамической: верстка корзины не должна находиться в
// HTML-структуре. Там должен быть только div, в который будет вставляться корзина,
// сгенерированная на базе JS:
// 2.1. Пустая корзина должна выводить строку «Корзина пуста»;
// 2.2. Наполненная должна выводить «В корзине: n товаров на сумму m рублей».

// Во - первых, переделал корзину в соответствии с вашим замечанием, на reduce - only, хотя мне лично больше нравился
// старый вариант. Кстати, непонятно почему на уроке цена не умножалась на кол-во, ну правда там все по 1 шт были
let cartReal = {goods:[{name:'tovar1', quantity: 2, price:10}, {name:'tovar2', quantity: 10, price:50},
        {name:'tovar3', quantity: 7, price:30}],
    countBasketPrice: function(){
        return this.goods.reduce((tPrice, crItem)=> tPrice += crItem.price * crItem.quantity, 0)
    }
}
function cartOut() {
    if (cartReal) {
        document.write('В корзине ' + cartReal.goods.length + ' товаров на сумму ' +
            cartReal.countBasketPrice() + ' руб.')
        let cr = document.createElement('div')
        document.body.appendChild(cr);
        for (let m in cartReal.goods) {
            let good = document.createElement('div')
            good.innerText = cartReal.goods[m].name + ' ' + cartReal.goods[m].quantity + ' ' +
                cartReal.goods[m].price
            cr.appendChild(good)
        }

    } else document.write('Корзина пуста')
}

cartOut()

// не знаю, верно ли понял задание, жду ревью. Стили добавлять не стал, так как
// на уроке было сказано, что этого делать не нужно

//1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

function takePrimeNumbers(min, max) {
    if (min < 2) {
        return 'Минимальный нижний предел диапазона равен 2'
    }
    if (!Number.isInteger(min) || !Number.isInteger(max)) {
        return 'Границы диапазонов должны быть числами'
    }
    nextNumber:  // Продемонстрируем показанную на уроке метку(label)
    for (let i = min; i <= max; i ++){

        for(let k = 2; k <= Math.sqrt(i); k++) {
            if (!(i % k)) continue nextNumber
        }
        console.log(i)
    }
}


takePrimeNumbers(2, 100)

// 2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины.
// Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
// Товары в корзине хранятся в массиве. Задачи:
// a) Организовать такой массив для хранения товаров в корзине;
// b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.



let cartReal = [['tovar1', 2, 10], ['tovar2', 10, 50], ['tovar3', 7, 30]]

function countBasketPrice(cart) {
    return (cart.map(s => s[1] * s[2]).reduce(function (a, b){return a + b}, 0))
    // return eval(cart.map(s => s[1] * s[2]).join('+')) - не рекомендуется, eval вообще плохой вариант
}

console.log(countBasketPrice(cartReal))

//3.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
//
// for(…){// здесь пусто}

for (let i = 0; i <= 9; console.log(i++)){} // не нравится ему такое издевательство

//4. *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:

for (let i = 1; i <= 20; i++){
    console.log('x'.repeat(i))
}

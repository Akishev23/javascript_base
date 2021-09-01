//3.1. Создать массив товаров (сущность Product);
// 3.2. При загрузке страницы на базе данного массива генерировать вывод из него.
// HTML-код должен содержать только div id=”catalog” без вложенного кода.
// Весь вид каталога генерируется JS.

// А чем это задание отличается от задания (2)? или я неверно его понял?

let Product = {goods:[{name:'tovar1', quantity: 2, price:10}, {name:'tovar2', quantity: 10, price:50},
        {name:'tovar3', quantity: 7, price:30}]}

function prOut() {
    if (Product) {
        document.write('Каталог товаров магазина X')
        let cr = document.createElement('div')
        document.body.appendChild(cr);
        for (let m in Product.goods) {
            let good = document.createElement('div')
            good.innerText = Product.goods[m].name + ' ' + Product.goods[m].quantity + ' ' +
                Product.goods[m].price
            cr.appendChild(good)
        }

    } else document.write('Каталог пуст')
}

prOut()

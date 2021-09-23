const catItem = {
    render(good) {
        return `<div class="good">
                    <div class='art'><b>Артикул</b>: ${good.id_product}</div>
                    <div class='name'><b>Наименование</b>: ${good.product_name}</div>
                    <div class="price"><b>Цена за шт.</b>: ${good.price}</div>
                    <div class="good-qty"><form><input type="number" min="1" value="value"> шт</form></div>
                    <div><button class="good-btn">Купить</button></div>
                    
                </div>`;
    }
}

const cat = {
    catListBlock: null,
    catItem,
    goods: [
        {
            id_product: 'AR550C-2C6GE',
            product_name: 'AR550C-2C6GE Маршрутизатор Huawei AR550C-2C6GE',
            price: 29800
        },
        {
            id_product: 'AR6020D',
            product_name: 'AR6020D МФУ Sharp AR-6020D А3',
            price: 28000
        },
        {
            id_product: 'AS-1010S-MR',
            product_name: 'AS-1010S-MR Сервер Supermicro AS-1010S-MRB-1U, 1xOpteron 100 Series',
            price: 21300
        },
    ],
    init() {
        this.catListBlock = document.querySelector('.cat-list');
        this.render();
        this.buy()
    },
    render() {
        if (this.goods.length) {
            this.goods.forEach(good => {
                this.catListBlock.insertAdjacentHTML('beforeend', this.catItem.render(good));
            });
        } else {
            this.catListBlock.textContent = 'Каталог пока пуст';
        }
    },
    buy: function () {
        document.querySelector('.cat-list').addEventListener('click', function (event) {
            let tagName = event.target.tagName.toLowerCase()

            if (tagName === 'button') {
                let pNode = event.target.parentNode.parentNode
                let art = pNode.querySelector('.art').textContent.split(':')[1]
                if (!localStorage.getItem(art)) {
                    localStorage.setItem(art, JSON.stringify({
                        id_product: art,
                        product_name: pNode.querySelector('.name').textContent.split(':')[1],
                        price: +pNode.querySelector('.price').textContent.split(':')[1],
                        quantity: +pNode.querySelector('input').value
                    }))
                } else
                        localStorage.setItem(art, JSON.stringify({
                            id_product: art,
                            product_name: pNode.querySelector('.name').textContent.split(':')[1],
                            price: +pNode.querySelector('.price').textContent.split(':')[1],
                            quantity: +JSON.parse(localStorage.getItem(art)).quantity + +pNode.querySelector('input').value
                    }
                ))
            }
        })
    }
};

cat.init();

// Задание понял как необходимость создать два HTML и наладить связь между ними. Не придумал ничего лучше, чем
// использовать localstorage. Повесил eventlistener на всю страницу единым событием на все кнопки сразу
// разбил файл с урока на две части и слегка их поменял, ну и осталось пару методов добавить. Не уверен, что вышло
// читаемо но старался упростить. Чтобы разграничить покупки от разных пользователей, в Localstorage можно завести ключи
// с id пользака, скрипты станут всего лишь чуть сложнее. Не очень понял, что значит "обновление без перезагрузки". Вероятно,
// надо jquery запрос написать? но мы вроде его еще не проходили. Жду комменты. Не очень ясно, кстати, зачем это нужно,
//по сути ведь корзина будет открываться каждый раз заново, а значит и перерисовываться будет по клику на ссылку.
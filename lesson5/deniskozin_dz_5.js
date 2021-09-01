//1. Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-теги по своему желанию.
// Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки. Строки должны
// нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H. (использовать
// createElement / appendChild)

//Можно пойти по пути таблицы, вроде
//let table = document.createElement("table");
// for (let i = 1; i < 9; i++) {
//     let tr = document.createElement('tr');
//     for (let j = 1; j < 9; j++) {
//         let td = document.createElement('td');
//         if (i%2 == j%2) {
//             td.className = "white";
//         } else {
//             td.className = "black";
//         }
//         tr.appendChild(td);
//     }
//     table.appendChild(tr);
// }
// document.body.appendChild(table);

// Потом просто добавить файл css и туда добавить стили. Неинтересно.
// Вот эта реализация - куда лучше. Мне прям стало интересно в ней разобраться.
function chMate() {
    let field = document.createElement('div');
    document.body.appendChild(field);

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            let css = j ? {} : {
                clear: 'left'
            }
            let content = ''
            if (i == 0 || i == 9)
                content = j > 0 && j < 9 ? 'ABCDEFGH'.charAt(j - 1) : null
            else if (j == 0 || j == 9)
                content = 9 - i
            else css.background = (j + i) % 2 ? 'black' : 'white'

            let node = document.createElement('div')
            css.width = '20px'
            css.height = css.width
            css.textAlign = 'center'
            css.float = 'left'
            for (let m in css) node.style[m] = css[m]
            if (content)
                node.innerHTML = content
            field.appendChild(node)
        }
    }
}

chMate()
// Очень красиво! Хотя не уверен, что рационально. По сути мы добавляем дочерние элементы(ноды) сразу
// со стилями исходя из их положения и номеров и того, есть ли контент
// жду отзыв


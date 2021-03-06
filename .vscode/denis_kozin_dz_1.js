//1. Задать температуру в градусах по Цельсию. Вывести в alert соответствующую температуру в градусах по Фаренгейту. Подсказка: расчёт идёт по формуле: Tf = (9 / 5) * Tc + 32, где Tf – температура по Фаренгейту, Tc – температура по Цельсию//

function tFar(t) {
    return (9 / 5) * t + 32
}

tf = tFar(50).toLocaleString()
console.log(tf)

//2. Работа с переменными. Объявить две переменные: admin и name. Записать в name строку ""Василий""; Скопировать значение из name в admin. Вывести admin (должно вывести «Василий»).//

let admin = ''
let name = 'Василий'
admin = name
console.log(admin)

//3. *Чему будет равно JS-выражение 1000 + "108"//

let s = 1000 + '108'
console.log(s)

// 1000108, так как если хотя бы один аргумент в выражении - строка - остальные значения тоже преобразуются в строку и при обработке оператора "+" конкатенируются

//4. *Самостоятельно разобраться с атрибутами тега script (async и defer)//

//async - делает скрипт независимым, браузер спокойно продолжает строить DOM вне зависимости от скрипта и итогов его выполнения. Никто никого не ждет. DOMContentLoaded может случиться до скрипта и после. Порядок assync скриптов не соблюдается, не ждут друг друга //
// defer - сообщает браузеру, что ждать не нужно. можно продолжать обработку страницы и запускать скрипт тогда, когда он загрузится. Всегда выполняются, когда дерево DOM готово, но до события DOMContentLoaded. Скрипты defer сохраняют порядок друг относительно друга//
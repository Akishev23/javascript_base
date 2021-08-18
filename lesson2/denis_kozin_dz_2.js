// 1. Почему код даёт именно такие результаты?

/* var a = 1, b = 1, c, d;
c = ++a; console.log(c);           // 2 Так как инкремент указан в виде префикса, возвращается новое значение переменной
d = b++; console.log(d);           // 1 Так как инкремент указан в виде постфикса, возвращается старое значение переменнной, при этом сама переменная увеличивается на единицу, что видно в консоли, но уже после возврата
c = (2+ ++a); console.log(c);      // 5 В операции (1) мы увеличили а на 1 инкрементом, поэтому а = 2. 2 + 3 = 5
d = (2+ b++); console.log(d);      // 4 Тут b = 2 за счет инкремента из (2), инкремент записан в постфиксе, поэтому 2 + 2 = 4
console.log(a);                    // 3 Инкрементом увеличили а еще на 1 в (3)
console.log(b);                    // 3 Инкрементом увеличили b еще на 1 в (4) */

//2. Чему будет равен x в примере ниже?
//
//var a = 2;
//var x = 1 + (a *= 2);
//console.log(x) // x = 5, так как выражение a *= - уже не инкремент, а присваивание с умножением

//3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
//
//     если a и b положительные, вывести их разность;
//     если а и b отрицательные, вывести их произведение;
//     если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.

function getRandomInt() {
    return Math.floor(Math.random()*((Math.random() < 0.5) ? -1:1) * 100)
}
function checkAndLog(a,b){
    if (a >= 0 && b >= 0) {
        return(a - b)
    } else if (a < 0 && b < 0) {
        return(a * b)
    } else return(a + b)
}
a = getRandomInt()
b = getRandomInt()

console.log(checkAndLog(a, b))

//4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.
function getRandomIntFromTo(min, max) {
    return Math.floor(min + Math.random() * (max + 1 + min))
}
function logNumbers(a){
    switch (a){
        case 15 : return console.log(a)
        case 0 : console.log(a)
        case 1 : console.log(1)
        case 2 : console.log(2)
        case 3 : console.log(3)
        case 4 : console.log(4)
        case 5 : console.log(5)
        case 6 : console.log(6)
        case 7 : console.log(7)
        case 8 : console.log(8)
        case 9 : console.log(9)
        case 10 : console.log(10)
        case 11 : console.log(11)
        case 12 : console.log(12)
        case 13 : console.log(13)
        case 14 : console.log(14)
        case 15 : console.log(15)
            break
    }
}
a = getRandomIntFromTo(0, 15)
logNumbers(a)

//5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.

function showOperators(a, b){
    let mul = a * b
    let div = a / b
    let add = a + b
    let dif = a - b
    return ('mul = ' + mul + '\n' + 'dev = ' + div + '\n' + 'add = ' + add + '\n' + 'diff = ' + dif)
}

a = getRandomInt()
b = getRandomInt()
console.log(showOperators(a, b))

//6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов,
// operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций
// (использовать функции из пункта 5) и вернуть полученное значение (использовать switch).

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+': return arg1 + arg2
        case '-': return arg1 - arg2
        case '/' : return  arg1 / arg2
        case '*' : return arg1 * arg2
    }
}
a = getRandomInt()
b = getRandomInt()
console.log(mathOperation(a, b, '+'))
console.log(mathOperation(a, b, '-'))
console.log(mathOperation(a, b, '*'))
console.log(mathOperation(a, b, '/'))

//7. *Сравнить null и 0. Попробуйте объяснить результат.
console.log(null == 0) //false тут все ясно, отсутствие значения не равно 0
console.log(null == NaN) //false отсутствие значения не равно "не-число"
console.log(null == undefined) //true тут равенство получилось, потому что оба преобразуются в false.
console.log(null === undefined) //false Строгое равенство не выполнится, потому что null имеет тип 'object', а undefined - 'undefined'
console.log(NaN == undefined) //false "не-число" не может быть равно "отсутствие значения"
console.log(NaN == 0) //false "не-число" не равно 0
console.log(undefined== 0) //false "отсутствие значения" не равно 0


//8. *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень.

function power(val, pow) {
    if (pow === 1) {
        return val
    } else {
        return val * power(val, pow - 1)
    }
}
a = getRandomInt()
b = getRandomInt()
console.log('Числа равны ', a, b, power(a, b))

//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
    if (Math.round(n) === n){
        return true;
    }
    return false;
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
    let array = [];
    for (let i = 2; i < 21; i += 2){
        array.push(i);
    }
    return array;
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
    let result = 0;
    for (i = 1; i <= n; i++){
        result += i;
    }
    return result;
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
    if (n <= 0){
        return 0;
    }
    return n + recSumTo(n-1);
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
    if (n <= 1){
        return 1;
    }
    return n * factorial(n-1);
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
    let lastDiv = n;
    if (n === 1){
        return true;
    }
    while (true){
        lastDiv /= 2;
        if (lastDiv == 1){
            return true;
        }
        if (lastDiv < 1){
            return false;
        }
    }
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

/** Напишите функцию, которая принимает начальное значение и функцию операции
 * и возвращает функцию - выполняющую эту операцию.
 * Если функция операции (operatorFn) не задана - по умолчанию всегда
 * возвращается начальное значение (initialValue)
 * @param initialValue
 * @param operatorFn - (storedValue, newValue) => {operation}
 * @example
 * const sumFn =  getOperationFn(10, (a,b) => a + b);
 * console.log(sumFn(5)) - 15
 * console.log(sumFn(3)) - 18
 */
let old = null;
function getOperationFn(initialValue, operatorFn) {
    if (!operatorFn) {
        return (_) => initialValue;
    }
    function wrapper(newValue){
        if (old){
          const r = operatorFn(old, newValue);
          old = r;
          return r;
        }
        const r = operatorFn(initialValue, newValue);
        old = r;
        return r;
    }
    return wrapper;
}

/**
 * Напишите функцию создания генератора арифметической последовательности.
 * При ее вызове, она возвращает новую функцию генератор - generator().
 * Каждый вызов функции генератора возвращает следующий элемент последовательности.
 * Если начальное значение не передано, то оно равно 0.
 * Если шаг не указан, то по дефолту он равен 1.
 * Генераторов можно создать сколько угодно - они все независимые.
 *
 * @param {number} start - число с которого начинается последовательность
 * @param {number} step  - число шаг последовательности
 * @example
 * const generator = sequence(5, 2);
 * console.log(generator()); // 5
 * console.log(generator()); // 7
 * console.log(generator()); // 9
 */
function sequence(start, step) {
    if (!start) start = 0;
    if (!step) step = 1;

    let oldValue = null;

    function wrapper(){
        if (oldValue === null){
            oldValue = start;
        }
        else oldValue += step;
        return oldValue;
    }
    
    return wrapper;
}

/**
 * Напишите функцию deepEqual, которая принимает два значения
 * и возвращает true только в том случае, если они имеют одинаковое значение
 * или являются объектами с одинаковыми свойствами,
 * значения которых также равны при сравнении с рекурсивным вызовом deepEqual.
 * Учитывать специфичные объекты(такие как Date, RegExp итп) не обязательно
 =
 * @param {object} firstObject - первый объект
 * @param {object} secondObject - второй объект
 * @returns {boolean} - true если объекты равны(по содержанию) иначе false

 * @example
 * deepEqual({arr: [22, 33], text: 'text'}, {arr: [22, 33], text: 'text'}) // true
 * deepEqual({arr: [22, 33], text: 'text'}, {arr: [22, 3], text: 'text2'}) // false
 */
const assert = require('assert');
function deepEqual(a, b) {
    try {
        assert.deepStrictEqual(a, b);
        return true;
    }
    catch (AssertionError) {
        return false;
    }
}

module.exports = {
    isInteger,
    even,
    sumTo,
    recSumTo,
    factorial,
    isBinary,
    fibonacci,
    getOperationFn,
    sequence,
    deepEqual,
};

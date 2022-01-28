// // Логический оператор

// // I if не полная форма логического оператора if (если)

// if (условие) {
//     инструкция
// }

// // II if else полная форма логического оператора else (в ином случае)

// if (условие) {
//     инструкция1
// } else {
//     инструкция2
// }

// // III if else-if else каскадное ветвление 

// if (условие) {
//     инструкция1
// } else if (условие) {
//     инструкция2
// } else if (условие) {
//     инструкция3
// } ......
// else {
//     инструкцияN
// }

// let ageUser = prompt("Сколько тебе лет ? ")

// if (ageUser > 25) {
//     alert("Ты большой дядя")
// } else  if (ageUser > 0 && ageUser < 26) {
//     alert("Ты еще молод")
// } else {
//     alert("Ты кто ??")
// }

// let password = prompt("Ведите пароль -->")

// if (password == "denden") {
//     alert("Добро пожаловать")
// } else {
//     alert("Нет в системе")
// }

// Упрощеннная запись логического оператора

// let переменная = условие ? значение1 : значение2

// let ageUser = prompt("Сколько тебе лет?")

// let message = (ageUser > 25) ? alert("Ты большой дядя") : (ageUser > 0 && ageUser < 26) ? alert("Ты еще молод") : alert("Ты кто ??");


// let a = prompt("1")
// let b = prompt("2")
// let c = prompt("3")

// if (a >= 0 && b >= 0 && c >= 0) {
//     alert("все числа положительные")
// } else if ((a >= 0 && b >= 0 && c < 0) || (a >= 0 && b < 0 && c >= 0) || (a < 0 && b >= 0 && c >= 0)) {
//     alert("2 + ")
// } else if ((a >= 0 && b < 0 && c < 0) || (a < 0 && b >= 0 && c < 0) || (a < 0 && b < 0 && c >= 0)) {
//     alert("1")
// } else {
//     alert("Все числа отрицательные")
// }


// let a = prompt("1")
// let b = prompt("2")

// if (a != b) {
//     if (a > b){
//         alert(a, b = a)
//     } else {
//         alert(b, a = b)
//     }
// } else {
//     alert(a=0, b=0)
// }



//task1
// let a = Number(prompt("Введите число"))
// if (a > 0) {
//     alert(a + 1)
// } else {
//     alert(a)
// }

//task2
// let a = Number(prompt("Введите число"))
// if (a > 0) {
//     alert(a + 1)
// } else {
//     alert(a - 2)
// }

//task3
// let a = Number(prompt("Введите число"))
// if (a > 0) {
//     alert(a + 1)
// } else if (a < 0) {
//     alert(a - 2)
// } else {
//     alert(10)
// }

//task4
// let a = Number(prompt("Введите первое число"))
// let b = Number(prompt("Введите второе число"))
// let c = Number(prompt("Введите третье число"))
// if (a > 0 && b > 0 && c > 0) {
//     alert("Три числа положительные")
// } else if ((a > 0 && b > 0 && c <= 0) || (a > 0 && b <= 0 && c > 0) || (a <= 0 && b > 0 && c > 0)) {
//     alert("Два числа положительные")
// } else if ((a > 0 && b <= 0 && c <= 0) || (a <= 0 && b > 0 && c <= 0) || (a <= 0 && b <= 0 && c > 0)) {
//     alert("Одно число положительное")
// } else {
//     alert("Нет положительных чисел")
// }

//task5
// let a = Number(prompt("Введите первое число"))
// let b = Number(prompt("Введите второе число"))
// let c = Number(prompt("Введите третье число"))
// if (a > 0 && b > 0 && c > 0) {
//     alert("Три положительных числа, ноль отрицательных чисел")
// } else if ((a > 0 && b > 0 && c == 0) || (a > 0 && b == 0 && c > 0) || (a == 0 && b > 0 && c > 0)) {
//     alert("Два положительных числа, ноль отрицательных чисел")
// } else if ((a > 0 && b == 0 && c == 0) || (a == 0 && b > 0 && c == 0) || (a == 0 && b == 0 && c > 0)) {
//     alert("Одно положительное число, ноль отрицательных чисел")
// } else if ((a == 0 && b == 0 && c == 0) || (a == 0 && b == 0 && c == 0) || (a == 0 && b == 0 && c == 0)) {
//     alert("Ноль положительных чисел, ноль отрицательных чисел")
// } else if ((a < 0 && b == 0 && c == 0) || (a == 0 && b < 0 && c == 0) || (a == 0 && b == 0 && c < 0)) {
//     alert("Ноль положительных чисел, одно отрицательное число")
// } else if ((a < 0 && b < 0 && c == 0) || (a < 0 && b == 0 && c < 0) || (a == 0 && b < 0 && c < 0)) {
//     alert("Ноль положительных чисел, два отрицательные числа")
// } else if (a < 0 && b < 0 && c < 0) {
//     alert("Ноль положительных чисел, три отрицательных числа")
// } else if ((a > 0 && b == 0 && c < 0) || (a > 0 && b < 0 && c == 0) || (a == 0 && b > 0 && c < 0) || (a == 0 && b < 0 && c > 0) || (a < 0 && b == 0 && c > 0) || (a < 0 && b > 0 && c == 0)) {
//     alert("Одно положительное число, одно отрицательное число")
// } else if ((a > 0 && b > 0 && c < 0) || (a > 0 && b < 0 && c > 0) || (a < 0 && b > 0 && c > 0)) {
//     alert("Два положительных числа, одно отрицательное число")
// } else {
//     alert("Одно положительное число, два отрицательных числа")
// }

//task6
// let a = Number(prompt("Введите первое число"))
// let b = Number(prompt("Введите второе число"))
// if (a > b) {
//     alert(a)
// } else if (a < b) {
//     alert(b)
// }

//task7
// let a = Number(prompt("Введите первое число"))
// let b = Number(prompt("Введите второе число"))
// if (a < b) {
//     alert(1)
// } else if (b < a) {
//     alert(2)
// }

//task8
// let a = Number(prompt("Введите первое число"))
// let b = Number(prompt("Введите второе число"))
// if (a > b) {
//     alert(a + " " + b)
// } else if (a < b) {
//     alert(b + " " + a)
// }

//task9
// let a = Number(prompt("Введите первое число"))
// let b = Number(prompt("Введите второе число"))
// if (a > b){
//     a -= b
//     b += a
//     a = b - a
//     alert(a)
//     alert(b)
// } else {
//     alert(a)
//     alert(b)
// }

//task10
// let a = Number(prompt("Введите первое число"))
// let b = Number(prompt("Введите второе число"))
// if (a != b) {
//     a = a + b
//     b = a
//     alert(a)
//     alert(b)
// } else {
//     a = 0
//     b = 0
//     alert(a)
//     alert(b)
// }

//task11
// let a = Number(prompt("Введите первое число"))
// let b = Number(prompt("Введите второе число"))
// if (a != b) {
//     if (a > b) {
//         b = a
//         alert(a)
//         alert(b)
//     } else {
//         a = b
//         alert(a)
//         alert(b)
//     }
// } else {
//     a = 0
//     b = 0
//     alert(a)
//     alert(b)
// }

//task12
// let a = Number(prompt("Введите первое число"))
// let b = Number(prompt("Введите второе число"))
// let c = Number(prompt("Введите третье число"))
// if ((a <= b && b <= c) || (a <= c && c <= b)) {
//     alert(a)
// } else if ((b <= a && a <= c) || (b <= c && c <= a)) {
//     alert(b)
// } else {
//     alert(c)
// }

//task13
// let a = Number(prompt("Введите первое число"))
// let b = Number(prompt("Введите второе число"))
// let c = Number(prompt("Введите третье число"))
// if ((a < b  && a > c && b > c) || (a > b && a < c && c > b)) {
//     alert(a)
// } else if ((b > a && b < c && c > a) || (b > c && b < a && a > c)) {
//     alert(b)
// } else {
//     alert(c)
// }

//task14
// let a = Number(prompt("Введите первое число"))
// let b = Number(prompt("Введите второе число"))
// let c = Number(prompt("Введите третье число"))
// if (a > b && b > c){
//     alert(c)
//     alert(a)
// } else if (a > c && c > b) {
//     alert(b)
//     alert(a)
// } else if (b > a && a > c) {
//     alert(c)
//     alert(b)
// } else if (b > c && c > a) {
//     alert(a)
//     alert(b)
// } else if (c > a && a > b) {
//     alert(b)
//     alert(c)
// } else {
//     alert(a)
//     alert(c)
// }

//task15
// let a = Number(prompt("Введите первое число"))
// let b = Number(prompt("Введите второе число"))
// let c = Number(prompt("Введите третье число"))
// if (a > b && b > c){
//     alert(a+b)
// } else if (a > c && c > b) {
//     alert(a+c)
// } else if (b > a && a > c) {
//     alert(c)
// } else if (b > c && c > a) {
//     alert(b+c)
// } else if (c > a && a > b) {
//     alert(c+a)
// } else {
//     alert(b+c)
// }

//task16
let a = Number(prompt("Введите первое число"))
let b = Number(prompt("Введите второе число"))
let c = Number(prompt("Введите третье число"))
if (a < b && b < c) {
    alert(2*a)
    alert(2*b)
    alert(2*c)
} else {
    alert(-a)
    alert(-b)
    alert(-c)
}
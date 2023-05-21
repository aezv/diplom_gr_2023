const child_process = require('child_process');

let start_time = new Date();
console.log("Запуск сборки");

child_process.exec("xelatex diplom_gr_2023.tex", function (error) {
    if (error) {
        console.log("Сборка закончилась с ошибкой: ");
        console.log(error);
    }
    else {
        console.log("Cборка завершилась без ошибок.");
        console.log("Результат сборки - файл diplom.pdf");
    }
    console.log("Время: " + ((new Date() - start_time) / 1000) + "с");
});

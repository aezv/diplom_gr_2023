const child_process = require('child_process');

let start_time = new Date();
console.log("Запуск сборки");
console.log("Сборка списка литературы");

child_process.exec("biber \"diplom_gr_2023\"", function (error) {
    if (error) {
        console.log("Сборка списка литературы закончилась с ошибкой");
        console.log(error);
    }
    else {
        console.log("Сборка списка литературы завершилась без ошибок");
        console.log("Сборка диплома");
        child_process.exec("xelatex -shell-escape diplom_gr_2023.tex", function (error) {
            if (error) {
                console.log("Сборка диплома закончилась с ошибкой: ");
                console.log(error);
                console.log("Сборка закончилась с ошибкой")
            }
            else {
                console.log("Cборка диплома завершилась без ошибок");
                console.log("Результат сборки - файл diplom_gr_2023.pdf");
                console.log("Сборка завершилась без ошибок")
            }
            console.log("Время: " + ((new Date() - start_time) / 1000) + "с");
        });
    }
});

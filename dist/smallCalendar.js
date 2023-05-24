"use strict";
showmonthlyCalendar();
function showmonthlyCalendar() {
    const calendarMonthContainer = document.createElement("div");
    const headerCalendarContainer = document.createElement("div");
    const weekDaysCalendarContainer = document.createElement("div");
    const lista = document.querySelector("#lista");
    const TodayDate = new Date();
    const refDate = new Date("June 1, 2023");
    const refDay = refDate.getDate();
    const refWeekDay = refDate.getDay();
    const refMonth = refDate.getMonth();
    const refYear = refDate.getFullYear();
    let refIni;
    if (refWeekDay == 0) {
        let addMlSeconds = 6 * 24 * 60 * 60000;
        refIni = new Date(refDate.getTime() - addMlSeconds);
    }
    else {
        let addMlSeconds = (refWeekDay - 1) * 24 * 60 * 60000;
        refIni = new Date(refDate.getTime() - addMlSeconds);
        console.log(refIni);
    }
    for (let i = 0; i < 42; i++) {
        let currentDate;
        if (i == 0) {
            currentDate = refIni;
        }
        else {
            let addMlSeconds = (i) * 24 * 60 * 60000;
            currentDate = new Date(refIni.getTime() + addMlSeconds);
        }
        console.log(refIni.getDate() + 1);
        const date = document.createElement("div");
        date.classList.add("day-container");
        date.id = `${i + 1}`;
        date.textContent = `${currentDate.getDate()}`;
        date.setAttribute("data-date", `${currentDate}`);
        lista === null || lista === void 0 ? void 0 : lista.appendChild(date);
    }
}
//# sourceMappingURL=smallCalendar.js.map
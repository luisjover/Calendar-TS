"use strict";
showmonthlyCalendar();
function showmonthlyCalendar(refIncomingDate = new Date()) {
    const mainMonthCalendar = document.querySelector("#main");
    const lista = document.querySelector("#lista");
    const asideCalendarMonth = document.createElement("aside");
    const calendarMonthContainer = document.createElement("div");
    const headerCalendarContainer = document.createElement("div");
    headerCalendarContainer.classList.add("header-month");
    const btnPrevMonth = document.createElement("button");
    btnPrevMonth.classList.add("btn-prev");
    btnPrevMonth.textContent = "<";
    const btnNextMonth = document.createElement("button");
    btnNextMonth.classList.add("btn-next");
    btnNextMonth.textContent = ">";
    const titleMonth = document.createElement("h2");
    const dayNamesWeek = document.createElement("div");
    const weekDaysCalendarContainer = document.createElement("div");
    const listDays = document.createElement("ol");
    let firstDayMonth = new Date(refIncomingDate.getTime() - ((refIncomingDate.getDate() - 1) * 24 * 60 * 60000));
    let refIni = firstDayMonth;
    let currentDate = refIni;
    const refDate = refIni;
    const refDay = refDate.getDate();
    const refWeekDay = refDate.getDay();
    const refMonth = refDate.getMonth();
    const refYear = refDate.getFullYear();
    if (mainMonthCalendar) {
        mainMonthCalendar.innerHTML = '';
    }
    if (currentDate.getMonth() == 0) {
        btnPrevMonth.setAttribute("data-prev-month", `12-01-${currentDate.getFullYear() - 1}`);
    }
    else {
        btnPrevMonth.setAttribute("data-prev-month", `${currentDate.getMonth()}-01-${currentDate.getFullYear()}`);
    }
    if (currentDate.getMonth() == 11) {
        btnNextMonth.setAttribute("data-next-month", `01-01-${currentDate.getFullYear() + 1}`);
    }
    else {
        btnNextMonth.setAttribute("data-next-month", `${currentDate.getMonth() + 2}-01-${currentDate.getFullYear()}`);
    }
    titleMonth.textContent = `${(currentDate === null || currentDate === void 0 ? void 0 : currentDate.getMonth()) + 1} ${currentDate === null || currentDate === void 0 ? void 0 : currentDate.getFullYear()}`;
    if (refWeekDay == 0) {
        let addMlSeconds = 6 * 24 * 60 * 60000;
        refIni = new Date(refDate.getTime() - addMlSeconds);
    }
    else {
        let addMlSeconds = (refWeekDay - 1) * 24 * 60 * 60000;
        console.log(addMlSeconds);
        refIni = new Date(refDate.getTime() - addMlSeconds);
    }
    const days = ["M", "T", "W", "T", "F", "S", "S"];
    for (let i of days) {
        const weekNameDay = document.createElement("div");
        weekNameDay.classList.add("day-container", "weekNameDay");
        weekNameDay.textContent = i;
        listDays.appendChild(weekNameDay);
    }
    for (let i = 0; i < 42; i++) {
        if (i == 0) {
            currentDate = refIni;
        }
        else {
            let addMlSeconds = (i) * 24 * 60 * 60000;
            currentDate = new Date(refIni.getTime() + addMlSeconds);
        }
        const date = document.createElement("div");
        date.classList.add("day-container");
        if (currentDate.getMonth() == refMonth) {
            date.classList.add("currentMonth");
        }
        else {
            date.classList.add("notCurrentMonth");
        }
        date.id = `${i + 1}`;
        date.textContent = `${currentDate.getDate()}`;
        date.setAttribute("data-date", `${currentDate.getDate()}`);
        listDays.appendChild(date);
    }
    headerCalendarContainer.appendChild(btnPrevMonth);
    headerCalendarContainer.appendChild(titleMonth);
    headerCalendarContainer.appendChild(btnNextMonth);
    calendarMonthContainer.appendChild(headerCalendarContainer);
    calendarMonthContainer.appendChild(dayNamesWeek);
    weekDaysCalendarContainer.appendChild(listDays);
    calendarMonthContainer.appendChild(weekDaysCalendarContainer);
    asideCalendarMonth.appendChild(calendarMonthContainer);
    mainMonthCalendar === null || mainMonthCalendar === void 0 ? void 0 : mainMonthCalendar.appendChild(asideCalendarMonth);
    btnPrevMonth.addEventListener("click", prevFunction);
    btnNextMonth.addEventListener("click", nextFunction);
}
function prevFunction() {
    let newDate = new Date(`${this.getAttribute("data-prev-month")}`);
    showmonthlyCalendar(newDate);
}
function nextFunction() {
    let newDate = new Date(`${this.getAttribute("data-next-month")}`);
    showmonthlyCalendar(newDate);
}
//# sourceMappingURL=smallCalendar.js.map
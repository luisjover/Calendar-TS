"use strict";
setWeekCalendar();
function setWeekCalendar(date = new Date()) {
    const btnPrevWeek = document.querySelector("#prev-week");
    if (btnPrevWeek === null)
        return;
    btnPrevWeek.textContent = "<";
    btnPrevWeek.addEventListener("click", changeWeek);
    const btnNextWeek = document.querySelector("#next-week");
    if (btnNextWeek === null)
        return;
    btnNextWeek.textContent = ">";
    btnNextWeek.addEventListener("click", changeWeek);
    const weekHeader = document.querySelector("#main-header");
    if (weekHeader)
        weekHeader.innerHTML = "";
    let weekDays = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
    const today = date;
    const todayWeekDay = today.getDay();
    const todayRef = today.getDate();
    btnPrevWeek.setAttribute("change-week-date", `${today.getTime() - (7 * 24 * 60 * 60000)}`);
    btnNextWeek.setAttribute("change-week-date", `${today.getTime() + 7 * 24 * 60 * 60000}`);
    let firstWeekDay;
    if (todayWeekDay === 0) {
        let timeToFirstDay = 6 * 24 * 60 * 60000;
        firstWeekDay = new Date(today.getTime() - timeToFirstDay);
    }
    else {
        let timeToFirstDay = (todayWeekDay - 1) * 24 * 60 * 60000;
        firstWeekDay = new Date(today.getTime() - timeToFirstDay);
    }
    for (let i = 0; i < 7; i++) {
        let currentWeekDay;
        if (i == 0) {
            currentWeekDay = firstWeekDay;
        }
        else {
            let addMlSeconds = (i) * 24 * 60 * 60000;
            currentWeekDay = new Date(firstWeekDay.getTime() + addMlSeconds);
        }
        const dayContainer = document.createElement("div");
        dayContainer.classList.add(`day-section-${i + 1}`);
        dayContainer.id = `day-section-${i + 1}`;
        dayContainer.textContent = weekDays[i];
        const dayNumber = document.createElement("span");
        dayNumber.classList.add("weekday");
        dayNumber.textContent = `${currentWeekDay.getDate()}`;
        weekHeader === null || weekHeader === void 0 ? void 0 : weekHeader.appendChild(dayContainer);
        dayContainer.appendChild(dayNumber);
    }
}
function changeWeek() {
    let totalTime = this.getAttribute("change-week-date");
    if (totalTime === null)
        return;
    let newDate = new Date(parseInt(totalTime));
    setWeekCalendar(newDate);
}
//# sourceMappingURL=bigCalendar.js.map
setWeekCalendar();
export function setWeekCalendar(date = new Date()) {
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
    const header = document.querySelector("#test");
    if (header)
        header.innerHTML = "";
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const currentMonth = today === null || today === void 0 ? void 0 : today.getMonth();
    const monthName = months[currentMonth];
    const currentMonthYear = document.createElement("h2");
    currentMonthYear.textContent = `${monthName} ${today === null || today === void 0 ? void 0 : today.getFullYear()}`;
    currentMonthYear.classList.add("currentMonthYear");
    header === null || header === void 0 ? void 0 : header.appendChild(currentMonthYear);
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
        const refCurrentWeekDay = new Date();
        const isCurrentDay = currentWeekDay.getDate() === refCurrentWeekDay.getDate() && currentWeekDay.getMonth() === refCurrentWeekDay.getMonth() && currentWeekDay.getFullYear() === refCurrentWeekDay.getFullYear();
        if (isCurrentDay) {
            dayNumber.classList.add("currentDay");
        }
        weekHeader === null || weekHeader === void 0 ? void 0 : weekHeader.appendChild(dayContainer);
        dayContainer.appendChild(dayNumber);
    }
    setEvents(firstWeekDay);
}
function changeWeek() {
    let totalTime = this.getAttribute("change-week-date");
    if (totalTime === null)
        return;
    let newDate = new Date(parseInt(totalTime));
    setWeekCalendar(newDate);
}
function setEvents(firstWeekDay) {
    const weekDaysList = document.querySelectorAll(".day-task-section");
    let tasks;
    const storage = localStorage.getItem("events");
    if (storage !== null) {
        tasks = JSON.parse(storage);
    }
    let currentDayFullDate = firstWeekDay.getTime();
    let i = 0;
    while (i < 7) {
        const currentDayDate = new Date(currentDayFullDate).getDate();
        const currentDayMonth = new Date(currentDayFullDate).getMonth();
        const currentDayYear = new Date(currentDayFullDate).getFullYear();
        tasks.forEach((task) => {
            const taskFullDate = new Date(task.initialDate);
            const taskDate = taskFullDate.getDate();
            const taskMonth = taskFullDate.getMonth();
            const taskYear = taskFullDate.getFullYear();
            if (currentDayDate === taskDate &&
                currentDayMonth === taskMonth &&
                currentDayYear === taskYear) {
                printTasks(task);
            }
        });
        currentDayFullDate = (currentDayFullDate + 24 * 60 * 60000);
        i++;
    }
}
function printTasks(task) {
    const fullDate = new Date(task.initialDate);
    const weekDay = fullDate.getDay();
    const taskSection = document.querySelector(`#day-task-section-${weekDay}`);
    const newTaskContainer = document.createElement("div");
    newTaskContainer.classList.add("task-container");
    newTaskContainer.innerText = task.title;
    taskSection === null || taskSection === void 0 ? void 0 : taskSection.appendChild(newTaskContainer);
    console.log(weekDay);
}
//# sourceMappingURL=bigCalendar.js.map
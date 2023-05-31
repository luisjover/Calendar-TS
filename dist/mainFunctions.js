import { Task } from "./types.js";
import { changeWeek, setTodayWeekMonthly, prevFunction, nextFunction, showWeek, checkTimeAlert, cleanElement, editTask, resetModalButtons } from "./supportFunctions.js";
import { timeLine } from "./timeLine.js";
import { checkTaskContainerOverlap } from "./events.js";
export function showmonthlyCalendar(refIncomingDate = new Date()) {
    const asideCalendarMonth = document.querySelector("#sidebar");
    const calendarMonthContainer = document.createElement("div");
    calendarMonthContainer.classList.add("container-month", "d-flex", "flex-column");
    const headerCalendarContainer = document.createElement("div");
    headerCalendarContainer.classList.add("header-month", "px-4", "d-flex", "justify-content-between");
    const btnPrevMonth = document.createElement("button");
    btnPrevMonth.classList.add("btn-prev");
    btnPrevMonth.textContent = "<";
    const btnNextMonth = document.createElement("button");
    btnNextMonth.classList.add("btn-next");
    btnNextMonth.textContent = ">";
    const titleMonth = document.createElement("h4");
    const listDays = document.createElement("ol");
    let firstDayMonth = new Date(refIncomingDate.getFullYear(), refIncomingDate.getMonth(), 1);
    let currentDate = firstDayMonth;
    const currentWeekDay = firstDayMonth.getDay();
    const currentMonth = firstDayMonth.getMonth();
    if (asideCalendarMonth) {
        cleanElement(asideCalendarMonth);
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
    const headerMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const headerlistMonths = currentDate === null || currentDate === void 0 ? void 0 : currentDate.getMonth();
    const headerMonthName = headerMonths[headerlistMonths];
    titleMonth.textContent = `${headerMonthName} ${currentDate === null || currentDate === void 0 ? void 0 : currentDate.getFullYear()}`;
    if (currentWeekDay == 0) {
        let addMlSeconds = 6 * 24 * 60 * 60000;
        firstDayMonth = new Date(firstDayMonth.getTime() - addMlSeconds);
    }
    else {
        let addMlSeconds = (currentWeekDay - 1) * 24 * 60 * 60000;
        firstDayMonth = new Date(firstDayMonth.getTime() - addMlSeconds);
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
            currentDate = firstDayMonth;
        }
        else {
            let addMlSeconds = (i) * 24 * 60 * 60000;
            currentDate = new Date(firstDayMonth.getTime() + addMlSeconds);
        }
        const date = document.createElement("div");
        date.classList.add("day-container");
        if (currentDate.getMonth() == currentMonth) {
            date.classList.add("currentMonth");
        }
        else {
            date.classList.add("notCurrentMonth");
        }
        date.id = `${i + 1}`;
        date.textContent = `${currentDate.getDate()}`;
        const today = new Date();
        if (currentDate.getDate() === today.getDate() && currentDate.getMonth() === today.getMonth() && currentDate.getFullYear() === today.getFullYear()) {
            date.classList.add("currentDay");
        }
        date.setAttribute("data-date", `${currentDate.getDate()}`);
        date.setAttribute("real-date", `${currentDate.getTime()}`);
        listDays.appendChild(date);
        date.addEventListener("click", showWeek);
        headerCalendarContainer.appendChild(btnPrevMonth);
        headerCalendarContainer.appendChild(titleMonth);
        headerCalendarContainer.appendChild(btnNextMonth);
        calendarMonthContainer.appendChild(headerCalendarContainer);
        calendarMonthContainer.appendChild(listDays);
        asideCalendarMonth === null || asideCalendarMonth === void 0 ? void 0 : asideCalendarMonth.appendChild(calendarMonthContainer);
        btnPrevMonth.addEventListener("click", prevFunction);
        btnNextMonth.addEventListener("click", nextFunction);
    }
}
export function setWeekCalendar(date = new Date()) {
    resetModalButtons();
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
    const emptySpace = document.createElement("div");
    emptySpace.classList.add("empty-space");
    const btnModal = document.createElement("button");
    btnModal.type = "button";
    btnModal.classList.add("btn", "btn-primary", "empty-space__btn");
    btnModal.setAttribute("data-bs-toggle", "modal");
    btnModal.setAttribute("data-bs-target", "#containerModalTask");
    btnModal.textContent = "Create task";
    const btnToday = document.createElement("button");
    btnToday.classList.add("btn", "btn-primary", "empty-space__btn");
    btnToday.id = "btnToday";
    btnToday.textContent = "Today";
    emptySpace.appendChild(btnModal);
    emptySpace.appendChild(btnToday);
    const weekHeader = document.querySelector("#main-header");
    if (weekHeader)
        weekHeader.innerHTML = "";
    weekHeader === null || weekHeader === void 0 ? void 0 : weekHeader.appendChild(emptySpace);
    let weekDays = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
    const today = date;
    const todayWeekDay = today.getDay();
    const todayRef = today.getDate();
    btnPrevWeek.setAttribute("change-week-date", `${today.getTime() - (7 * 24 * 60 * 60000)}`);
    btnNextWeek.setAttribute("change-week-date", `${today.getTime() + 7 * 24 * 60 * 60000}`);
    const yearMonthHeader = document.querySelector("#yearMonthHeader");
    if (yearMonthHeader)
        yearMonthHeader.innerHTML = "";
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const currentMonth = today === null || today === void 0 ? void 0 : today.getMonth();
    const monthName = months[currentMonth];
    const currentMonthYear = document.createElement("h2");
    currentMonthYear.textContent = `${monthName} ${today === null || today === void 0 ? void 0 : today.getFullYear()}`;
    showmonthlyCalendar(today);
    yearMonthHeader === null || yearMonthHeader === void 0 ? void 0 : yearMonthHeader.appendChild(currentMonthYear);
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
        const taskContainer = document.querySelector(`#day-task-section-${i + 1}`);
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
            taskContainer === null || taskContainer === void 0 ? void 0 : taskContainer.setAttribute("currentDay", "true");
        }
        else {
            dayNumber.classList.remove("currentDay");
            taskContainer === null || taskContainer === void 0 ? void 0 : taskContainer.removeAttribute("currentDay");
        }
        weekHeader === null || weekHeader === void 0 ? void 0 : weekHeader.appendChild(dayContainer);
        dayContainer.appendChild(dayNumber);
    }
    setEvents(firstWeekDay);
    timeLine();
    btnToday === null || btnToday === void 0 ? void 0 : btnToday.addEventListener("click", setTodayWeekMonthly);
    console.log("la funcion se llama desde setWeek");
    checkTaskContainerOverlap();
}
function setEvents(firstWeekDay) {
    const weekDaysList = document.querySelectorAll(".day-task-section");
    weekDaysList.forEach(section => section.replaceChildren());
    let tasks;
    const storage = localStorage.getItem("events");
    if (storage === null)
        return;
    tasks = JSON.parse(storage);
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
    const initialDate = new Date(task.initialDate);
    const weekDay = initialDate.getDay();
    const initialHours = initialDate.getHours();
    const initialAbsoluteMinutes = initialDate.getMinutes() / 60;
    const decimalInitialTime = initialHours + initialAbsoluteMinutes;
    const endDate = new Date(task.endDate);
    const finallHours = endDate.getHours();
    const finalAbsoluteMinutes = endDate.getMinutes() / 60;
    const decimalFinalTime = finallHours + finalAbsoluteMinutes;
    const durationTime = decimalFinalTime - decimalInitialTime;
    const taskSection = document.querySelector(`#day-task-section-${weekDay}`);
    const newTaskContainer = document.createElement("div");
    newTaskContainer.addEventListener("click", editTask);
    newTaskContainer.classList.add("task-container");
    newTaskContainer.setAttribute("role", "button");
    newTaskContainer.setAttribute("taskId", task.id.toString());
    newTaskContainer.innerText = task.title;
    newTaskContainer.style.top = `${decimalInitialTime * 6}rem`;
    newTaskContainer.style.height = `${durationTime * 6}rem`;
    newTaskContainer.style.width = "80%";
    taskSection === null || taskSection === void 0 ? void 0 : taskSection.appendChild(newTaskContainer);
}
export function createTask() {
    let events;
    const storage = localStorage.getItem("events");
    if (storage !== null) {
        events = JSON.parse(storage);
    }
    let taskId;
    if (events) {
        taskId = events.length;
    }
    else
        taskId = 0;
    const taskTitleElement = document.querySelector("#taskTitle");
    const initialDateElement = document.querySelector("#taskDateIniInput");
    const checkFinalDateElement = document.querySelector("#checkDateEnd");
    const finalDateElement = document.querySelector("#taskDateEndInput");
    const reminderCheckElement = document.querySelector("#reminderCheck");
    const reminderTimeSelectElement = document.querySelector("#reminderSelect");
    const taskDescriptionElement = document.querySelector("#taskDescriptionArea");
    const taskTypeSelectElement = document.querySelector("#taskTypeSelect");
    if ((taskTitleElement === null || taskTitleElement === void 0 ? void 0 : taskTitleElement.value) === null || (taskTitleElement === null || taskTitleElement === void 0 ? void 0 : taskTitleElement.value) === undefined)
        return;
    const taskTitle = taskTitleElement === null || taskTitleElement === void 0 ? void 0 : taskTitleElement.value;
    if ((initialDateElement === null || initialDateElement === void 0 ? void 0 : initialDateElement.value) === null || (initialDateElement === null || initialDateElement === void 0 ? void 0 : initialDateElement.value) === undefined)
        return;
    const initialDate = initialDateElement === null || initialDateElement === void 0 ? void 0 : initialDateElement.value;
    if ((checkFinalDateElement === null || checkFinalDateElement === void 0 ? void 0 : checkFinalDateElement.value) === null || (checkFinalDateElement === null || checkFinalDateElement === void 0 ? void 0 : checkFinalDateElement.value) === undefined)
        return;
    const checkFinalDate = checkFinalDateElement === null || checkFinalDateElement === void 0 ? void 0 : checkFinalDateElement.value;
    if ((finalDateElement === null || finalDateElement === void 0 ? void 0 : finalDateElement.value) === null || (finalDateElement === null || finalDateElement === void 0 ? void 0 : finalDateElement.value) === undefined)
        return;
    const finalDate = finalDateElement === null || finalDateElement === void 0 ? void 0 : finalDateElement.value;
    if ((reminderTimeSelectElement === null || reminderTimeSelectElement === void 0 ? void 0 : reminderTimeSelectElement.value) === null || (reminderTimeSelectElement === null || reminderTimeSelectElement === void 0 ? void 0 : reminderTimeSelectElement.value) === undefined)
        return;
    const reminderTimeSelect = new Date(initialDate).getTime() - parseInt(reminderTimeSelectElement === null || reminderTimeSelectElement === void 0 ? void 0 : reminderTimeSelectElement.value) * 60 * 1000;
    if ((taskDescriptionElement === null || taskDescriptionElement === void 0 ? void 0 : taskDescriptionElement.value) === null || (taskDescriptionElement === null || taskDescriptionElement === void 0 ? void 0 : taskDescriptionElement.value) === undefined)
        return;
    const taskDescription = taskDescriptionElement === null || taskDescriptionElement === void 0 ? void 0 : taskDescriptionElement.value;
    if ((taskTypeSelectElement === null || taskTypeSelectElement === void 0 ? void 0 : taskTypeSelectElement.value) === null || (taskTypeSelectElement === null || taskTypeSelectElement === void 0 ? void 0 : taskTypeSelectElement.value) === undefined)
        return;
    const taskType = taskTypeSelectElement === null || taskTypeSelectElement === void 0 ? void 0 : taskTypeSelectElement.value;
    const objeto = new Task(taskId, taskTitle, initialDate, finalDate, reminderTimeSelect, taskDescription, taskType);
    events === null || events === void 0 ? void 0 : events.push(objeto);
    localStorage.setItem("events", JSON.stringify(events));
    checkTimeAlert();
    setWeekCalendar(new Date(initialDate));
}
//# sourceMappingURL=mainFunctions.js.map
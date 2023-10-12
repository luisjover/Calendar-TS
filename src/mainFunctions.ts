import { Task } from "./types.js";
import { changeWeek, setTodayWeekMonthly, prevFunction, nextFunction, showWeek, checkTimeAlert, cleanElement, editTask, resetModalButtons, calculDate, searchProxTasks, setLocalTime } from "./supportFunctions.js";
import { timeLine } from "./timeLine.js";
import { checkTaskContainerOverlap } from "./overlap.js";


export function showmonthlyCalendar(refIncomingDate: Date = new Date()) {

    const asideCalendarMonth = document.querySelector("#sidebar") as HTMLElement | null;
    const calendarMonthContainer = document.createElement("div");
    calendarMonthContainer.classList.add("container-month", "d-flex", "flex-column");

    const headerCalendarContainer = document.createElement("div");
    headerCalendarContainer.classList.add("header-month", "px-4", "d-flex", "justify-content-between");


    const btnPrevMonth = document.createElement("button");
    btnPrevMonth.classList.add("btn-prev");
    const btnPrevImg = document.createElement("img");
    btnPrevImg.src = "/assets/img/icon-left.svg"
    btnPrevMonth.appendChild(btnPrevImg);

    const btnNextMonth = document.createElement("button");
    btnNextMonth.classList.add("btn-next");
    const btnNextImg = document.createElement("img");
    btnNextImg.src = "/assets/img/icon-right.svg"
    btnNextMonth.appendChild(btnNextImg);

    const titleMonth = document.createElement("h4");

    const listDays = document.createElement("ol");

    let firstDayMonth = new Date(refIncomingDate.getFullYear(), refIncomingDate.getMonth(), 1); //
    let currentDate = firstDayMonth;


    const currentWeekDay = firstDayMonth.getDay();
    const currentMonth = firstDayMonth.getMonth();

    if (asideCalendarMonth) {

        cleanElement(asideCalendarMonth);
    }

    // To calculate previous month. January and December are special cases
    if (currentDate.getMonth() == 0) {
        btnPrevMonth.setAttribute("data-prev-month", `12-01-${currentDate.getFullYear() - 1}`);
    } else {
        btnPrevMonth.setAttribute("data-prev-month", `${currentDate.getMonth()}-01-${currentDate.getFullYear()}`);
    }

    // To calculate next month, December is a special case
    if (currentDate.getMonth() == 11) {
        btnNextMonth.setAttribute("data-next-month", `01-01-${currentDate.getFullYear() + 1}`);
    } else {
        btnNextMonth.setAttribute("data-next-month", `${currentDate.getMonth() + 2}-01-${currentDate.getFullYear()}`);
    }

    const headerMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const headerlistMonths = currentDate?.getMonth();
    const headerMonthName = headerMonths[headerlistMonths];
    titleMonth.textContent = `${headerMonthName} ${currentDate?.getFullYear()}`;

    if (currentWeekDay == 0) {
        let addMlSeconds = 6 * 24 * 60 * 60000;
        firstDayMonth = new Date(firstDayMonth.getTime() - addMlSeconds);
    } else {
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
            currentDate = firstDayMonth
        } else {
            let addMlSeconds = (i) * 24 * 60 * 60000;
            currentDate = new Date(firstDayMonth.getTime() + addMlSeconds);
        }

        const date = document.createElement("div");
        date.classList.add("day-container");
        if (currentDate.getMonth() == currentMonth) {
            date.classList.add("currentMonth");
        } else {
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
        listDays.appendChild(date); //Atention: falta crear el elemento DOM de lista.

        date.addEventListener("click", showWeek)

        headerCalendarContainer.appendChild(btnPrevMonth);
        headerCalendarContainer.appendChild(titleMonth);
        headerCalendarContainer.appendChild(btnNextMonth);
        calendarMonthContainer.appendChild(headerCalendarContainer);
        calendarMonthContainer.appendChild(listDays);
        asideCalendarMonth?.appendChild(calendarMonthContainer);

        btnPrevMonth.addEventListener("click", prevFunction)
        btnNextMonth.addEventListener("click", nextFunction)
    }
}


export function setWeekCalendar(date: Date = new Date()) {
    resetModalButtons();

    //SCROLL CONTROL
    const weekContainer = document.querySelector("#week-container");
    weekContainer?.scrollTo({ top: 600, behavior: 'smooth' })
    // BUTTONS
    const btnPrevWeek = document.querySelector("#prev-week") as HTMLButtonElement | null;
    if (btnPrevWeek === null) return;
    btnPrevWeek.addEventListener("click", changeWeek)
    const btnNextWeek = document.querySelector("#next-week") as HTMLButtonElement | null;
    if (btnNextWeek === null) return;
    btnNextWeek.addEventListener("click", changeWeek);
    const emptySpace = document.createElement("div");
    emptySpace.classList.add("empty-space");
    //LOCAL TIME CONTAINER
    const localTimeContainer = document.createElement("div");
    localTimeContainer.id = "local-time-container";
    localTimeContainer.classList.add("local-time-container");

    //MODA BUTTON
    const btnModal = document.createElement("button");
    btnModal.type = "button";
    btnModal.classList.add("btn", "btn-primary", "empty-space__btn");
    btnModal.setAttribute("data-bs-toggle", "modal");
    btnModal.setAttribute("data-bs-target", "#containerModalTask");
    btnModal.textContent = "Create task";
    btnModal.addEventListener("click", resetModalButtons);
    const btnToday = document.createElement("button");
    btnToday.classList.add("btn", "btn-primary", "empty-space__btn");
    btnToday.id = "btnToday";
    btnToday.textContent = "Today";
    emptySpace.appendChild(btnModal);
    emptySpace.appendChild(btnToday);


    //FUNCTION
    const weekHeader = document.querySelector("#main-header") as HTMLDivElement | null;
    if (weekHeader) weekHeader.innerHTML = ""

    weekHeader?.appendChild(emptySpace);
    weekHeader?.appendChild(localTimeContainer);

    let weekDays: string[] = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
    const today = date;
    const todayWeekDay = today.getDay();
    const todayRef = today.getDate();
    btnPrevWeek.setAttribute("change-week-date", `${today.getTime() - (7 * 24 * 60 * 60000)}`);
    btnNextWeek.setAttribute("change-week-date", `${today.getTime() + 7 * 24 * 60 * 60000}`);

    const yearMonthHeader = document.querySelector("#yearMonthHeader");
    if (yearMonthHeader) yearMonthHeader.innerHTML = ""
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const currentMonth = today?.getMonth();
    const monthName = months[currentMonth];
    const currentMonthYear = document.createElement("h2");
    currentMonthYear.textContent = `${monthName} ${today?.getFullYear()}`;
    //CALL TO MONTH CALENDAR FUNCTION
    showmonthlyCalendar(today);


    yearMonthHeader?.appendChild(currentMonthYear);

    let firstWeekDay: Date

    if (todayWeekDay === 0) {
        let timeToFirstDay = 6 * 24 * 60 * 60000;
        firstWeekDay = new Date(today.getTime() - timeToFirstDay);
    } else {
        let timeToFirstDay = (todayWeekDay - 1) * 24 * 60 * 60000;
        firstWeekDay = new Date(today.getTime() - timeToFirstDay);
    }
    //CREATE SPECIAL DIV FOR RESPONSIVE DESPLAY
    const divForResponsive = document.createElement("div");
    divForResponsive.classList.add("div-responsive-weekDays");
    weekHeader?.appendChild(divForResponsive);

    for (let i = 0; i < 7; i++) {
        let currentWeekDay;
        if (i == 0) {
            currentWeekDay = firstWeekDay
        } else {
            let addMlSeconds = (i) * 24 * 60 * 60000;
            currentWeekDay = new Date(firstWeekDay.getTime() + addMlSeconds);
        }

        const dayContainer = document.createElement("div");
        const taskContainer = document.querySelector(`#day-task-section-${i + 1}`);
        dayContainer.classList.add(`day-section-${i + 1}`, "day-section");
        dayContainer.id = `day-section-${i + 1}`
        dayContainer.textContent = weekDays[i];

        const dayNumber = document.createElement("span")
        dayNumber.classList.add("weekday")
        dayNumber.textContent = `${currentWeekDay.getDate()}`;

        const refCurrentWeekDay = new Date();
        const isCurrentDay = currentWeekDay.getDate() === refCurrentWeekDay.getDate() && currentWeekDay.getMonth() === refCurrentWeekDay.getMonth() && currentWeekDay.getFullYear() === refCurrentWeekDay.getFullYear();

        if (isCurrentDay) {
            dayNumber.classList.add("currentDay");
            taskContainer?.setAttribute("currentDay", "true")
        } else {
            dayNumber.classList.remove("currentDay");
            taskContainer?.removeAttribute("currentDay");
        }

        dayContainer.appendChild(dayNumber);
        divForResponsive.appendChild(dayContainer);
    }

    setEvents(firstWeekDay);
    timeLine();
    btnToday?.addEventListener("click", setTodayWeekMonthly);
    checkTaskContainerOverlap();
    searchProxTasks();
    setLocalTime();
}


export function createTask() {

    let events: Task[];
    const storage = localStorage.getItem("events");

    if (storage === null) return;

    events = JSON.parse(storage);

    let taskId: number;
    if (events.length > 0) {

        let longEvents = events.length - 1;
        taskId = events[longEvents].id + 1;

    } else taskId = 0;

    const taskTitleElement = document.querySelector("#taskTitle") as HTMLInputElement | null;
    const initialDateElement = document.querySelector("#taskDateIniInput") as HTMLInputElement | null;
    const checkFinalDateElement = document.querySelector("#checkDateEnd") as HTMLInputElement | null;
    const finalDateElement = document.querySelector("#taskDateEndInput") as HTMLInputElement | null;
    const reminderCheckElement = document.querySelector("#reminderCheck") as HTMLInputElement | null;
    const reminderTimeSelectElement = document.querySelector("#reminderSelect") as HTMLSelectElement | null;
    const taskDescriptionElement = document.querySelector("#taskDescriptionArea") as HTMLTextAreaElement | null;
    const taskTypeSelectElement = document.querySelector("#taskTypeSelect") as HTMLSelectElement | null;

    if (taskTitleElement?.value === null || taskTitleElement?.value === undefined) return;
    const taskTitle = taskTitleElement?.value;
    if (initialDateElement?.value === null || initialDateElement?.value === undefined) return;
    const initialDate = initialDateElement?.value;
    if (checkFinalDateElement?.value === null || checkFinalDateElement?.value === undefined) return;
    const checkFinalDate = checkFinalDateElement?.value;
    if (finalDateElement?.value === null || finalDateElement?.value === undefined) return;
    let finalDate = finalDateElement?.value;
    if (finalDateElement.value == "") {
        const initialDateInDate: Date = new Date(initialDate)
        const finalDateInTime = new Date(initialDate).getTime() + (60 * 60000);
        const finalDateHelper1: Date = new Date(finalDateInTime);
        if (initialDateInDate.getDate() !== finalDateHelper1.getDate()) {
            finalDate = `${initialDateElement.value.slice(0, -5)}23:59`;
        } else {
            const finalDateHelper2 = calculDate(finalDateHelper1);
            finalDate = finalDateHelper2.slice(0, -8);
        }
    } else {
        finalDate = finalDateElement?.value;
    }
    if (reminderTimeSelectElement?.value === null || reminderTimeSelectElement?.value === undefined) return;
    const reminderTimeSelect = new Date(initialDate).getTime() - parseInt(reminderTimeSelectElement?.value) * 60 * 1000;
    if (taskDescriptionElement?.value === null || taskDescriptionElement?.value === undefined) return;
    const taskDescription = taskDescriptionElement?.value;
    if (taskTypeSelectElement?.value === null || taskTypeSelectElement?.value === undefined) return;
    const taskType = taskTypeSelectElement?.value;


    const objeto = new Task(taskId, taskTitle, initialDate, finalDate, reminderTimeSelect, taskDescription, taskType);

    events?.push(objeto)

    localStorage.setItem("events", JSON.stringify(events));

    checkTimeAlert()
    setWeekCalendar(new Date(initialDate));

}



function setEvents(firstWeekDay: Date) {
    const weekDaysList = document.querySelectorAll(".day-task-section");
    weekDaysList.forEach(section => section.replaceChildren());
    let tasks;
    const storage = localStorage.getItem("events");

    if (storage === null) return;
    tasks = JSON.parse(storage);

    let currentDayFullDate = firstWeekDay.getTime();

    let i = 0;
    while (i < 7) {
        const currentDayDate = new Date(currentDayFullDate).getDate();
        const currentDayMonth = new Date(currentDayFullDate).getMonth();
        const currentDayYear = new Date(currentDayFullDate).getFullYear();

        tasks.forEach((task: Task) => {
            const taskFullDate = new Date(task.initialDate);
            const taskDate = taskFullDate.getDate();
            const taskMonth = taskFullDate.getMonth();
            const taskYear = taskFullDate.getFullYear();

            if (currentDayDate === taskDate &&
                currentDayMonth === taskMonth &&
                currentDayYear === taskYear) {
                printTasks(task);
            }
        })
        currentDayFullDate = (currentDayFullDate + 24 * 60 * 60000);
        i++;
    }
}



function printTasks(task: Task) {

    const initialDate = new Date(task.initialDate);
    const weekDay = initialDate.getDay();
    const initialHours = initialDate.getHours();
    const initialAbsoluteMinutes = initialDate.getMinutes() / 60;
    const decimalInitialTime = initialHours + initialAbsoluteMinutes;

    const typeOfEvent = task.taskType;

    const endDate = new Date(task.endDate);
    const finallHours = endDate.getHours();
    const finalAbsoluteMinutes = endDate.getMinutes() / 60;
    const decimalFinalTime = finallHours + finalAbsoluteMinutes;
    const durationTime = decimalFinalTime - decimalInitialTime;

    const taskSection = document.querySelector(`#day-task-section-${weekDay}`);
    const newTaskContainer = document.createElement("div");
    newTaskContainer.addEventListener("click", editTask)
    newTaskContainer.classList.add("task-container");
    newTaskContainer.setAttribute("role", "button");
    newTaskContainer.setAttribute("taskId", task.id.toString());
    newTaskContainer.innerText = task.title;
    newTaskContainer.style.top = `${decimalInitialTime * 6}rem`;
    newTaskContainer.style.height = `${durationTime * 6}rem`;
    newTaskContainer.style.width = "80%";

    switch (typeOfEvent) {
        case "task":
            break;
        case "event":
            newTaskContainer.classList.add("task-green");
            break;
        case "meeting":
            newTaskContainer.classList.add("task-blue");
            break;
        case "study":
            newTaskContainer.classList.add("task-red");
            break;
        case "other":
            newTaskContainer.classList.add("task-orange");
            break;
    }

    taskSection?.appendChild(newTaskContainer);
}
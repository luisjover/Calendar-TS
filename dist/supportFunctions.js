import { setWeekCalendar, showmonthlyCalendar } from "./mainFunctions.js";
export function setNewEventsStorage() {
    if (localStorage.getItem("events") === null || localStorage.getItem("events") === "undefined") {
        localStorage.setItem("events", JSON.stringify([]));
    }
}
export function changeWeek() {
    let totalTime = this.getAttribute("change-week-date");
    if (totalTime === null)
        return;
    let newDate = new Date(parseInt(totalTime));
    setWeekCalendar(newDate);
}
export function cleanElement(element) {
    element.replaceChildren();
}
export function setTodayWeekMonthly() {
    setWeekCalendar();
    showmonthlyCalendar();
}
export function prevFunction() {
    let newDate = new Date(`${this.getAttribute("data-prev-month")}`);
    showmonthlyCalendar(newDate);
}
export function nextFunction() {
    let newDate = new Date(`${this.getAttribute("data-next-month")}`);
    showmonthlyCalendar(newDate);
}
export function showWeek() {
    const selectedTime = this.getAttribute("real-date");
    if (selectedTime === null)
        return;
    let selectedDate = new Date(parseInt(selectedTime));
    setWeekCalendar(selectedDate);
}
export function searchProxTasks() {
    const sidebar = document.querySelector("#sidebar");
    let events;
    const storage = localStorage.getItem("events");
    if (storage === null)
        return;
    events = JSON.parse(storage);
    const nearEvents = events.sort((x, y) => new Date(x.initialDate).getTime() - new Date(y.initialDate).getTime());
    const taskGeneralAsideContainer = document.createElement("div");
    taskGeneralAsideContainer.classList.add("taskAsideContainer");
    let counter;
    if (nearEvents.length > 5)
        counter = 5;
    else
        counter = nearEvents.length;
    for (let i = 0; i < counter; i++) {
        const taskAsideContainer = document.createElement("div");
        taskAsideContainer.classList.add("card");
        const taskAsideTitle = document.createElement("h3");
        taskAsideTitle.textContent = nearEvents[i].title;
        const taskAsideDesc = document.createElement("p");
        taskAsideDesc.textContent = `Description: ${nearEvents[i].taskDescription}`;
        const taskAsideDate = document.createElement("p");
        taskAsideDate.textContent = `Date: ${nearEvents[i].initialDate}`;
        taskAsideContainer.appendChild(taskAsideTitle);
        taskAsideContainer.appendChild(taskAsideDesc);
        taskAsideContainer.appendChild(taskAsideDate);
        taskGeneralAsideContainer.appendChild(taskAsideContainer);
    }
    sidebar === null || sidebar === void 0 ? void 0 : sidebar.appendChild(taskGeneralAsideContainer);
}
export function checkTimeAlert() {
    const eventsStorage = localStorage.getItem("events");
    let tasks;
    if (eventsStorage === null)
        return;
    tasks = JSON.parse(eventsStorage);
    const today = new Date();
    const todayTime = today.getTime();
    const filteredEvents = tasks.filter(filterTasksForReminder);
    const orderedEvents = filteredEvents.sort((x, y) => new Date(x.reminderTime).getTime() - new Date(y.reminderTime).getTime());
    const sameTimeEvents = orderedEvents.filter(event => event.reminderTime === orderedEvents[0].reminderTime);
    const time = sameTimeEvents[0].reminderTime - todayTime;
    console.log(time);
    const timer = setTimeout(() => {
        sameTimeEvents.forEach(task => {
            printReminder(task);
        });
    }, time);
}
function filterTasksForReminder(task) {
    const today = new Date();
    const todayTime = today.getTime();
    if (task.reminderTime !== null &&
        task.reminderTime >= todayTime &&
        task.reminderTime !== 0) {
        return task;
    }
}
function printReminder(task) {
    console.log("entra en la funcion");
    const remindersContainer = document.querySelector("#reminders-container");
    const messageContainer = document.createElement("div");
    const taskInitialTime = new Date(task.initialDate).getTime();
    const todayTime = new Date().getTime();
    const message = document.createElement("p");
    messageContainer.classList.add("message-container");
    message.innerText = `${task.title} is happening in ${Math.round((taskInitialTime - todayTime) / 60000)} minutes`;
    messageContainer.appendChild(message);
    remindersContainer === null || remindersContainer === void 0 ? void 0 : remindersContainer.appendChild(messageContainer);
    checkTimeAlert();
    setTimeout(() => {
        remindersContainer === null || remindersContainer === void 0 ? void 0 : remindersContainer.replaceChildren();
    }, 15000);
}
export function classRemoverIcon(iCorrect, iWrong) {
    iWrong.classList.remove("form__text--show");
    iWrong.classList.remove("form__choose--show");
    iWrong.classList.remove("form__type--show");
    iWrong.classList.remove("form__icon--none");
    iCorrect.classList.remove("form__text--show");
    iCorrect.classList.remove("form__choose--show");
    iCorrect.classList.remove("form__type--show");
    iCorrect.classList.remove("form__icon--none");
}
export function classModalCleaner(arrayModalIcons) {
    arrayModalIcons.forEach(input => {
        input.classList.remove("form__text--show");
        input.classList.remove("form__choose--show");
        input.classList.remove("form__type--show");
        input.classList.add("form__icon--none");
    });
}
export function formCleaner(arrayModalComponents) {
    const checkDateEnd = document.querySelector("#checkDateEnd");
    const checkReminder = document.querySelector("#checkReminder");
    if (checkDateEnd === null || checkReminder === null)
        return;
    arrayModalComponents.forEach(input => {
        input.value = "";
        input.dataset.conform = "noOk";
    });
    checkDateEnd.checked = false;
    checkReminder.checked = false;
}
export function editTask() {
    console.log("estoy aquí");
    const containerModalTask = document.querySelector("#containerModalTask");
    const taskId = this.getAttribute("taskId");
    if (taskId === null)
        return;
    const parsedTaskId = parseInt(taskId);
    const storage = localStorage.getItem("events");
    if (storage === null)
        return;
    const taskList = JSON.parse(storage);
    let modalInstance = new window.bootstrap.Modal(containerModalTask);
    console.log("estoy aquí");
    modalInstance.show();
    const createBtn = document.querySelector("#form-create-btn");
    const saveBtn = document.querySelector("#form-save-btn");
    if (createBtn === null || saveBtn === null)
        return;
    createBtn.style.display = "none";
    saveBtn.style.display = "inline-block";
    saveBtn.setAttribute("taskId", taskId);
    checkTimeAlert();
}
export function modifyTask() {
    console.log(this);
}
//# sourceMappingURL=supportFunctions.js.map
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
    taskGeneralAsideContainer.replaceChildren();
    taskGeneralAsideContainer.classList.add("taskAsideContainer");
    let counter;
    if (nearEvents.length > 8)
        counter = 8;
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
    if (filteredEvents.length === 0)
        return;
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
export function classModalCleaner() {
    const taskTitleIconCorrect = document.querySelector("#taskTitleIconCorrect");
    const taskTitleIconWrong = document.querySelector("#taskTitleIconWrong");
    const taskDateIniIconCorrect = document.querySelector("#taskDateIniIconCorrect");
    const taskDateIniIconWrong = document.querySelector("#taskDateIniIconWrong");
    const taskDateEndIconCorrect = document.querySelector("#taskDateEndIconCorrect");
    const taskDateEndIconWrong = document.querySelector("#taskDateEndIconWrong");
    const selectReminderIconCorrect = document.querySelector("#selectReminderIconCorrect");
    const selectReminderIconWrong = document.querySelector("#selectReminderIconWrong");
    const taskDescriptionAreaIconCorrect = document.querySelector("#taskDescriptionAreaIconCorrect");
    const taskDescriptionAreaIconWrong = document.querySelector("#taskDescriptionAreaIconWrong");
    const selectTypeIconCorrect = document.querySelector("#selectTypeIconCorrect");
    const selectTypeIconWrong = document.querySelector("#selectTypeIconWrong");
    if (taskTitleIconCorrect === null ||
        taskTitleIconWrong === null ||
        taskDateIniIconCorrect === null ||
        taskDateIniIconWrong === null ||
        taskDateEndIconCorrect === null ||
        taskDateEndIconWrong === null ||
        selectReminderIconCorrect === null ||
        selectReminderIconWrong === null ||
        taskDescriptionAreaIconCorrect === null ||
        taskDescriptionAreaIconWrong === null ||
        selectTypeIconCorrect === null ||
        selectTypeIconWrong === null) {
        return;
    }
    const arrayModalIcons = [taskTitleIconCorrect, taskTitleIconWrong, taskDateIniIconCorrect, taskDateIniIconWrong, taskDateEndIconCorrect, taskDateEndIconWrong, selectReminderIconCorrect, selectReminderIconWrong, taskDescriptionAreaIconCorrect, taskDescriptionAreaIconWrong, selectTypeIconCorrect, selectTypeIconWrong];
    arrayModalIcons.forEach(input => {
        input.classList.remove("form__text--show");
        input.classList.remove("form__choose--show");
        input.classList.remove("form__type--show");
        input.classList.add("form__icon--none");
    });
}
export function formCleaner() {
    console.log("entra en crear");
    const taskTitleInput = document.querySelector("#taskTitle");
    const taskDateIniInput = document.querySelector("#taskDateIniInput");
    const checkDateEnd = document.querySelector("#checkDateEnd");
    const checkReminder = document.querySelector("#checkReminder");
    const taskDateEndInput = document.querySelector("#taskDateEndInput");
    const selectReminder = document.querySelector("#reminderSelect");
    const taskDescriptionArea = document.querySelector("#taskDescriptionArea");
    const selectType = document.querySelector("#taskTypeSelect");
    if (taskTitleInput === null ||
        taskDateIniInput === null ||
        checkDateEnd === null ||
        checkReminder === null ||
        taskDateEndInput === null ||
        selectReminder === null ||
        taskDescriptionArea === null ||
        selectType === null) {
        return;
    }
    ;
    const arrayModalComponents = [taskTitleInput, taskDateIniInput, taskDateEndInput, selectReminder, taskDescriptionArea, selectType];
    taskDateEndInput.min = "";
    taskDateEndInput.max = "";
    arrayModalComponents.forEach(input => {
        input.value = "";
        if (input.dataset.must == "yes") {
            input.dataset.conform = "noOk";
        }
        else if (input.dataset.must == "no") {
            input.dataset.conform = "ok";
        }
    });
    selectReminder.value = "0";
    selectType.value = "0";
    checkDateEnd.checked = false;
    checkReminder.checked = false;
}
export function editTask() {
    const containerModalTask = document.querySelector("#containerModalTask");
    const title = document.querySelector("#taskTitle");
    const initialDate = document.querySelector("#taskDateIniInput");
    const finalDate = document.querySelector("#taskDateEndInput");
    const reminderTime = document.querySelector("#reminderSelect");
    const description = document.querySelector("#taskDescriptionArea");
    const typeSelect = document.querySelector("#taskTypeSelect");
    if (title === null ||
        initialDate === null ||
        finalDate === null ||
        reminderTime === null ||
        description === null ||
        typeSelect === null) {
        return;
    }
    const taskId = this.getAttribute("taskId");
    if (taskId === null)
        return;
    const modalInstance = new window.bootstrap.Modal(containerModalTask);
    modalInstance.show();
    const storage = localStorage.getItem("events");
    if (storage === null)
        return;
    const taskList = JSON.parse(storage);
    initialStateInputsToModify();
    taskList.forEach(task => {
        if (task.id === parseInt(taskId)) {
            title.value = task.title;
            initialDate.value = task.initialDate;
            if (task.endDate === null)
                finalDate.value = "";
            else
                finalDate.value = task.endDate;
            if (task.reminderTime === null)
                reminderTime.value = "";
            else
                reminderTime.value = `${task.reminderTime}`;
            if (task.taskDescription === null)
                description.value = "";
            else
                description.value = task.taskDescription;
            typeSelect.value = task.taskType;
        }
    });
    const createBtn = document.querySelector("#form-create-btn");
    const saveBtn = document.querySelector("#form-save-btn");
    if (createBtn === null || saveBtn === null)
        return;
    createBtn.style.display = "none";
    saveBtn.style.display = "inline-block";
    saveBtn.disabled = false;
    saveBtn.setAttribute("taskId", taskId);
}
export function modifyTask() {
    const title = document.querySelector("#taskTitle");
    const initialDate = document.querySelector("#taskDateIniInput");
    const finalDate = document.querySelector("#taskDateEndInput");
    const reminderTime = document.querySelector("#reminderSelect");
    const description = document.querySelector("#taskDescriptionArea");
    const typeSelect = document.querySelector("#taskTypeSelect");
    if (title === null ||
        initialDate === null ||
        finalDate === null ||
        reminderTime === null ||
        description === null ||
        typeSelect === null) {
        return;
    }
    const currentTaskStringId = this.getAttribute("taskId");
    if (currentTaskStringId === null)
        return;
    const currentTaskId = parseInt(currentTaskStringId);
    const storage = localStorage.getItem("events");
    if (storage === null)
        return;
    const taskList = JSON.parse(storage);
    taskList.forEach(task => {
        if (task.id === currentTaskId) {
            task.title = title.value;
            task.initialDate = initialDate.value;
            task.endDate = finalDate.value;
            task.reminderTime = parseInt(reminderTime.value);
            task.taskDescription = description.value;
            task.taskType = typeSelect.value;
            console.log(task);
        }
    });
    localStorage.setItem("events", JSON.stringify(taskList));
    checkTimeAlert();
    setWeekCalendar(new Date(initialDate.value));
    resetModalButtons();
    initialStateInputsToCreate();
    resetModalButtons();
    classModalCleaner();
    formCleaner();
    searchProxTasks();
}
export function calculDate(date) {
    const timeZone = date.getTimezoneOffset() * 60000;
    const localDate = new Date(date.getTime() - timeZone);
    return localDate.toISOString();
}
export function resetModalButtons() {
    console.log("entra");
    const btnCreate = document.querySelector("#form-create-btn");
    const btnSave = document.querySelector("#form-save-btn");
    if (btnCreate === null || btnSave === null)
        return;
    btnCreate.style.display = "inline-block";
    btnSave.style.display = "none";
}
export function initialStateInputsToCreate() {
    const title = document.querySelector("#taskTitle");
    const initialDate = document.querySelector("#taskDateIniInput");
    const finalDate = document.querySelector("#taskDateEndInput");
    const reminderTime = document.querySelector("#reminderSelect");
    const description = document.querySelector("#taskDescriptionArea");
    const typeSelect = document.querySelector("#taskTypeSelect");
    if (title === null ||
        initialDate === null ||
        finalDate === null ||
        reminderTime === null ||
        description === null ||
        typeSelect === null) {
        return;
    }
    finalDate.disabled = true;
    reminderTime.disabled = true;
    description.disabled = true;
    typeSelect.disabled = true;
    title.dataset.conform = "noOk";
    initialDate.dataset.conform = "noOk";
    finalDate.dataset.conform = "ok";
    reminderTime.dataset.conform = "ok";
    description.dataset.conform = "ok";
    typeSelect.dataset.conform = "noOk";
}
export function initialStateInputsToModify() {
    const title = document.querySelector("#taskTitle");
    const initialDate = document.querySelector("#taskDateIniInput");
    const finalDate = document.querySelector("#taskDateEndInput");
    const reminderTime = document.querySelector("#reminderSelect");
    const description = document.querySelector("#taskDescriptionArea");
    const typeSelect = document.querySelector("#taskTypeSelect");
    if (title === null ||
        initialDate === null ||
        finalDate === null ||
        reminderTime === null ||
        description === null ||
        typeSelect === null) {
        return;
    }
    title.disabled = false;
    initialDate.disabled = false;
    finalDate.disabled = false;
    reminderTime.disabled = false;
    description.disabled = false;
    typeSelect.disabled = false;
    title.dataset.conform = "ok";
    initialDate.dataset.conform = "ok";
    finalDate.dataset.conform = "ok";
    reminderTime.dataset.conform = "ok";
    description.dataset.conform = "ok";
    typeSelect.dataset.conform = "ok";
}
//# sourceMappingURL=supportFunctions.js.map
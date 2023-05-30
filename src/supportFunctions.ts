import { setWeekCalendar, showmonthlyCalendar } from "./mainFunctions.js";
import { ArrayModalComponents, Task } from "./types.js";


export function setNewEventsStorage() {
    if (localStorage.getItem("events") === null || localStorage.getItem("events") === "undefined") {
        localStorage.setItem("events", JSON.stringify([]))
    }
}



export function changeWeek(this: HTMLButtonElement) {
    let totalTime = this.getAttribute("change-week-date");
    if (totalTime === null) return;

    let newDate = new Date(parseInt(totalTime));
    setWeekCalendar(newDate);
}

export function cleanElement(element: HTMLElement) {
    element.replaceChildren();
}



export function setTodayWeekMonthly() {
    setWeekCalendar();
    showmonthlyCalendar();
}


export function prevFunction(this: HTMLElement) {
    let newDate = new Date(`${this.getAttribute("data-prev-month")}`);
    showmonthlyCalendar(newDate);
}

export function nextFunction(this: HTMLElement) {
    let newDate = new Date(`${this.getAttribute("data-next-month")}`);
    showmonthlyCalendar(newDate);
}


export function showWeek(this: HTMLElement) {
    const selectedTime = this.getAttribute("real-date");
    if (selectedTime === null) return
    let selectedDate = new Date(parseInt(selectedTime));
    setWeekCalendar(selectedDate);
}


export function searchProxTasks() {

    const sidebar = document.querySelector("#sidebar");

    let events: any;
    const storage = localStorage.getItem("events");
    if (storage === null) return;
    events = JSON.parse(storage);



    const nearEvents = events.sort((x: Task, y: Task) => new Date(x.initialDate).getTime() - new Date(y.initialDate).getTime());

    const taskGeneralAsideContainer = document.createElement("div");
    taskGeneralAsideContainer.replaceChildren();
    taskGeneralAsideContainer.classList.add("taskAsideContainer");
    let counter;
    if (nearEvents.length > 8) counter = 8;
    else counter = nearEvents.length


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
    sidebar?.appendChild(taskGeneralAsideContainer);



}










export function checkTimeAlert() {
    const eventsStorage = localStorage.getItem("events")
    let tasks: Task[];
    if (eventsStorage === null) return;
    tasks = JSON.parse(eventsStorage);
    const today = new Date();
    const todayTime = today.getTime();

    const filteredEvents = tasks.filter(filterTasksForReminder);
    if (filteredEvents.length === 0) return;


    const orderedEvents = filteredEvents.sort((x, y) => new Date(x.reminderTime).getTime() - new Date(y.reminderTime).getTime());
    const sameTimeEvents = orderedEvents.filter(event => event.reminderTime === orderedEvents[0].reminderTime);

    const time = sameTimeEvents[0].reminderTime - todayTime;
    console.log(time);


    const timer = setTimeout(() => {
        sameTimeEvents.forEach(task => {
            printReminder(task);
        })
    }, time);

}

function filterTasksForReminder(task: Task) {
    const today = new Date();
    const todayTime = today.getTime();
    if (task.reminderTime !== null &&
        task.reminderTime >= todayTime &&
        task.reminderTime !== 0) {
        return task;
    }

}

function printReminder(task: Task) {
    console.log("entra en la funcion");
    const remindersContainer = document.querySelector("#reminders-container");
    const messageContainer = document.createElement("div");
    const taskInitialTime = new Date(task.initialDate).getTime();
    const todayTime = new Date().getTime();
    const message = document.createElement("p");

    messageContainer.classList.add("message-container");

    message.innerText = `${task.title} is happening in ${Math.round((taskInitialTime - todayTime) / 60000)} minutes`;

    messageContainer.appendChild(message);
    remindersContainer?.appendChild(messageContainer);

    checkTimeAlert();

    setTimeout(() => {
        remindersContainer?.replaceChildren();
    }, 15000);

}


//FORM SUPPORT FUNCTIONS

export function classRemoverIcon(iCorrect: HTMLElement, iWrong: HTMLElement) {
    iWrong.classList.remove("form__text--show");
    iWrong.classList.remove("form__choose--show");
    iWrong.classList.remove("form__type--show");
    iWrong.classList.remove("form__icon--none");
    iCorrect.classList.remove("form__text--show");
    iCorrect.classList.remove("form__choose--show");
    iCorrect.classList.remove("form__type--show");
    iCorrect.classList.remove("form__icon--none");
}


export function classModalCleaner(arrayModalIcons: HTMLImageElement[]) {

    arrayModalIcons.forEach(input => {
        input.classList.remove("form__text--show");
        input.classList.remove("form__choose--show");
        input.classList.remove("form__type--show");
        input.classList.add("form__icon--none");
    });
}

// FORM cleaner
export function formCleaner(arrayModalComponents: ArrayModalComponents) {

    const checkDateEnd = document.querySelector("#checkDateEnd") as HTMLInputElement | null;
    const checkReminder = document.querySelector("#checkReminder") as HTMLInputElement | null;
    if (checkDateEnd === null || checkReminder === null) return;

    arrayModalComponents.forEach(input => {
        input.value = "";
        input.dataset.conform = "noOk"
    })

    checkDateEnd.checked = false;
    checkReminder.checked = false;
}

export function editTask(this: HTMLElement) {

    const containerModalTask = document.querySelector("#containerModalTask");
    const title = document.querySelector("#taskTitle") as HTMLInputElement | null;
    const initialDate = document.querySelector("#taskDateIniInput") as HTMLInputElement | null;
    const finalDate = document.querySelector("#taskDateEndInput") as HTMLInputElement | null;
    const reminderTime = document.querySelector("#reminderSelect") as HTMLSelectElement | null;
    const description = document.querySelector("#taskDescriptionArea") as HTMLTextAreaElement | null;
    const typeSelect = document.querySelector("#taskTypeSelect") as HTMLSelectElement | null;

    if (title === null ||
        initialDate === null ||
        finalDate === null ||
        reminderTime === null ||
        description === null ||
        typeSelect === null) {
        return;
    }

    const taskId = this.getAttribute("taskId");
    if (taskId === null) return;

    const modalInstance: any = new (window as any).bootstrap.Modal(containerModalTask);
    modalInstance.show();

    const storage = localStorage.getItem("events");
    if (storage === null) return;
    const taskList: Task[] = JSON.parse(storage);

    taskList.forEach(task => {
        if (task.id === parseInt(taskId)) {
            title.value = task.title;
            initialDate.value = task.initialDate;
            if (task.endDate === null) finalDate.value = "";
            else finalDate.value = task.endDate;
            if (task.reminderTime === null) reminderTime.value = "";
            else reminderTime.value = `${task.reminderTime}`;
            if (task.taskDescription === null) description.value = "";
            else description.value = task.taskDescription;
            typeSelect.value = task.taskType;
        }
    });

    const createBtn = document.querySelector("#form-create-btn") as HTMLButtonElement | null;
    const saveBtn = document.querySelector("#form-save-btn") as HTMLButtonElement | null;
    if (createBtn === null || saveBtn === null) return;
    createBtn.style.display = "none";
    saveBtn.style.display = "inline-block";
    saveBtn.setAttribute("taskId", taskId);


}

export function modifyTask(this: HTMLElement) {

    const title = document.querySelector("#taskTitle") as HTMLInputElement | null;
    const initialDate = document.querySelector("#taskDateIniInput") as HTMLInputElement | null;
    const finalDate = document.querySelector("#taskDateEndInput") as HTMLInputElement | null;
    const reminderTime = document.querySelector("#reminderSelect") as HTMLSelectElement | null;
    const description = document.querySelector("#taskDescriptionArea") as HTMLTextAreaElement | null;
    const typeSelect = document.querySelector("#taskTypeSelect") as HTMLSelectElement | null;

    if (title === null ||
        initialDate === null ||
        finalDate === null ||
        reminderTime === null ||
        description === null ||
        typeSelect === null) {
        return;
    }

    const currentTaskStringId = this.getAttribute("taskId");
    if (currentTaskStringId === null) return;
    const currentTaskId = parseInt(currentTaskStringId);
    const storage = localStorage.getItem("events");
    if (storage === null) return;
    const taskList: Task[] = JSON.parse(storage);


    taskList.forEach(task => {
        if (task.id === currentTaskId) {

            task.title = title.value;
            task.initialDate = initialDate.value;
            task.endDate = finalDate.value;
            task.reminderTime = parseInt(reminderTime.value);
            task.taskDescription = description.value;
            task.taskType = typeSelect.value;

        }
    })

    localStorage.setItem("events", JSON.stringify(taskList));

    checkTimeAlert();
    searchProxTasks();
    setWeekCalendar(new Date(initialDate.value));
    //METER LOS CLEAR DEL FORMULARIO;
}


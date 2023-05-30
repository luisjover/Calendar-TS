import { Task } from "./types.js";

export function createTask() {
    let events;
    const storage = localStorage.getItem("events");
    if (storage !== null) {
        events = JSON.parse(storage);
    }

    let taskId: number;
    if (events) {
        taskId = events.length;
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
    const finalDate = finalDateElement?.value;
    if (reminderTimeSelectElement?.value === null || reminderTimeSelectElement?.value === undefined) return;
    const reminderTimeSelect = reminderTimeSelectElement?.value;
    if (taskDescriptionElement?.value === null || taskDescriptionElement?.value === undefined) return;
    const taskDescription = taskDescriptionElement?.value;
    if (taskTypeSelectElement?.value === null || taskTypeSelectElement?.value === undefined) return;
    const taskType = taskTypeSelectElement?.value;


    const objeto = new Task(taskId, taskTitle, initialDate, finalDate, parseInt(reminderTimeSelect), taskDescription, taskType);

    events?.push(objeto)

    localStorage.setItem("events", JSON.stringify(events));

}
searchProxTasks();
function searchProxTasks () {

    const sidebar = document.querySelector ("#sidebar");

    let events;
    const storage = localStorage.getItem("events");
    if (storage !== null) {
        events = JSON.parse(storage);
    }
    
    const nearEvents = events.sort((x:Task,y:Task) => new Date(x.initialDate).getTime() - new Date(y.initialDate).getTime());


    const taskGeneralAsideContainer = document.createElement("div");
    taskGeneralAsideContainer.classList.add ("taskAsideContainer");
    
    for (let i=0; i<6; i++) {
        const taskAsideContainer = document.createElement ("div");
        taskAsideContainer.classList.add ("card");
        const taskAsideTitle = document.createElement ("h3");
        taskAsideTitle.textContent = nearEvents[i].title;
        const taskAsideDesc = document.createElement ("p");
        taskAsideDesc.textContent = `Description: ${nearEvents[i].taskDescription}`;
        const taskAsideDate = document.createElement ("p");
        taskAsideDate.textContent = `Date: ${nearEvents[i].initialDate}`;
        taskAsideContainer.appendChild (taskAsideTitle);
        taskAsideContainer.appendChild (taskAsideDesc);
        taskAsideContainer.appendChild (taskAsideDate);
        taskGeneralAsideContainer.appendChild(taskAsideContainer);
    }
    sidebar?.appendChild (taskGeneralAsideContainer);

}
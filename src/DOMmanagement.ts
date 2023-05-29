import { Transaction } from "../../../node_modules/lmdb/index";
import { createTask } from "./modalFunction.js";
setMain()
function setMain() {
    if (localStorage.getItem("events") === null || localStorage.getItem("events") === "undefined") {
        localStorage.setItem("events", JSON.stringify([]))
    }
}

openModalCreateTask();

function openModalCreateTask() {

    // creating containerModalTask
    const containerModalTask = document.createElement("div");
    containerModalTask.classList.add("modal", "fade");
    containerModalTask.id = "containerModalTask";
    containerModalTask.setAttribute("tabindex", "-1");
    containerModalTask.setAttribute("aria-labelledby", "exampleModalLabel");
    containerModalTask.setAttribute("aria-hidden", "true");
    // creating modalDialog
    const modalDialog = document.createElement("div");
    modalDialog.classList.add("modal-dialog");
    modalDialog.id = "modalDialog";
    // creating modalContent
    const modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");
    modalContent.id = "modalContent";
    // insertion modal basics
    containerModalTask.appendChild(modalDialog);
    modalDialog.appendChild(modalContent);

    // creating modalHeader
    const modalHeader = document.createElement("div");
    modalHeader.classList.add("modal-header");
    modalHeader.id = "modalHeader";
    // creating formTitle
    const modalTitle = document.createElement("h1");
    modalTitle.classList.add("modal-title");
    modalTitle.id = "modalTitle";//verification.igual no se utiliza
    modalTitle.textContent = "Define event";//verification.Igual mejor otro contenido
    // creating btnClose
    const btnCloseX = document.createElement("button");
    btnCloseX.type = "button";
    btnCloseX.classList.add("btn-close");
    btnCloseX.setAttribute("data-bs-dismiss", "modal");
    btnCloseX.setAttribute("aria-label", "Close");
    // insertion header
    modalHeader.appendChild(modalTitle);
    modalHeader.appendChild(btnCloseX);
    modalContent.appendChild(modalHeader);
    document.body.appendChild(containerModalTask);

    // creating modalBody
    const modalBody = document.createElement("div");
    modalBody.classList.add("modal-body");
    modalDialog.id = "modalBody";
    // creating taskForm
    const taskForm = document.createElement("form");
    taskForm.name = "createTaskForm";
    taskForm.id = "taskForm";

    // creating taskTitleContainer
    const taskTitleContainer = document.createElement("div");
    taskTitleContainer.classList.add("mb-3", "form__groupe");
    taskTitleContainer.id = "taskTitleContainer"; // Limpiar
    // creating taskTitleInputIconContainer
    const taskTitleInputIconContainer = document.createElement("div");
    taskTitleContainer.classList.add("mb-3", "form__groupe--input");
    // creating taskTitleInput
    const taskTitleInput = document.createElement("input");
    taskTitleInput.type = "text";
    taskTitleInput.classList.add("form-control");
    taskTitleInput.id = "taskTitle";
    taskTitleInput.placeholder = "Insert a task or event title";
    taskTitleInput.required = true;
    taskTitleInput.setAttribute ("data-conform","noOk");
    // creating taskTitleIcon
    const taskTitleIconCorrect = document.createElement("img");
    taskTitleIconCorrect.src = "../assets/img/icons8-correct.svg"
    taskTitleIconCorrect.classList.add ("form__icon--none");
    const taskTitleIconWrong = document.createElement("img");
    taskTitleIconWrong.src = "../assets/img/icons8-wrong.svg"
    taskTitleIconWrong.classList.add ("form__icon--none");
    // insertion title
    taskTitleInputIconContainer.appendChild(taskTitleInput);
    taskTitleInputIconContainer.appendChild(taskTitleIconCorrect);
    taskTitleInputIconContainer.appendChild(taskTitleIconWrong);
    taskTitleContainer.appendChild(taskTitleInputIconContainer);
    taskForm.appendChild(taskTitleContainer);

    // creating taskDateIniContainer
    const taskDateIniContainer = document.createElement("div");
    taskDateIniContainer.classList.add("mb-3", "row", "form__groupe");
    taskDateIniContainer.id = "taskDateIniContainer";
    // creating taskDateIniInputContainer
    const taskDateIniInputContainer = document.createElement("div");
    taskDateIniInputContainer.classList.add("col-sm-9", "col-xs-12");
    // creating taskDateIniInput
    const taskDateIniInput = document.createElement("input");
    taskDateIniInput.type = "datetime-local";
    let minIni = new Date().toISOString();
    minIni = minIni.slice(0, -8)
    taskDateIniInput.min = minIni;
    taskDateIniInput.step = "300";
    taskDateIniInput.classList.add("form-control");
    taskDateIniInput.id = "taskDateIniInput";
    taskDateIniInput.required = true;
    taskDateIniInput.setAttribute ("data-conform","noOk");
    // creating taskDateIniLabel
    const taskDateIniLabel = document.createElement("label");
    taskDateIniLabel.classList.add("col-sm-3", "col-form-label");
    taskDateIniLabel.htmlFor = "taskDateIniInput";
    taskDateIniLabel.textContent = "Initial Date";
    // creating taskTitleIcon
    const taskDateIniIconCorrect = document.createElement("img");
    taskDateIniIconCorrect.src = "../assets/img/icons8-correct.svg"
    taskDateIniIconCorrect.classList.add ("form__icon--none");
    const taskDateIniIconWrong = document.createElement("img");
    taskDateIniIconWrong.src = "../assets/img/icons8-wrong.svg"
    taskDateIniIconWrong.classList.add ("form__icon--none");
    // insertion dataIni
    taskDateIniInputContainer.appendChild(taskDateIniInput);
    taskDateIniContainer.appendChild(taskDateIniLabel);
    taskDateIniContainer.appendChild(taskDateIniInputContainer);
    taskDateIniInputContainer.appendChild(taskDateIniIconCorrect);
    taskDateIniInputContainer.appendChild(taskDateIniIconWrong);
    taskForm.appendChild(taskDateIniContainer);

    // creating taskDateEndContainer
    const taskDateEndContainer = document.createElement("div");
    taskDateEndContainer.classList.add("mb-3", "row", "form__groupe" );
    taskDateEndContainer.id = "taskDateEndContainer";
    // creating checkDateEndContainer
    const checkDateEndContainer = document.createElement("div");
    checkDateEndContainer.classList.add("col-form-label", "col-sm-3");
    // Creating checkDateEnd
    const checkDateEnd = document.createElement("input");
    checkDateEnd.type = "checkbox";
    checkDateEnd.classList.add("form-check-input");
    checkDateEnd.value = "";
    checkDateEnd.id = "checkDateEnd";
    // creating checkDateEndLabel
    const checkDateEndLabel = document.createElement("label");
    checkDateEndLabel.classList.add("form-check-label", "ms-1");
    checkDateEndLabel.htmlFor = "checkDateEnd";
    checkDateEndLabel.textContent = "End Date";
    // Creating taskDateEndInputContainer
    const taskDateEndInputContainer = document.createElement("div");
    taskDateEndInputContainer.classList.add("col-sm-9", "col-xs-12");
    taskDateEndInputContainer.id = "taskDateEndInputContainer";
    // Creating taskDateEndInput
    const taskDateEndInput = document.createElement("input");
    taskDateEndInput.type = "datetime-local";
    taskDateEndInput.classList.add("form-control");
    taskDateEndInput.min = "";
    taskDateEndInput.max = "";
    taskDateEndInput.disabled = true;
    taskDateEndInput.id = "taskDateEndInput";
    taskDateEndInput.setAttribute ("data-conform","ok");
    // creating taskTitleIcon
    const taskDateEndIconCorrect = document.createElement("img");
    taskDateEndIconCorrect.src = "../assets/img/icons8-correct.svg"
    taskDateEndIconCorrect.classList.add ("form__icon--none");
    const taskDateEndIconWrong = document.createElement("img");
    taskDateEndIconWrong.src = "../assets/img/icons8-wrong.svg"
    taskDateEndIconWrong.classList.add ("form__icon--none");
    // insertion dateEnd
    checkDateEndContainer.appendChild(checkDateEnd);
    checkDateEndContainer.appendChild(checkDateEndLabel);
    taskDateEndInputContainer.appendChild(taskDateEndInput);
    taskDateEndContainer.appendChild(checkDateEndContainer);
    taskDateEndContainer.appendChild(taskDateEndInputContainer);
    taskDateEndInputContainer.appendChild(taskDateEndIconCorrect);
    taskDateEndInputContainer.appendChild(taskDateEndIconWrong);
    taskForm.appendChild(taskDateEndContainer);

    // creating reminderContainer
    const reminderContainer = document.createElement("div");
    reminderContainer.classList.add("mb-3", "row", "form__groupe");
    // creating checkReminderContainer
    const checkReminderContainer = document.createElement("div");
    checkReminderContainer.classList.add("col-form-label", "col-sm-3");
    // creating checkReminder
    const checkReminder = document.createElement("input");
    checkReminder.type = "checkbox";
    checkReminder.classList.add("form-check-input");
    checkReminder.value = "";
    checkReminder.id = "checkReminder";
    // creating checkReminderLabel
    const checkReminderLabel = document.createElement("label");
    checkReminderLabel.classList.add("form-check-label", "ms-1");
    checkReminderLabel.htmlFor = "reminderCheck";
    checkReminderLabel.textContent = "Reminder";
    // creating selectContainer
    const selectReminderContainer = document.createElement("div");
    selectReminderContainer.classList.add("col-sm-9", "col-xs-12");
    selectReminderContainer.id = "selectReminderContainer";
    // creating selectReminder
    const selectReminder = document.createElement("select");
    selectReminder.classList.add("form-select");
    selectReminder.setAttribute("aria-label", "Default select example");
    selectReminder.id = "reminderSelect";
    selectReminder.disabled = true;
    selectReminder.setAttribute ("data-conform","ok");
    // creating selectReminderOptions
    let selectReminderOptions = [
        { value: "", text: "Open this select menu" },
        { value: "1", text: "5min before" },
        { value: "2", text: "10min before" },
        { value: "3", text: "15min before" },
        { value: "4", text: "30min before" },
        { value: "5", text: "1h before" },
    ];
    selectReminderOptions.forEach(option => {
        const selectOption = document.createElement("option");
        selectOption.value = option.value;
        selectOption.textContent = option.text;
        selectReminder.appendChild(selectOption);//Verification
    });
    // creating taskTitleIcon
    const taskReminderIconCorrect = document.createElement("img");
    taskReminderIconCorrect.src = "../assets/img/icons8-correct.svg"
    taskReminderIconCorrect.classList.add ("form__icon--none");
    const taskReminderIconWrong = document.createElement("img");
    taskReminderIconWrong.src = "../assets/img/icons8-wrong.svg"
    taskReminderIconWrong.classList.add ("form__icon--none");
    // insertion reminder
    checkReminderContainer.appendChild(checkReminder);
    checkReminderContainer.appendChild(checkReminderLabel);
    selectReminderContainer.appendChild(selectReminder);
    reminderContainer.appendChild(checkReminderContainer);
    reminderContainer.appendChild(selectReminderContainer);
    selectReminderContainer.appendChild(taskReminderIconCorrect);
    selectReminderContainer.appendChild(taskReminderIconWrong);
    taskForm.appendChild(reminderContainer);

    // creating taskDescriptionContainer
    const taskDescriptionContainer = document.createElement("div");
    taskDescriptionContainer.classList.add("mb-3", "form__groupe");
    taskDescriptionContainer.id = "taskDescriptionContainer";
    // creating taskDescriptionArea
    const taskDescriptionArea = document.createElement("textarea");
    taskDescriptionArea.classList.add("form-control");
    taskDescriptionArea.id = "taskDescriptionArea";
    taskDescriptionArea.rows = 4;
    taskDescriptionArea.placeholder = "Type a brief description of the event or task...";
    taskDescriptionArea.disabled = true;
    taskDescriptionArea.setAttribute ("data-conform","ok");
    // creating taskTitleIcon
    const taskDescriptionIconCorrect = document.createElement("img");
    taskDescriptionIconCorrect.src = "../assets/img/icons8-correct.svg"
    taskDescriptionIconCorrect.classList.add ("form__icon--none");
    const taskDescriptionIconWrong = document.createElement("img");
    taskDescriptionIconWrong.src = "../assets/img/icons8-wrong.svg"
    taskDescriptionIconWrong.classList.add ("form__icon--none");
    // insertion taskDescription
    taskDescriptionContainer.appendChild(taskDescriptionArea);
    taskDescriptionContainer.appendChild(taskDescriptionIconCorrect);
    taskDescriptionContainer.appendChild(taskDescriptionIconWrong);
    taskForm.appendChild(taskDescriptionContainer);

    // creating taskTypeContainer
    const selectTypeContainer = document.createElement("div");
    selectTypeContainer.classList.add("mb-3", "form__groupe");
    selectTypeContainer.id = "selectTypeContainer";
    // creating selectType
    const selectType = document.createElement("select");
    selectType.classList.add("form-select");
    selectType.setAttribute("aria-label", "Default select example");
    selectType.id = "taskTypeSelect";
    selectType.required = true;
    selectType.disabled = true;
    selectType.setAttribute ("data-conform","noOk");
    // creating selectTypeOptions
    const selectTypeOptions = [
        { value: "", text: "Open this select menu" },
        { value: "task", text: "Task" },
        { value: "event", text: "Event" },
        { value: "meeting", text: "Meeting" },
        { value: "study", text: "Study" },
        { value: "other", text: "Other" },
    ];
    selectTypeOptions.forEach(option => {
        const selectOption = document.createElement("option");
        selectOption.value = option.value;
        selectOption.textContent = option.text;
        selectType.appendChild(selectOption);//Verification
    });
    const taskTypeIconCorrect = document.createElement("img");
    taskTypeIconCorrect.src = "../assets/img/icons8-correct.svg"
    taskTypeIconCorrect.classList.add ("form__icon--none");
    const taskTypeIconWrong = document.createElement("img");
    taskTypeIconWrong.src = "../assets/img/icons8-wrong.svg"
    taskTypeIconWrong.classList.add ("form__icon--none");
    // insertion selectType
    selectTypeContainer.appendChild(selectType);
    selectTypeContainer.appendChild(taskTypeIconCorrect);
    selectTypeContainer.appendChild(taskTypeIconWrong);
    taskForm.appendChild(selectTypeContainer);

    modalBody.appendChild(taskForm);
    modalContent.appendChild(modalBody);

    // creating modalFooter
    const modalFooter = document.createElement("div");
    modalFooter.classList.add("modal-footer");
    // creating btnClose
    const btnClose = document.createElement("button");
    btnClose.type = "button";
    btnClose.classList.add("btn", "btn-secondary");
    btnClose.setAttribute("data-bs-dismiss", "modal");
    btnClose.textContent = "Close";
    // creating btnCreate
    const btnCreate = document.createElement("button");
    btnCreate.type = "button";
    btnCreate.classList.add("btn", "btn-primary");
    btnCreate.setAttribute("form", "createTaskForm");
    btnCreate.textContent = "Create";
    btnCreate.addEventListener("click", createTask);
    btnCreate.disabled = true;
    // insertion footer
    modalFooter.appendChild(btnClose);
    modalFooter.appendChild(btnCreate);
    modalContent.appendChild(modalFooter);

    //let modalInstance: any = new (window as any).bootstrap.Modal(containerModalTask);

    //modalInstance.show();

    // control checkbox fields
    checkDateEnd.addEventListener ("click", e => {
        if (taskDateIniInput.dataset.conform != "ok" || taskTitleInput.dataset.conform != "ok"){
            const errorMessage = "The 'Inital Date' field is still empty, please fill it!!!.''"
            checkDateEnd.checked = false;
            return
        }
        if (checkDateEnd.checked == true) {
            taskDateEndInput.disabled = false;
        }else {
            taskDateEndInput.disabled = true;
            taskDateEndInput.dataset.conform = "ok";
            taskDateEndInput.value = "";
            taskDateEndIconWrong.classList.add ("form__icon--none");
            taskDateEndIconCorrect.classList.add ("form__icon--none");
            taskDateEndIconCorrect.classList.remove ("form__choose--show");
            taskDateEndIconWrong.classList.remove ("form__choose--show");
        }
    });
    checkReminder.addEventListener ("click", () => {
        if (taskDateIniInput.dataset.conform != "ok" || taskTitleInput.dataset.conform != "ok"){
            checkReminder.checked = false;
            return
        }
        if (checkReminder.checked == true) {
            selectReminder.disabled = false;
        }else {
            selectReminder.disabled = true;
            selectReminder.value = "";
            taskReminderIconCorrect.classList.remove ("form__choose--show");
            taskReminderIconWrong.classList.remove ("form__choose--show");
            taskReminderIconCorrect.classList.add ("form__icon--none");
            taskReminderIconWrong.classList.add ("form__icon--none");
        }
    });

    // control input fields
    taskTitleInput.addEventListener("input", () => {
        if (taskTitleInput.value.length >= 6){
            taskTitleInput.dataset.conform = "ok";
            taskTitleIconWrong.classList.remove ("form__text--show");
            taskTitleIconWrong.classList.add ("form__icon--none");
            taskTitleIconCorrect.classList.remove ("form__icon--none");
            taskTitleIconCorrect.classList.add ("form__text--show");
        }
        if (taskTitleInput.value.length < 6){
            taskTitleInput.dataset.conform = "noOk";
            taskTitleIconCorrect.classList.remove ("form__text--show");
            taskTitleIconCorrect.classList.add ("form__icon--none");
            taskTitleIconWrong.classList.remove ("form__icon--none");
            taskTitleIconWrong.classList.add ("form__text--show");
            // const errorMessage = "The title field must have at least 6 characters."
        }
        if (taskTitleInput.dataset.conform == "ok" && taskDateIniInput.dataset.conform == "ok" ) {
            taskDescriptionArea.disabled = false;

        }
    });

    taskDateIniInput.addEventListener("focusout", () => {
        let controlDelay = new Date (taskDateIniInput.value).getTime() - new Date().getTime();
        if (taskDateIniInput.dataset.conform == "ok"){
            taskDateEndInput.min = taskDateIniInput.value;
            taskDateEndInput.max = `${taskDateEndInput.min.slice(0, -5)}23:59`;
            selectReminder.innerHTML = "";
            selectReminderOptions = [
                { value: "", text: "Open this select menu" },
                { value: "1", text: "5min before" },
                { value: "2", text: "10min before" },
                { value: "3", text: "15min before" },
                { value: "4", text: "30min before" },
                { value: "5", text: "1h before" },
            ];
            selectReminderOptions.forEach(option => {
                const selectOption = document.createElement("option");
                selectOption.value = option.value;
                selectOption.textContent = option.text;
                selectReminder.appendChild(selectOption);
            });
            }
        if (controlDelay <= 60 * 60000 && taskDateIniInput.dataset.conform == "ok"){
        selectReminder.innerHTML = "";
        selectReminderOptions = [
            { value: "", text: "Selection not available" },
        ];
        selectReminderOptions.forEach(option => {
            const selectOption = document.createElement("option");
            selectOption.value = option.value;
            selectOption.textContent = option.text;
            selectReminder.appendChild(selectOption);
        });
        }
    });

    taskDateIniInput.addEventListener("input", () => {
        if (new Date (taskDateIniInput.value) < new Date()) {
            taskDateIniInput.dataset.conform = "noOk";
            taskDateIniIconCorrect.classList.remove ("form__choose--show");
            taskDateIniIconCorrect.classList.add ("form__icon--none");
            taskDateIniIconWrong.classList.remove ("form__icon--none");
            taskDateIniIconWrong.classList.add ("form__choose--show");
            const errorMessage = "Inital date must be greater than current date."
        } else {
            taskDateIniInput.dataset.conform = "ok";
            taskDateIniIconWrong.classList.remove ("form__choose--show");
            taskDateIniIconWrong.classList.add ("form__icon--none");
            taskDateIniIconCorrect.classList.remove ("form__icon--none");
            taskDateIniIconCorrect.classList.add ("form__choose--show");
        }
        if (taskTitleInput.dataset.conform == "ok" && taskDateIniInput.dataset.conform == "ok" ) {
            taskDescriptionArea.disabled = false;
            selectType.disabled = false;
        }else {
            taskDescriptionArea.disabled = true;
            selectType.disabled = true;
        }
    });


    taskDateEndInput.addEventListener("input", () => {
        if (new Date (taskDateEndInput.value) < new Date (taskDateIniInput.value)) {
            taskDateEndInput.dataset.conform = "noOk";
            taskDateEndIconCorrect.classList.remove ("form__choose--show");
            taskDateEndIconCorrect.classList.add ("form__icon--none");
            taskDateEndIconWrong.classList.remove ("form__icon--none");
            taskDateEndIconWrong.classList.add ("form__choose--show");
            const errorMessage = "Inital date must be greater than current date."
        } else {
            taskDateEndInput.dataset.conform = "ok";
            taskDateEndIconWrong.classList.remove ("form__choose--show");
            taskDateEndIconWrong.classList.add ("form__icon--none");
            taskDateEndIconCorrect.classList.remove ("form__icon--none");
            taskDateEndIconCorrect.classList.add ("form__choose--show");
        }
    });

    selectReminder.addEventListener("input", () => {
        if (checkReminder.checked == true && selectReminder.value != "") {
            selectReminder.dataset.conform = "ok";
            taskReminderIconCorrect.classList.add ("form__choose--show");
            taskReminderIconCorrect.classList.remove ("form__icon--none");
            taskReminderIconWrong.classList.add ("form__icon--none");
            taskReminderIconWrong.classList.remove ("form__choose--show");
        }else {
            selectReminder.dataset.conform = "ok";
            taskReminderIconWrong.classList.add ("form__choose--show");
            taskReminderIconWrong.classList.remove ("form__icon--none");
            taskReminderIconCorrect.classList.add ("form__icon--none");
            taskReminderIconCorrect.classList.remove ("form__choose--show");
        }
    });

    taskDescriptionArea.addEventListener("input", () => {
        if (taskDescriptionArea.value.length >= 6){
            taskDescriptionArea.dataset.conform = "ok";
            taskDescriptionIconWrong.classList.remove ("form__text--show");
            taskDescriptionIconWrong.classList.add ("form__icon--none");
            taskDescriptionIconCorrect.classList.remove ("form__icon--none");
            taskDescriptionIconCorrect.classList.add ("form__text--show");
        }
        if (taskTitleInput.value.length < 6){
            taskDescriptionArea.dataset.conform = "noOk";
            taskDescriptionIconCorrect.classList.remove ("form__text--show");
            taskDescriptionIconCorrect.classList.add ("form__icon--none");
            taskDescriptionIconWrong.classList.remove ("form__icon--none");
            taskDescriptionIconWrong.classList.add ("form__text--show");
            // const errorMessage = "The title field must have at least 6 characters."
        }
        if (taskTitleInput.dataset.conform == "ok" && taskDateIniInput.dataset.conform == "ok" ) {
            taskDescriptionArea.disabled = false;
        }
    });

    selectType.addEventListener("input", () => {
        if (selectType.value != "") {
            selectType.dataset.conform = "ok";
            taskTypeIconCorrect.classList.add ("form__choose--show");
            taskTypeIconCorrect.classList.remove ("form__icon--none");
            taskTypeIconWrong.classList.add ("form__icon--none");
            taskTypeIconWrong.classList.remove ("form__choose--show");
        }else {
            selectType.dataset.conform = "noOk";
            taskTypeIconWrong.classList.add ("form__icon--none");
            taskTypeIconCorrect.classList.add ("form__icon--none");
            taskTypeIconWrong.classList.remove ("form__choose--show");
            taskTypeIconCorrect.classList.remove ("form__choose--show");
        }
    });
    
    // contorl FORM submit
    taskForm.addEventListener("change", () => {
        if (taskTitleInput.dataset.conform == "ok" && 
            taskDateIniInput.dataset.conform == "ok" && 
            taskDateEndInput.dataset.conform == "ok" && 
            selectReminder.dataset.conform == "ok" && 
            taskDescriptionArea.dataset.conform == "ok" && 
            selectType.dataset.conform == "ok") {
                    btnCreate.disabled = false;
                }else {
                    btnCreate.disabled = true;

        }
    });

    // FORM cleaner
    function formCleaner () {
        taskTitleInput.value = "";
        taskDateIniInput.value = "";
        taskDateEndInput.value = "";
        selectReminder.value = "";
        taskDescriptionArea.value = "";
        selectType.value = "";
    }

}






//Header
const header = document.querySelector("#header") as HTMLElement;
const title = document.createElement("h1");
title.textContent = "Calendar";

// const btnTask=document.createElement("button");
// btnTask.setAttribute("class","btn-task")
// btnTask.textContent="New Task";

// header.appendChild(title);
// header.appendChild(btnTask);

// //Create days of the weeek
// const main=document.querySelector("#main") as HTMLElement;
// // sidebar
// const sidebar=document.createElement("aside");
// sidebar.setAttribute("class","sidebar");
// sidebar.setAttribute("id","sidebar");
// sidebar.textContent="Aqui va el calendario";
// //Week info
// const weekContainer=document.createElement("div");
// weekContainer.setAttribute("class","week-container");
// weekContainer.setAttribute("id","week-container");
// //Hours of the day
// const hoursContainer=document.createElement("div");
// hoursContainer.setAttribute("class","hours-section");
// weekContainer.appendChild(hoursContainer);
// //Days of the week
// let weekDays:string[]=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
// for(let i=0 ;i<weekDays.length;i++){
//     const dayContainer=document.createElement("div");
//     dayContainer.setAttribute("class",`day-section-${i+1}`);
//     dayContainer.textContent=weekDays[i];
//     weekContainer.appendChild(dayContainer);
// }

// main.appendChild(sidebar);
// main.appendChild(weekContainer);

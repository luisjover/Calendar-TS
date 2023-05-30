import { createTask } from "./mainFunctions.js";
import { classModalCleaner, classRemoverIcon, formCleaner, modifyTask } from "./supportFunctions.js";
export function openModalCreateTask() {
    const containerModalTask = document.createElement("div");
    containerModalTask.classList.add("modal", "fade");
    containerModalTask.id = "containerModalTask";
    containerModalTask.setAttribute("tabindex", "-1");
    containerModalTask.setAttribute("aria-labelledby", "exampleModalLabel");
    containerModalTask.setAttribute("aria-hidden", "true");
    const modalDialog = document.createElement("div");
    modalDialog.classList.add("modal-dialog");
    modalDialog.id = "modalDialog";
    const modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");
    modalContent.id = "modalContent";
    containerModalTask.appendChild(modalDialog);
    modalDialog.appendChild(modalContent);
    const modalHeader = document.createElement("div");
    modalHeader.classList.add("modal-header");
    modalHeader.id = "modalHeader";
    const modalTitle = document.createElement("h1");
    modalTitle.classList.add("modal-title");
    modalTitle.id = "modalTitle";
    modalTitle.textContent = "Define event";
    const btnCloseX = document.createElement("button");
    btnCloseX.type = "button";
    btnCloseX.classList.add("btn-close");
    btnCloseX.setAttribute("data-bs-dismiss", "modal");
    btnCloseX.setAttribute("aria-label", "Close");
    modalHeader.appendChild(modalTitle);
    modalHeader.appendChild(btnCloseX);
    modalContent.appendChild(modalHeader);
    document.body.appendChild(containerModalTask);
    const modalBody = document.createElement("div");
    modalBody.classList.add("modal-body");
    modalDialog.id = "modalBody";
    const taskForm = document.createElement("form");
    taskForm.name = "createTaskForm";
    taskForm.id = "taskForm";
    const taskTitleContainer = document.createElement("div");
    taskTitleContainer.classList.add("mb-3", "form__groupe");
    taskTitleContainer.id = "taskTitleContainer";
    const taskTitleInputIconContainer = document.createElement("div");
    taskTitleContainer.classList.add("mb-3", "form__groupe--input");
    const taskTitleInput = document.createElement("input");
    taskTitleInput.type = "text";
    taskTitleInput.classList.add("form-control");
    taskTitleInput.id = "taskTitle";
    taskTitleInput.placeholder = "Insert a task or event title";
    taskTitleInput.required = true;
    taskTitleInput.setAttribute("data-conform", "noOk");
    const taskTitleIconCorrect = document.createElement("img");
    taskTitleIconCorrect.src = "../assets/img/icons8-correct.svg";
    taskTitleIconCorrect.classList.add("form__icon--none");
    const taskTitleIconWrong = document.createElement("img");
    taskTitleIconWrong.src = "../assets/img/icons8-wrong.svg";
    taskTitleIconWrong.classList.add("form__icon--none");
    taskTitleInputIconContainer.appendChild(taskTitleInput);
    taskTitleInputIconContainer.appendChild(taskTitleIconCorrect);
    taskTitleInputIconContainer.appendChild(taskTitleIconWrong);
    taskTitleContainer.appendChild(taskTitleInputIconContainer);
    taskForm.appendChild(taskTitleContainer);
    const taskDateIniContainer = document.createElement("div");
    taskDateIniContainer.classList.add("mb-3", "row", "form__groupe");
    taskDateIniContainer.id = "taskDateIniContainer";
    const taskDateIniInputContainer = document.createElement("div");
    taskDateIniInputContainer.classList.add("col-sm-9", "col-xs-12");
    const taskDateIniInput = document.createElement("input");
    taskDateIniInput.type = "datetime-local";
    let minIni = new Date().toISOString();
    minIni = minIni.slice(0, -8);
    taskDateIniInput.min = minIni;
    taskDateIniInput.setAttribute("step", "360");
    taskDateIniInput.classList.add("form-control");
    taskDateIniInput.id = "taskDateIniInput";
    taskDateIniInput.required = true;
    taskDateIniInput.setAttribute("data-conform", "noOk");
    const taskDateIniLabel = document.createElement("label");
    taskDateIniLabel.classList.add("col-sm-3", "col-form-label");
    taskDateIniLabel.htmlFor = "taskDateIniInput";
    taskDateIniLabel.textContent = "Initial Date";
    const taskDateIniIconCorrect = document.createElement("img");
    taskDateIniIconCorrect.src = "../assets/img/icons8-correct.svg";
    taskDateIniIconCorrect.classList.add("form__icon--none");
    const taskDateIniIconWrong = document.createElement("img");
    taskDateIniIconWrong.src = "../assets/img/icons8-wrong.svg";
    taskDateIniIconWrong.classList.add("form__icon--none");
    taskDateIniInputContainer.appendChild(taskDateIniInput);
    taskDateIniContainer.appendChild(taskDateIniLabel);
    taskDateIniContainer.appendChild(taskDateIniInputContainer);
    taskDateIniInputContainer.appendChild(taskDateIniIconCorrect);
    taskDateIniInputContainer.appendChild(taskDateIniIconWrong);
    taskForm.appendChild(taskDateIniContainer);
    const taskDateEndContainer = document.createElement("div");
    taskDateEndContainer.classList.add("mb-3", "row", "form__groupe");
    taskDateEndContainer.id = "taskDateEndContainer";
    const checkDateEndContainer = document.createElement("div");
    checkDateEndContainer.classList.add("col-form-label", "col-sm-3");
    const checkDateEnd = document.createElement("input");
    checkDateEnd.type = "checkbox";
    checkDateEnd.classList.add("form-check-input");
    checkDateEnd.value = "";
    checkDateEnd.id = "checkDateEnd";
    const checkDateEndLabel = document.createElement("label");
    checkDateEndLabel.classList.add("form-check-label", "ms-1");
    checkDateEndLabel.htmlFor = "checkDateEnd";
    checkDateEndLabel.textContent = "End Date";
    const taskDateEndInputContainer = document.createElement("div");
    taskDateEndInputContainer.classList.add("col-sm-9", "col-xs-12");
    taskDateEndInputContainer.id = "taskDateEndInputContainer";
    const taskDateEndInput = document.createElement("input");
    taskDateEndInput.type = "datetime-local";
    taskDateEndInput.classList.add("form-control");
    taskDateEndInput.min = "";
    taskDateEndInput.max = "";
    taskDateEndInput.disabled = true;
    taskDateEndInput.id = "taskDateEndInput";
    taskDateEndInput.setAttribute("data-conform", "ok");
    const taskDateEndIconCorrect = document.createElement("img");
    taskDateEndIconCorrect.src = "../assets/img/icons8-correct.svg";
    taskDateEndIconCorrect.classList.add("form__icon--none");
    const taskDateEndIconWrong = document.createElement("img");
    taskDateEndIconWrong.src = "../assets/img/icons8-wrong.svg";
    taskDateEndIconWrong.classList.add("form__icon--none");
    checkDateEndContainer.appendChild(checkDateEnd);
    checkDateEndContainer.appendChild(checkDateEndLabel);
    taskDateEndInputContainer.appendChild(taskDateEndInput);
    taskDateEndContainer.appendChild(checkDateEndContainer);
    taskDateEndContainer.appendChild(taskDateEndInputContainer);
    taskDateEndInputContainer.appendChild(taskDateEndIconCorrect);
    taskDateEndInputContainer.appendChild(taskDateEndIconWrong);
    taskForm.appendChild(taskDateEndContainer);
    const reminderContainer = document.createElement("div");
    reminderContainer.classList.add("mb-3", "row", "form__groupe");
    const checkReminderContainer = document.createElement("div");
    checkReminderContainer.classList.add("col-form-label", "col-sm-3");
    const checkReminder = document.createElement("input");
    checkReminder.type = "checkbox";
    checkReminder.classList.add("form-check-input");
    checkReminder.value = "";
    checkReminder.id = "checkReminder";
    const checkReminderLabel = document.createElement("label");
    checkReminderLabel.classList.add("form-check-label", "ms-1");
    checkReminderLabel.htmlFor = "reminderCheck";
    checkReminderLabel.textContent = "Reminder";
    const selectReminderContainer = document.createElement("div");
    selectReminderContainer.classList.add("col-sm-9", "col-xs-12");
    selectReminderContainer.id = "selectReminderContainer";
    const selectReminder = document.createElement("select");
    selectReminder.classList.add("form-select");
    selectReminder.setAttribute("aria-label", "Default select example");
    selectReminder.id = "reminderSelect";
    selectReminder.disabled = true;
    selectReminder.setAttribute("data-conform", "ok");
    let selectReminderOptions = [
        { value: "0", text: "Open this select menu" },
        { value: "5", text: "5 min before" },
        { value: "10", text: "10 min before" },
        { value: "15", text: "15 min before" },
        { value: "30", text: "30 min before" },
        { value: "60", text: "1h before" },
    ];
    selectReminderOptions.forEach(option => {
        const selectOption = document.createElement("option");
        selectOption.value = option.value;
        selectOption.textContent = option.text;
        selectReminder.appendChild(selectOption);
    });
    const selectReminderIconCorrect = document.createElement("img");
    selectReminderIconCorrect.src = "../assets/img/icons8-correct.svg";
    selectReminderIconCorrect.classList.add("form__icon--none");
    const selectReminderIconWrong = document.createElement("img");
    selectReminderIconWrong.src = "../assets/img/icons8-wrong.svg";
    selectReminderIconWrong.classList.add("form__icon--none");
    checkReminderContainer.appendChild(checkReminder);
    checkReminderContainer.appendChild(checkReminderLabel);
    selectReminderContainer.appendChild(selectReminder);
    reminderContainer.appendChild(checkReminderContainer);
    reminderContainer.appendChild(selectReminderContainer);
    selectReminderContainer.appendChild(selectReminderIconCorrect);
    selectReminderContainer.appendChild(selectReminderIconWrong);
    taskForm.appendChild(reminderContainer);
    const taskDescriptionContainer = document.createElement("div");
    taskDescriptionContainer.classList.add("mb-3", "form__groupe");
    taskDescriptionContainer.id = "taskDescriptionContainer";
    const taskDescriptionArea = document.createElement("textarea");
    taskDescriptionArea.classList.add("form-control");
    taskDescriptionArea.id = "taskDescriptionArea";
    taskDescriptionArea.rows = 4;
    taskDescriptionArea.placeholder = "Type a brief description of the event or task...";
    taskDescriptionArea.disabled = true;
    taskDescriptionArea.setAttribute("data-conform", "ok");
    const taskDescriptionAreaIconCorrect = document.createElement("img");
    taskDescriptionAreaIconCorrect.src = "../assets/img/icons8-correct.svg";
    taskDescriptionAreaIconCorrect.classList.add("form__icon--none");
    const taskDescriptionAreaIconWrong = document.createElement("img");
    taskDescriptionAreaIconWrong.src = "../assets/img/icons8-wrong.svg";
    taskDescriptionAreaIconWrong.classList.add("form__icon--none");
    taskDescriptionContainer.appendChild(taskDescriptionArea);
    taskDescriptionContainer.appendChild(taskDescriptionAreaIconCorrect);
    taskDescriptionContainer.appendChild(taskDescriptionAreaIconWrong);
    taskForm.appendChild(taskDescriptionContainer);
    const selectTypeContainer = document.createElement("div");
    selectTypeContainer.classList.add("mb-3", "form__groupe");
    selectTypeContainer.id = "selectTypeContainer";
    const selectType = document.createElement("select");
    selectType.classList.add("form-select");
    selectType.setAttribute("aria-label", "Default select example");
    selectType.id = "taskTypeSelect";
    selectType.required = true;
    selectType.disabled = true;
    selectType.setAttribute("data-conform", "noOk");
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
        selectType.appendChild(selectOption);
    });
    const selectTypeIconCorrect = document.createElement("img");
    selectTypeIconCorrect.src = "../assets/img/icons8-correct.svg";
    selectTypeIconCorrect.classList.add("form__icon--none");
    const selectTypeIconWrong = document.createElement("img");
    selectTypeIconWrong.src = "../assets/img/icons8-wrong.svg";
    selectTypeIconWrong.classList.add("form__icon--none");
    selectTypeContainer.appendChild(selectType);
    selectTypeContainer.appendChild(selectTypeIconCorrect);
    selectTypeContainer.appendChild(selectTypeIconWrong);
    taskForm.appendChild(selectTypeContainer);
    modalBody.appendChild(taskForm);
    modalContent.appendChild(modalBody);
    const modalFooter = document.createElement("div");
    modalFooter.classList.add("modal-footer");
    const btnSave = document.createElement("button");
    const btnClose = document.createElement("button");
    btnSave.type = "button";
    btnSave.id = "form-save-btn";
    btnSave.classList.add("btn", "btn-success");
    btnSave.setAttribute("form", "createTaskForm");
    btnSave.textContent = "Save Changes";
    btnSave.addEventListener("click", modifyTask);
    btnSave.style.display = "none";
    btnClose.type = "button";
    btnClose.classList.add("btn", "btn-secondary");
    btnClose.setAttribute("data-bs-dismiss", "modal");
    btnClose.textContent = "Close";
    const btnCreate = document.createElement("button");
    btnCreate.type = "button";
    btnCreate.id = "form-create-btn";
    btnCreate.classList.add("btn", "btn-primary");
    btnCreate.setAttribute("form", "createTaskForm");
    btnCreate.textContent = "Create";
    btnCreate.addEventListener("click", createTask);
    btnCreate.disabled = true;
    modalFooter.appendChild(btnSave);
    modalFooter.appendChild(btnClose);
    modalFooter.appendChild(btnCreate);
    modalContent.appendChild(modalFooter);
    checkDateEnd.addEventListener("click", e => {
        if (taskDateIniInput.dataset.conform != "ok" || taskTitleInput.dataset.conform != "ok") {
            checkDateEnd.checked = false;
            return;
        }
        if (checkDateEnd.checked == true) {
            taskDateEndInput.disabled = false;
        }
        else {
            taskDateEndInput.disabled = true;
            taskDateEndInput.dataset.conform = "ok";
            taskDateEndInput.value = "";
            classRemoverIcon(taskDateEndIconCorrect, taskDateEndIconWrong);
            taskDateEndIconWrong.classList.add("form__icon--none");
            taskDateEndIconCorrect.classList.add("form__icon--none");
        }
    });
    checkReminder.addEventListener("click", () => {
        if (taskDateIniInput.dataset.conform != "ok" || taskTitleInput.dataset.conform != "ok") {
            checkReminder.checked = false;
            return;
        }
        if (checkReminder.checked == true) {
            selectReminder.disabled = false;
        }
        else {
            selectReminder.disabled = true;
            selectReminder.value = "";
            classRemoverIcon(selectReminderIconCorrect, selectReminderIconWrong);
            selectReminderIconCorrect.classList.add("form__icon--none");
            selectReminderIconWrong.classList.add("form__icon--none");
        }
    });
    taskTitleInput.addEventListener("input", () => {
        if (taskTitleInput.value.length >= 6) {
            taskTitleInput.dataset.conform = "ok";
            classRemoverIcon(taskTitleIconCorrect, taskTitleIconWrong);
            taskTitleIconCorrect.classList.add("form__text--show");
            taskTitleIconWrong.classList.add("form__icon--none");
        }
        if (taskTitleInput.value.length < 6) {
            taskTitleInput.dataset.conform = "noOk";
            classRemoverIcon(taskTitleIconCorrect, taskTitleIconWrong);
            taskTitleIconWrong.classList.add("form__text--show");
            taskTitleIconCorrect.classList.add("form__icon--none");
        }
        if (taskTitleInput.dataset.conform == "ok" && taskDateIniInput.dataset.conform == "ok") {
            taskDescriptionArea.disabled = false;
            selectType.disabled = false;
        }
    });
    taskDateIniInput.addEventListener("focusout", () => {
        let controlDelay = new Date(taskDateIniInput.value).getTime() - new Date().getTime();
        if (taskDateIniInput.dataset.conform == "ok") {
            taskDateEndInput.min = taskDateIniInput.value;
            taskDateEndInput.max = `${taskDateEndInput.min.slice(0, -5)}23:59`;
            selectReminder.innerHTML = "";
            selectReminderOptions = [
                { value: "0", text: "Open this select menu" },
                { value: "5", text: "5 min before" },
                { value: "10", text: "10 min before" },
                { value: "15", text: "15 min before" },
                { value: "30", text: "30 min before" },
                { value: "60", text: "1h before" },
            ];
            selectReminderOptions.forEach(option => {
                const selectOption = document.createElement("option");
                selectOption.value = option.value;
                selectOption.textContent = option.text;
                selectReminder.appendChild(selectOption);
            });
        }
        if (controlDelay <= 60 * 60000 && taskDateIniInput.dataset.conform == "ok") {
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
        if (taskDateEndInput.value != "" && taskDateIniInput.value >= taskDateEndInput.value) {
            taskDateEndInput.dataset.conform = "noOk";
            classRemoverIcon(taskDateEndIconCorrect, taskDateEndIconWrong);
            taskDateEndIconWrong.classList.add("form__choose--show");
            taskDateEndIconCorrect.classList.add("form__icon--none");
        }
    });
    taskDateIniInput.addEventListener("input", () => {
        if (new Date(taskDateIniInput.value) < new Date()) {
            taskDateIniInput.dataset.conform = "noOk";
            classRemoverIcon(taskDateIniIconCorrect, taskDateIniIconWrong);
            taskDateIniIconWrong.classList.add("form__choose--show");
            taskDateIniIconCorrect.classList.add("form__icon--none");
        }
        else {
            taskDateIniInput.dataset.conform = "ok";
            classRemoverIcon(taskDateIniIconCorrect, taskDateIniIconWrong);
            taskDateIniIconCorrect.classList.add("form__choose--show");
            taskDateIniIconWrong.classList.add("form__icon--none");
        }
        if (taskTitleInput.dataset.conform == "ok" && taskDateIniInput.dataset.conform == "ok") {
            taskDescriptionArea.disabled = false;
            selectType.disabled = false;
        }
        else {
            taskDescriptionArea.disabled = true;
            selectType.disabled = true;
        }
    });
    taskDateEndInput.addEventListener("input", () => {
        if (new Date(taskDateEndInput.value) < new Date(taskDateIniInput.value)) {
            taskDateEndInput.dataset.conform = "noOk";
            classRemoverIcon(taskDateEndIconCorrect, taskDateEndIconWrong);
            taskDateEndIconWrong.classList.add("form__choose--show");
            taskDateEndIconCorrect.classList.add("form__icon--none");
        }
        else {
            taskDateEndInput.dataset.conform = "ok";
            classRemoverIcon(taskDateEndIconCorrect, taskDateEndIconWrong);
            taskDateEndIconCorrect.classList.add("form__choose--show");
            taskDateEndIconWrong.classList.add("form__icon--none");
        }
    });
    selectReminder.addEventListener("input", () => {
        if (checkReminder.checked == true && selectReminder.value != "") {
            selectReminder.dataset.conform = "ok";
            classRemoverIcon(selectReminderIconCorrect, selectReminderIconWrong);
            selectReminderIconCorrect.classList.add("form__choose--show");
            selectReminderIconWrong.classList.add("form__icon--none");
        }
        else {
            selectReminder.dataset.conform = "ok";
            classRemoverIcon(selectReminderIconCorrect, selectReminderIconWrong);
            selectReminderIconCorrect.classList.add("form__icon--none");
            selectReminderIconWrong.classList.add("form__icon--none");
        }
    });
    taskDescriptionArea.addEventListener("input", () => {
        if (taskDescriptionArea.value.length >= 6) {
            taskDescriptionArea.dataset.conform = "ok";
            classRemoverIcon(taskDescriptionAreaIconCorrect, taskDescriptionAreaIconWrong);
            taskDescriptionAreaIconCorrect.classList.add("form__text--show");
            taskDescriptionAreaIconWrong.classList.add("form__icon--none");
        }
        if (taskTitleInput.value.length < 6) {
            taskDescriptionArea.dataset.conform = "noOk";
            classRemoverIcon(taskDescriptionAreaIconCorrect, taskDescriptionAreaIconWrong);
            taskDescriptionAreaIconCorrect.classList.add("form__icon--none");
            taskDescriptionAreaIconWrong.classList.add("form__text--show");
        }
        if (taskTitleInput.dataset.conform == "ok" && taskDateIniInput.dataset.conform == "ok") {
            taskDescriptionArea.disabled = false;
        }
    });
    selectType.addEventListener("input", () => {
        if (selectType.value != "") {
            selectType.dataset.conform = "ok";
            classRemoverIcon(selectTypeIconCorrect, selectTypeIconWrong);
            selectTypeIconCorrect.classList.add("form__choose--show");
            selectTypeIconWrong.classList.add("form__icon--none");
        }
        else {
            selectType.dataset.conform = "noOk";
            classRemoverIcon(selectTypeIconCorrect, selectTypeIconWrong);
            selectTypeIconWrong.classList.add("form__icon--none");
            selectTypeIconCorrect.classList.add("form__icon--none");
        }
    });
    const arrayModalComponents = [taskTitleInput, taskDateIniInput, taskDateEndInput, selectReminder, taskDescriptionArea, selectType];
    const arrayModalIcons = [taskTitleIconCorrect, taskTitleIconWrong, taskDateIniIconCorrect, taskDateIniIconWrong, taskDateEndIconCorrect, taskDateEndIconWrong, selectReminderIconCorrect, selectReminderIconWrong, taskDescriptionAreaIconCorrect, taskDescriptionAreaIconWrong, selectTypeIconCorrect, selectTypeIconWrong];
    btnCloseX.addEventListener("click", () => {
        classModalCleaner(arrayModalIcons);
        formCleaner(arrayModalComponents);
    });
    btnClose.addEventListener("click", () => {
        classModalCleaner(arrayModalIcons);
        formCleaner(arrayModalComponents);
    });
    taskForm.addEventListener("change", () => {
        if (taskTitleInput.dataset.conform == "ok" &&
            taskDateIniInput.dataset.conform == "ok" &&
            taskDateEndInput.dataset.conform == "ok" &&
            selectReminder.dataset.conform == "ok" &&
            taskDescriptionArea.dataset.conform == "ok" &&
            selectType.dataset.conform == "ok") {
            btnCreate.disabled = false;
        }
        else {
            btnCreate.disabled = true;
        }
    });
}
const header = document.querySelector("#header");
const title = document.createElement("h1");
title.textContent = "Calendar";
//# sourceMappingURL=DOMmanagement.js.map
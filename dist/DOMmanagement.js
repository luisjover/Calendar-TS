import { createTask, setWeekCalendar } from "./mainFunctions.js";
import { classModalCleaner, classRemoverIcon, formCleaner, modifyTask, calculDate, initialStateInputsToCreate, resetModalButtons, searchProxTasks, deleteTask, checkTimeAlert } from "./supportFunctions.js";
export function openModalCreateTask() {
    const containerModalTask = document.createElement("div");
    const modalDialog = document.createElement("div");
    const modalContent = document.createElement("div");
    const modalHeader = document.createElement("div");
    const modalTitle = document.createElement("h1");
    const btnCloseX = document.createElement("button");
    const modalBody = document.createElement("div");
    const taskForm = document.createElement("form");
    const taskTitleContainer = document.createElement("div");
    const taskTitleInputIconContainer = document.createElement("div");
    const taskTitleInput = document.createElement("input");
    const taskTitleIconCorrect = document.createElement("img");
    const taskTitleIconWrong = document.createElement("img");
    const taskDateIniContainer = document.createElement("div");
    const taskDateIniInputContainer = document.createElement("div");
    const taskDateIniInput = document.createElement("input");
    const taskDateIniLabel = document.createElement("label");
    const taskDateIniIconCorrect = document.createElement("img");
    const taskDateIniIconWrong = document.createElement("img");
    const taskDateEndContainer = document.createElement("div");
    const checkDateEndContainer = document.createElement("div");
    const checkDateEnd = document.createElement("input");
    const checkDateEndLabel = document.createElement("label");
    const taskDateEndInputContainer = document.createElement("div");
    const taskDateEndInput = document.createElement("input");
    const taskDateEndIconCorrect = document.createElement("img");
    const taskDateEndIconWrong = document.createElement("img");
    const reminderContainer = document.createElement("div");
    const checkReminderContainer = document.createElement("div");
    const checkReminder = document.createElement("input");
    const checkReminderLabel = document.createElement("label");
    const selectReminderContainer = document.createElement("div");
    const selectReminder = document.createElement("select");
    const selectReminderIconCorrect = document.createElement("img");
    const selectReminderIconWrong = document.createElement("img");
    const taskDescriptionContainer = document.createElement("div");
    const taskDescriptionArea = document.createElement("textarea");
    const taskDescriptionAreaIconCorrect = document.createElement("img");
    const taskDescriptionAreaIconWrong = document.createElement("img");
    const selectTypeContainer = document.createElement("div");
    const selectType = document.createElement("select");
    const selectTypeIconCorrect = document.createElement("img");
    const selectTypeIconWrong = document.createElement("img");
    const modalFooter = document.createElement("div");
    const btnClose = document.createElement("button");
    const btnDelete = document.createElement("button");
    const btnSave = document.createElement("button");
    const btnCreate = document.createElement("button");
    containerModalTask.classList.add("modal", "fade");
    containerModalTask.id = "containerModalTask";
    containerModalTask.setAttribute("tabindex", "-1");
    containerModalTask.setAttribute("aria-labelledby", "exampleModalLabel");
    containerModalTask.setAttribute("aria-hidden", "true");
    modalDialog.classList.add("modal-dialog");
    modalDialog.id = "modalDialog";
    modalContent.classList.add("modal-content");
    modalContent.id = "modalContent";
    modalHeader.classList.add("modal-header");
    modalHeader.id = "modalHeader";
    modalTitle.classList.add("modal-title");
    modalTitle.id = "modalTitle";
    modalTitle.textContent = "Define event";
    btnCloseX.type = "button";
    btnCloseX.classList.add("btn-close");
    btnCloseX.setAttribute("data-bs-dismiss", "modal");
    btnCloseX.setAttribute("aria-label", "Close");
    modalBody.classList.add("modal-body");
    modalDialog.id = "modalBody";
    taskForm.name = "createTaskForm";
    taskForm.id = "taskForm";
    taskTitleContainer.classList.add("mb-3", "form__groupe");
    taskTitleContainer.id = "taskTitleContainer";
    taskTitleContainer.classList.add("mb-3", "form__groupe--input");
    taskTitleInput.type = "text";
    taskTitleInput.classList.add("form-control");
    taskTitleInput.id = "taskTitle";
    taskTitleInput.placeholder = "Insert a task or event title";
    taskTitleInput.required = true;
    taskTitleInput.setAttribute("data-conform", "noOk");
    taskTitleInput.setAttribute("data-must", "yes");
    taskTitleIconCorrect.id = "taskTitleIconCorrect";
    taskTitleIconCorrect.src = "../assets/img/icons8-correct.svg";
    taskTitleIconCorrect.classList.add("form__icon--none");
    taskTitleIconWrong.id = "taskTitleIconWrong";
    taskTitleIconWrong.src = "../assets/img/icons8-wrong.svg";
    taskTitleIconWrong.classList.add("form__icon--none");
    taskDateIniContainer.classList.add("mb-3", "row", "form__groupe");
    taskDateIniContainer.id = "taskDateIniContainer";
    taskDateIniInputContainer.classList.add("col-sm-9", "col-xs-12");
    taskDateIniInput.type = "datetime-local";
    let minIni = new Date();
    let minIso = calculDate(minIni);
    taskDateIniInput.min = minIso.slice(0, -8);
    taskDateIniInput.setAttribute("step", "360");
    taskDateIniInput.classList.add("form-control");
    taskDateIniInput.id = "taskDateIniInput";
    taskDateIniInput.required = true;
    taskDateIniInput.setAttribute("data-conform", "noOk");
    taskDateIniInput.setAttribute("data-must", "yes");
    taskDateIniLabel.classList.add("col-sm-3", "col-form-label");
    taskDateIniLabel.htmlFor = "taskDateIniInput";
    taskDateIniLabel.textContent = "Initial Date";
    taskDateIniIconCorrect.id = "taskDateIniIconCorrect";
    taskDateIniIconCorrect.src = "../assets/img/icons8-correct.svg";
    taskDateIniIconCorrect.classList.add("form__icon--none");
    taskDateIniIconWrong.id = "taskDateIniIconWrong";
    taskDateIniIconWrong.src = "../assets/img/icons8-wrong.svg";
    taskDateIniIconWrong.classList.add("form__icon--none");
    taskDateEndContainer.classList.add("mb-3", "row", "form__groupe");
    taskDateEndContainer.id = "taskDateEndContainer";
    checkDateEndContainer.classList.add("col-form-label", "col-sm-3");
    checkDateEnd.type = "checkbox";
    checkDateEnd.classList.add("form-check-input");
    checkDateEnd.value = "";
    checkDateEnd.id = "checkDateEnd";
    checkDateEndLabel.classList.add("form-check-label", "ms-1");
    checkDateEndLabel.htmlFor = "checkDateEnd";
    checkDateEndLabel.textContent = "End Date";
    taskDateEndInputContainer.classList.add("col-sm-9", "col-xs-12");
    taskDateEndInputContainer.id = "taskDateEndInputContainer";
    taskDateEndInput.type = "datetime-local";
    taskDateEndInput.classList.add("form-control");
    taskDateEndInput.min = "";
    taskDateEndInput.max = "";
    taskDateEndInput.id = "taskDateEndInput";
    taskDateEndInput.setAttribute("data-conform", "ok");
    taskDateEndInput.setAttribute("data-must", "no");
    taskDateEndIconCorrect.id = "taskDateEndIconCorrect";
    taskDateEndIconCorrect.src = "../assets/img/icons8-correct.svg";
    taskDateEndIconCorrect.classList.add("form__icon--none");
    taskDateEndIconWrong.id = "taskDateEndIconWrong";
    taskDateEndIconWrong.src = "../assets/img/icons8-wrong.svg";
    taskDateEndIconWrong.classList.add("form__icon--none");
    reminderContainer.classList.add("mb-3", "row", "form__groupe");
    checkReminderContainer.classList.add("col-form-label", "col-sm-3");
    checkReminder.type = "checkbox";
    checkReminder.classList.add("form-check-input");
    checkReminder.value = "";
    checkReminder.id = "checkReminder";
    checkReminderLabel.classList.add("form-check-label", "ms-1");
    checkReminderLabel.htmlFor = "reminderCheck";
    checkReminderLabel.textContent = "Reminder";
    selectReminderContainer.classList.add("col-sm-9", "col-xs-12");
    selectReminderContainer.id = "selectReminderContainer";
    selectReminder.classList.add("form-select");
    selectReminder.setAttribute("aria-label", "Default select example");
    selectReminder.id = "reminderSelect";
    selectReminder.setAttribute("data-conform", "ok");
    selectReminder.setAttribute("data-must", "no");
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
    selectReminderIconCorrect.id = "selectReminderIconCorrect";
    selectReminderIconCorrect.src = "../assets/img/icons8-correct.svg";
    selectReminderIconCorrect.classList.add("form__icon--none");
    selectReminderIconWrong.id = "selectReminderIconWrong";
    selectReminderIconWrong.src = "../assets/img/icons8-wrong.svg";
    selectReminderIconWrong.classList.add("form__icon--none");
    taskDescriptionContainer.classList.add("mb-3", "form__groupe");
    taskDescriptionContainer.id = "taskDescriptionContainer";
    taskDescriptionArea.classList.add("form-control");
    taskDescriptionArea.id = "taskDescriptionArea";
    taskDescriptionArea.rows = 4;
    taskDescriptionArea.placeholder = "Type a brief description of the event or task...";
    taskDescriptionArea.setAttribute("data-conform", "ok");
    taskDescriptionArea.setAttribute("data-must", "no");
    taskDescriptionAreaIconCorrect.id = "taskDescriptionAreaIconCorrect";
    taskDescriptionAreaIconCorrect.src = "../assets/img/icons8-correct.svg";
    taskDescriptionAreaIconCorrect.classList.add("form__icon--none");
    taskDescriptionAreaIconWrong.id = "taskDescriptionAreaIconWrong";
    taskDescriptionAreaIconWrong.src = "../assets/img/icons8-wrong.svg";
    taskDescriptionAreaIconWrong.classList.add("form__icon--none");
    selectTypeContainer.classList.add("mb-3", "form__groupe");
    selectTypeContainer.id = "selectTypeContainer";
    selectType.classList.add("form-select");
    selectType.setAttribute("aria-label", "Default select example");
    selectType.id = "taskTypeSelect";
    selectType.required = true;
    selectType.setAttribute("data-conform", "noOk");
    selectType.setAttribute("data-must", "yes");
    const selectTypeOptions = [
        { value: "0", text: "Open this select menu" },
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
    selectTypeIconCorrect.id = "selectTypeIconCorrect";
    selectTypeIconCorrect.src = "../assets/img/icons8-correct.svg";
    selectTypeIconCorrect.classList.add("form__icon--none");
    selectTypeIconWrong.id = "selectTypeIconWrong";
    selectTypeIconWrong.src = "../assets/img/icons8-wrong.svg";
    selectTypeIconWrong.classList.add("form__icon--none");
    modalFooter.classList.add("modal-footer");
    btnSave.type = "button";
    btnSave.id = "form-save-btn";
    btnSave.classList.add("btn", "btn-success");
    btnSave.setAttribute("form", "createTaskForm");
    btnSave.textContent = "Save Changes";
    btnSave.addEventListener("click", modifyTask);
    btnSave.style.display = "none";
    btnSave.setAttribute("data-bs-dismiss", "modal");
    btnDelete.type = "button";
    btnDelete.id = "form-delete-btn";
    btnDelete.classList.add("btn", "btn-danger");
    btnDelete.setAttribute("data-bs-dismiss", "modal");
    btnDelete.style.display = "none";
    btnDelete.textContent = "Delete";
    btnClose.type = "button";
    btnClose.classList.add("btn", "btn-secondary");
    btnClose.setAttribute("data-bs-dismiss", "modal");
    btnClose.textContent = "Close";
    btnCreate.type = "button";
    btnCreate.id = "form-create-btn";
    btnCreate.classList.add("btn", "btn-primary");
    btnCreate.setAttribute("form", "createTaskForm");
    btnCreate.textContent = "Create";
    btnCreate.disabled = true;
    containerModalTask.appendChild(modalDialog);
    modalDialog.appendChild(modalContent);
    modalHeader.appendChild(modalTitle);
    modalHeader.appendChild(btnCloseX);
    modalContent.appendChild(modalHeader);
    document.body.appendChild(containerModalTask);
    taskTitleInputIconContainer.appendChild(taskTitleInput);
    taskTitleInputIconContainer.appendChild(taskTitleIconCorrect);
    taskTitleInputIconContainer.appendChild(taskTitleIconWrong);
    taskTitleContainer.appendChild(taskTitleInputIconContainer);
    taskForm.appendChild(taskTitleContainer);
    taskDateIniInputContainer.appendChild(taskDateIniInput);
    taskDateIniContainer.appendChild(taskDateIniLabel);
    taskDateIniContainer.appendChild(taskDateIniInputContainer);
    taskDateIniInputContainer.appendChild(taskDateIniIconCorrect);
    taskDateIniInputContainer.appendChild(taskDateIniIconWrong);
    taskForm.appendChild(taskDateIniContainer);
    checkDateEndContainer.appendChild(checkDateEnd);
    checkDateEndContainer.appendChild(checkDateEndLabel);
    taskDateEndInputContainer.appendChild(taskDateEndInput);
    taskDateEndContainer.appendChild(checkDateEndContainer);
    taskDateEndContainer.appendChild(taskDateEndInputContainer);
    taskDateEndInputContainer.appendChild(taskDateEndIconCorrect);
    taskDateEndInputContainer.appendChild(taskDateEndIconWrong);
    taskForm.appendChild(taskDateEndContainer);
    checkReminderContainer.appendChild(checkReminder);
    checkReminderContainer.appendChild(checkReminderLabel);
    selectReminderContainer.appendChild(selectReminder);
    reminderContainer.appendChild(checkReminderContainer);
    reminderContainer.appendChild(selectReminderContainer);
    selectReminderContainer.appendChild(selectReminderIconCorrect);
    selectReminderContainer.appendChild(selectReminderIconWrong);
    taskForm.appendChild(reminderContainer);
    taskDescriptionContainer.appendChild(taskDescriptionArea);
    taskDescriptionContainer.appendChild(taskDescriptionAreaIconCorrect);
    taskDescriptionContainer.appendChild(taskDescriptionAreaIconWrong);
    taskForm.appendChild(taskDescriptionContainer);
    selectTypeContainer.appendChild(selectType);
    selectTypeContainer.appendChild(selectTypeIconCorrect);
    selectTypeContainer.appendChild(selectTypeIconWrong);
    taskForm.appendChild(selectTypeContainer);
    modalBody.appendChild(taskForm);
    modalContent.appendChild(modalBody);
    modalFooter.appendChild(btnClose);
    modalFooter.appendChild(btnDelete);
    modalFooter.appendChild(btnSave);
    modalFooter.appendChild(btnCreate);
    modalContent.appendChild(modalFooter);
    initialStateInputsToCreate();
    checkDateEnd.addEventListener("click", e => {
        if (taskDateIniInput.dataset.conform != "ok" || taskTitleInput.dataset.conform != "ok") {
            checkDateEnd.checked = false;
            return;
        }
        if (checkDateEnd.checked == true) {
            let minIni = new Date(taskDateIniInput.value);
            let minIso = calculDate(minIni);
            taskDateEndInput.min = minIso.slice(0, -8);
            taskDateEndInput.disabled = false;
        }
        else {
            taskDateEndInput.disabled = true;
            taskDateEndInput.dataset.conform = "ok";
            taskDateEndInput.value = "";
            taskDateEndInput.min = "";
            taskDateEndInput.max = "";
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
            selectReminder.value = "0";
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
    taskTitleInput.addEventListener("focusout", () => {
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
            let minIni = new Date(taskDateIniInput.value);
            let minIso = calculDate(minIni);
            taskDateEndInput.min = minIso.slice(0, -8);
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
                { value: "0", text: "Selection not available" },
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
    btnCloseX.addEventListener("click", () => {
        classModalCleaner();
        formCleaner();
        initialStateInputsToCreate();
        resetModalButtons();
    });
    btnClose.addEventListener("click", () => {
        classModalCleaner();
        formCleaner();
        initialStateInputsToCreate();
        resetModalButtons();
    });
    btnCreate.addEventListener("click", () => {
        createTask();
        formCleaner();
        classModalCleaner();
        initialStateInputsToCreate();
        searchProxTasks();
        btnCreate.disabled = true;
    });
    btnDelete.addEventListener("click", deleteTask);
    btnDelete.addEventListener("click", () => {
        formCleaner();
        classModalCleaner();
        initialStateInputsToCreate();
        checkTimeAlert();
        setWeekCalendar();
        resetModalButtons();
        searchProxTasks();
    });
    taskForm.addEventListener("input", () => {
        if (taskTitleInput.dataset.conform == "ok" &&
            taskDateIniInput.dataset.conform == "ok" &&
            taskDateEndInput.dataset.conform == "ok" &&
            selectReminder.dataset.conform == "ok" &&
            taskDescriptionArea.dataset.conform == "ok" &&
            selectType.dataset.conform == "ok") {
            btnCreate.disabled = false;
            btnSave.disabled = false;
        }
        else {
            btnCreate.disabled = true;
            btnSave.disabled = true;
        }
    });
    taskForm.addEventListener("focusout", () => {
        if (taskTitleInput.dataset.conform == "ok" &&
            taskDateIniInput.dataset.conform == "ok" &&
            taskDateEndInput.dataset.conform == "ok" &&
            selectReminder.dataset.conform == "ok" &&
            taskDescriptionArea.dataset.conform == "ok" &&
            selectType.dataset.conform == "ok") {
            btnCreate.disabled = false;
            btnSave.disabled = false;
        }
        else {
            btnCreate.disabled = true;
            btnSave.disabled = true;
        }
    });
}
const header = document.querySelector("#header");
const title = document.createElement("h1");
title.textContent = "Calendar";
//# sourceMappingURL=DOMmanagement.js.map
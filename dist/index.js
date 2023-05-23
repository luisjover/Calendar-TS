"use strict";
openModalCreateTask();
function openModalCreateTask() {
    console.log("inicio de función correcto");
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
    taskTitleContainer.classList.add("mb-3");
    taskTitleContainer.id = "taskTitleContainer";
    const taskTitleInput = document.createElement("input");
    taskTitleInput.type = "text";
    taskTitleInput.classList.add("form-control");
    taskTitleInput.id = "taskTitle";
    taskTitleInput.placeholder = "Insert a task or event title";
    taskTitleInput.required = true;
    taskTitleContainer.appendChild(taskTitleInput);
    taskForm.appendChild(taskTitleContainer);
    const taskDateIniContainer = document.createElement("div");
    taskDateIniContainer.classList.add("mb-3", "row");
    taskDateIniContainer.id = "taskDateIniContainer";
    const taskDateIniInputContainer = document.createElement("div");
    taskDateIniInputContainer.classList.add("col-sm-9", "col-xs-12");
    const taskDateIniInput = document.createElement("input");
    taskDateIniInput.type = "datetime-local";
    taskDateIniInput.classList.add("form-control");
    taskDateIniInput.id = "taskDateIniInput";
    taskDateIniInput.required = true;
    const taskDateIniLabel = document.createElement("label");
    taskDateIniLabel.classList.add("col-sm-3", "col-form-label");
    taskDateIniLabel.htmlFor = "taskDateIniInput";
    taskDateIniLabel.textContent = "Initial Date";
    taskDateIniInputContainer.appendChild(taskDateIniInput);
    taskDateIniContainer.appendChild(taskDateIniLabel);
    taskDateIniContainer.appendChild(taskDateIniInputContainer);
    taskForm.appendChild(taskDateIniContainer);
    const taskDateEndContainer = document.createElement("div");
    taskDateEndContainer.classList.add("ms-1", "mb-3", "row");
    taskDateEndContainer.id = "taskDateEndContainer";
    const checkDateEndContainer = document.createElement("div");
    checkDateEndContainer.classList.add("form-check", "col-form-label", "col-sm-3");
    const checkDateEnd = document.createElement("input");
    checkDateEnd.type = "checkbox";
    checkDateEnd.classList.add("form-check-input");
    checkDateEnd.value = "";
    checkDateEnd.id = "checkDateEnd";
    const checkDateEndLabel = document.createElement("label");
    checkDateEndLabel.classList.add("form-check-label");
    checkDateEndLabel.htmlFor = "checkDateEnd";
    checkDateEndLabel.textContent = "End Date";
    const taskDateEndInputContainer = document.createElement("div");
    taskDateEndInputContainer.classList.add("mb-3", "col-sm-9", "col-xs-12");
    taskDateEndInputContainer.id = "taskDateEndInputContainer";
    const taskDateEndInput = document.createElement("input");
    taskDateEndInput.type = "datetime-local";
    taskDateEndInput.classList.add("form-control");
    taskDateEndInput.id = "taskDateEndInput";
    checkDateEndContainer.appendChild(checkDateEnd);
    checkDateEndContainer.appendChild(checkDateEndLabel);
    taskDateEndInputContainer.appendChild(taskDateEndInput);
    taskDateEndContainer.appendChild(checkDateEndContainer);
    taskDateEndContainer.appendChild(taskDateEndInputContainer);
    taskForm.appendChild(taskDateEndContainer);
    const reminderContainer = document.createElement("div");
    reminderContainer.classList.add("ms-1", "mb-3", "row");
    const checkReminderContainer = document.createElement("div");
    checkReminderContainer.classList.add("form-check", "col-form-label", "col-sm-3");
    const checkReminder = document.createElement("input");
    checkReminder.type = "checkbox";
    checkReminder.classList.add("form-check-input");
    checkReminder.value = "";
    checkReminder.id = "checkReminder";
    const checkReminderLabel = document.createElement("label");
    checkReminderLabel.classList.add("form-check-label");
    checkReminderLabel.htmlFor = "checkReminder";
    checkReminderLabel.textContent = "Reminder";
    const selectReminderContainer = document.createElement("div");
    selectReminderContainer.classList.add("col-sm-9", "col-xs-12");
    selectReminderContainer.id = "selectReminderContainer";
    const selectReminder = document.createElement("select");
    selectReminder.classList.add("form-select");
    selectReminder.setAttribute("aria-label", "Default select example");
    const selectReminderOptions = [
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
    checkReminderContainer.appendChild(checkReminder);
    checkReminderContainer.appendChild(checkReminderLabel);
    selectReminderContainer.appendChild(selectReminder);
    reminderContainer.appendChild(checkReminderContainer);
    reminderContainer.appendChild(selectReminderContainer);
    taskForm.appendChild(reminderContainer);
    const taskDescriptionContainer = document.createElement("div");
    taskDescriptionContainer.classList.add("mb-3");
    taskDescriptionContainer.id = "taskDescriptionContainer";
    const taskDescriptionArea = document.createElement("textarea");
    taskDescriptionArea.classList.add("form-control");
    taskDescriptionArea.id = "taskDescriptionArea";
    taskDescriptionArea.rows = 4;
    taskDescriptionArea.placeholder = "Type a brief description of the event or task...";
    taskDescriptionContainer.appendChild(taskDescriptionArea);
    taskForm.appendChild(taskDescriptionContainer);
    const selectTypeContainer = document.createElement("div");
    selectTypeContainer.classList.add("mb-3");
    selectTypeContainer.id = "selectTypeContainer";
    const selectType = document.createElement("select");
    selectType.classList.add("form-select");
    selectType.setAttribute("aria-label", "Default select example");
    selectType.required = true;
    const selectTypeOptions = [
        { value: "", text: "Open this select menu" },
        { value: "1", text: "Task" },
        { value: "2", text: "Event" },
        { value: "3", text: "Meeting" },
        { value: "4", text: "Study" },
        { value: "5", text: "Others" },
    ];
    selectTypeOptions.forEach(option => {
        const selectOption = document.createElement("option");
        selectOption.value = option.value;
        selectOption.textContent = option.text;
        selectType.appendChild(selectOption);
    });
    selectTypeContainer.appendChild(selectType);
    taskForm.appendChild(selectTypeContainer);
    modalBody.appendChild(taskForm);
    modalContent.appendChild(modalBody);
    const modalFooter = document.createElement("div");
    modalFooter.classList.add("modal-footer");
    const btnClose = document.createElement("button");
    btnClose.type = "button";
    btnClose.classList.add("btn", "btn-secondary");
    btnClose.setAttribute("data-bs-dismiss", "modal");
    btnClose.textContent = "Close";
    const btnCreate = document.createElement("button");
    btnCreate.type = "button";
    btnCreate.classList.add("btn", "btn-primary");
    btnCreate.setAttribute("form", "createTaskForm");
    btnCreate.textContent = "Create";
    modalFooter.appendChild(btnClose);
    modalFooter.appendChild(btnCreate);
    modalContent.appendChild(modalFooter);
    let modalInstance = new bootstrap.Modal(containerModalTask);
    modalInstance.show();
}
//# sourceMappingURL=index.js.map
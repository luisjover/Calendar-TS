openModalCreateTask();

function openModalCreateTask () {

console.log("inicio de función correcto");

// creating containerModalTask
const containerModalTask = document.createElement("div");
    containerModalTask.classList.add("modal","fade");
    containerModalTask.id = "containerModalTask";
    containerModalTask.setAttribute("tabindex","-1");
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
    btnCloseX.classList.add ("btn-close");
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
    taskTitleContainer.classList.add("mb-3");
    taskTitleContainer.id = "taskTitleContainer";
// creating taskTitleInput
const taskTitleInput = document.createElement("input");
    taskTitleInput.type = "text";
    taskTitleInput.classList.add("form-control");
    taskTitleInput.id = "taskTitle";
    taskTitleInput.placeholder = "Insert a task or event title";
    taskTitleInput.required = true;
// insertion title
    taskTitleContainer.appendChild(taskTitleInput);
    taskForm.appendChild(taskTitleContainer);

// creating taskDateIniContainer
const taskDateIniContainer = document.createElement("div");
    taskDateIniContainer.classList.add("mb-3", "row");
    taskDateIniContainer.id = "taskDateIniContainer";
// creating taskDateIniInputContainer
const taskDateIniInputContainer = document.createElement("div");
    taskDateIniInputContainer.classList.add("col-sm-9", "col-xs-12");
// creating taskDateIniInput
const taskDateIniInput = document.createElement("input");
    taskDateIniInput.type = "datetime-local";
    taskDateIniInput.classList.add("form-control");
    taskDateIniInput.id = "taskDateIniInput";
    taskDateIniInput.required = true;
    
// creating taskDateIniLabel
const taskDateIniLabel = document.createElement("label");
    taskDateIniLabel.classList.add("col-sm-3", "col-form-label");
    taskDateIniLabel.htmlFor = "taskDateIniInput";
    taskDateIniLabel.textContent = "Initial Date";
// insertion dataIni
taskDateIniInputContainer.appendChild(taskDateIniInput);
taskDateIniContainer.appendChild(taskDateIniLabel);
taskDateIniContainer.appendChild(taskDateIniInputContainer);
taskForm.appendChild(taskDateIniContainer);

// creating taskDateEndContainer
const taskDateEndContainer = document.createElement("div");
    taskDateEndContainer.classList.add("mb-3", "row");
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
    taskDateEndInputContainer.classList.add("mb-3", "col-sm-9", "col-xs-12");
    taskDateEndInputContainer.id = "taskDateEndInputContainer";
// Creating taskDateEndInput
const taskDateEndInput = document.createElement("input");
    taskDateEndInput.type = "datetime-local";
    taskDateEndInput.classList.add("form-control");
    taskDateEndInput.id = "taskDateEndInput";
// insertion dateEnd
checkDateEndContainer.appendChild(checkDateEnd);
checkDateEndContainer.appendChild(checkDateEndLabel);
taskDateEndInputContainer.appendChild(taskDateEndInput);
taskDateEndContainer.appendChild(checkDateEndContainer);
taskDateEndContainer.appendChild(taskDateEndInputContainer);
taskForm.appendChild(taskDateEndContainer);

// creating reminderContainer
const reminderContainer = document.createElement("div");
    reminderContainer.classList.add("mb-3", "row");
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
    checkReminderLabel.htmlFor = "checkReminder";
    checkReminderLabel.textContent = "Reminder";
// creating selectContainer
const selectReminderContainer = document.createElement("div");
    selectReminderContainer.classList.add("col-sm-9", "col-xs-12");
    selectReminderContainer.id = "selectReminderContainer";
// creating selectReminder
const selectReminder = document.createElement("select");
    selectReminder.classList.add("form-select");
    selectReminder.setAttribute("aria-label", "Default select example");
// creating selectReminderOptions
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
    selectReminder.appendChild(selectOption);//Verification
  });
// insertion reminder
checkReminderContainer.appendChild(checkReminder);
checkReminderContainer.appendChild(checkReminderLabel);
selectReminderContainer.appendChild(selectReminder);
reminderContainer.appendChild(checkReminderContainer);
reminderContainer.appendChild(selectReminderContainer);
taskForm.appendChild(reminderContainer);

// creating taskDescriptionContainer
const taskDescriptionContainer = document.createElement("div");
    taskDescriptionContainer.classList.add("mb-3");
    taskDescriptionContainer.id = "taskDescriptionContainer";
// creating taskDescriptionArea
const taskDescriptionArea = document.createElement("textarea");
    taskDescriptionArea.classList.add("form-control");
    taskDescriptionArea.id = "taskDescriptionArea";
    taskDescriptionArea.rows = 4;
    taskDescriptionArea.placeholder = "Type a brief description of the event or task...";
// insertion taskDescription
taskDescriptionContainer.appendChild(taskDescriptionArea);
taskForm.appendChild(taskDescriptionContainer);

// creating taskTypeContainer
const selectTypeContainer = document.createElement("div");
    selectTypeContainer.classList.add("mb-3");
    selectTypeContainer.id = "selectTypeContainer";
// creating selectType
const selectType = document.createElement("select");
    selectType.classList.add("form-select");
    selectType.setAttribute("aria-label", "Default select example");
    selectType.required = true;
// creating selectTypeOptions
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
    selectType.appendChild(selectOption);//Verification
  });
// insertion selectType
selectTypeContainer.appendChild(selectType);
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
// insertion footer
modalFooter.appendChild(btnClose);
modalFooter.appendChild(btnCreate);
modalContent.appendChild(modalFooter);

let modalInstance = new bootstrap.Modal(containerModalTask);

modalInstance.show();
}
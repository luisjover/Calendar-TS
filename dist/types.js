export class Task {
    constructor(newTaskId, newTitle, initialDate, endDate = "string para esto", reminderInMinutes, taskDescription, taskType) {
        this.id = newTaskId;
        this.title = newTitle;
        this.initialDate = initialDate;
        this.endDate = endDate;
        this.reminderInMinutes = reminderInMinutes;
        this.taskDescription = taskDescription;
        this.taskType = taskType;
    }
}
//# sourceMappingURL=types.js.map
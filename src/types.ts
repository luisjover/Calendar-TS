

export class Task {
    constructor(newTaskId: number, newTitle: string, initialDate: string, endDate: string = "string para esto", reminderInMinutes: number, taskDescription: string, taskType: string) {
        this.id = newTaskId;
        this.title = newTitle;
        this.initialDate = initialDate;
        this.endDate = endDate;
        this.reminderInMinutes = reminderInMinutes;
        this.taskDescription = taskDescription;
        this.taskType = taskType;
    }

    id: number;
    title: string;
    initialDate: string;
    endDate: string;
    reminderInMinutes: number;
    taskDescription: string;
    taskType: string;

}

//export enum TaskType { "task", "event", "meeting", "study", "other" };
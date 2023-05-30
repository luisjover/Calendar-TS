

export class Task {
    constructor(newTaskId: number, newTitle: string, initialDate: string, endDate: string = "string para esto", reminderTime: number, taskDescription: string, taskType: string) {
        this.id = newTaskId;
        this.title = newTitle;
        this.initialDate = initialDate;
        this.endDate = endDate;
        this.reminderTime = reminderTime;
        this.taskDescription = taskDescription;
        this.taskType = taskType;
    }

    id: number;
    title: string;
    initialDate: string;
    endDate: string;
    reminderTime: number;
    taskDescription: string;
    taskType: string;

}


export type ArrayModalComponents = [
    taskTitleInput: HTMLInputElement,
    taskDateIniInput: HTMLInputElement,
    taskDateEndInput: HTMLInputElement,
    selectReminder: HTMLSelectElement,
    taskDescriptionArea: HTMLTextAreaElement,
    selectType: HTMLSelectElement
]
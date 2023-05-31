import { setWeekCalendar } from "./mainFunctions.js";


export function timeLine() {

    const taskContainers = document.querySelectorAll(".day-task-section");
    const timeLineContainer = document.createElement("div");
    const point = document.createElement("div");
    const line = document.createElement("div");

    const today = new Date();
    const hour = today.getHours();
    const absoluteMinutes = today.getMinutes() / 60;
    const decimalTime = hour + absoluteMinutes;
    timeLineContainer.style.top = `${decimalTime * 6}rem`;

    timeLineContainer.classList.add("time-line__container");
    point.classList.add("time-line__point");
    line.classList.add("time-line__line");

    timeLineContainer.appendChild(point);
    timeLineContainer.appendChild(line);
    taskContainers.forEach(container => {
        const currentDay = container.getAttribute("currentDay");
        if (currentDay === "true") container.appendChild(timeLineContainer);
        else return;
    })


    const lineChecker = setInterval(() => {
        const today = new Date();
        const hour = today.getHours();
        const absoluteMinutes = today.getMinutes() / 60;
        const decimalTime = hour + absoluteMinutes;
        timeLineContainer.style.top = `${decimalTime * 6}rem`;
        console.log(timeLineContainer.style.top);
        if (timeLineContainer.style.top === "0rem") {
            setWeekCalendar();
            clearInterval(lineChecker);

        }
    }, 10000);

}
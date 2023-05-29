

function timeLine(container: HTMLDivElement) {

    const timeLineContainer = document.createElement("div");
    const point = document.createElement("div");
    const line = document.createElement("div");

    timeLineContainer.classList.add("time-line__container");
    point.classList.add("time-line__point");
    line.classList.add("time-line__line");

    timeLineContainer.appendChild(point);
    timeLineContainer.appendChild(line);

    container.appendChild(timeLineContainer);

    setInterval(() => {
        const today = new Date();
        const hour = today.getHours();
        const absoluteMinutes = today.getMinutes() / 60;
        const decimalTime = hour + absoluteMinutes;
        timeLineContainer.style.top = `${decimalTime * 6}rem`;
    }, 10000);

}
"use strict";
const header = document.querySelector("#header");
const logo = document.createElement("div");
logo.classList.add("logo");
const mainTitle = document.createElement("div");
mainTitle.classList.add("main-title");
const title = document.createElement("h2");
title.textContent = "Calendar";
mainTitle.append(title);
const currentMonthYear = document.createElement("div");
currentMonthYear.classList.add("currentMonthYear");
currentMonthYear.id = "currentMonthYear";
const weekBtnPrev = document.createElement("button");
weekBtnPrev.classList.add("week-btn", "week-btn_prev");
weekBtnPrev.id = "prev-week";
const imgBtnPrev = document.createElement("img");
imgBtnPrev.classList.add("week-btn-img");
imgBtnPrev.src = "/assets/img/icon-left.svg";
weekBtnPrev.appendChild(imgBtnPrev);
const weekBtnNext = document.createElement("button");
weekBtnNext.classList.add("week-btn", "week-btn_NeweekBtnNext");
weekBtnNext.id = "prev-week";
const imgBtnNext = document.createElement("img");
imgBtnNext.classList.add("week-btn-img");
imgBtnNext.src = "/assets/img/icon-right.svg";
weekBtnNext.appendChild(imgBtnNext);
header === null || header === void 0 ? void 0 : header.appendChild(logo);
header === null || header === void 0 ? void 0 : header.appendChild(mainTitle);
header === null || header === void 0 ? void 0 : header.appendChild(currentMonthYear);
header === null || header === void 0 ? void 0 : header.appendChild(weekBtnPrev);
header === null || header === void 0 ? void 0 : header.appendChild(weekBtnNext);
const body = document.querySelector("body");
const main = document.createElement("main");
main.classList.add("main");
main.id = "main";
const mainHeader = document.createElement("div");
mainHeader.classList.add("main-header");
mainHeader.id = "main-header";
const sidebar = document.createElement("aside");
sidebar.classList.add("sidebar");
sidebar.id = "sidebar";
const weekContainer = document.createElement("section");
weekContainer.classList.add("week-container");
weekContainer.id = "week-conatiner";
const hourSection = document.createElement("div");
hourSection.classList.add("hours-section");
for (let i = 0; i < 11; i++) {
    const hour = document.createElement("span");
    hour.classList.add("hour");
    hour.textContent = `${i + 1} AM`;
    if (hour.textContent === "12 AM")
        hour.textContent = "12 PM";
    hourSection.appendChild(hour);
}
for (let i = 0; i < 11; i++) {
    const hour = document.createElement("span");
    hour.classList.add("hour");
    hour.textContent = `${i + 1} PM`;
    hourSection.appendChild(hour);
    if (hour.textContent === "12 PM")
        hour.textContent = "";
    hourSection.appendChild(hour);
}
weekContainer.appendChild(hourSection);
const linesConatiner = document.createElement("div");
linesConatiner.classList.add("lines-container");
for (let i = 0; 0 < 23; i++) {
    const dayTimeLines = document.createElement("div");
    dayTimeLines.classList.add("day-time.lines");
    linesConatiner.appendChild(dayTimeLines);
}
weekContainer.appendChild(linesConatiner);
for (let i = 0; 0 < 6; i++) {
    const dayTaskSection = document.createElement("div");
    dayTaskSection.classList.add("day-task-section", `day-task-section-${i + 1}`);
    dayTaskSection.id = `day-task-section-${i + 1}`;
    if (dayTaskSection.id === "day-task-section-7")
        dayTaskSection.id = "day-task-section-0";
    weekContainer.appendChild(dayTaskSection);
}
body === null || body === void 0 ? void 0 : body.appendChild(main);
main.appendChild(mainHeader);
main.appendChild(sidebar);
main.appendChild(weekContainer);
//# sourceMappingURL=initial.js.map
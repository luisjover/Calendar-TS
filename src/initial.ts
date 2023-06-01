// HEADER ELEMENTS
export function setDom() {
    const header = document.querySelector("#header") as HTMLHeadElement;

    // logo
    const logo = document.createElement("div");
    logo.classList.add("logo");
    // title
    const mainTitle = document.createElement("div");
    mainTitle.classList.add("main-title");
    const title = document.createElement("h2");
    title.textContent = "Calendar";
    mainTitle.append(title);
    // current month and year title
    const currentMonthYear = document.createElement("div");
    currentMonthYear.classList.add("currentMonthYear");
    currentMonthYear.id = "currentMonthYear";
    // previous week button
    const weekBtnPrev = document.createElement("button");
    weekBtnPrev.classList.add("week-btn", "week-btn_prev");
    weekBtnPrev.id = "prev-week";

    const imgBtnPrev = document.createElement("img")
    imgBtnPrev.classList.add("week-btn-img");
    imgBtnPrev.src = "/assets/img/icon-left.svg";
    weekBtnPrev.appendChild(imgBtnPrev);
    // next week button
    const weekBtnNext = document.createElement("button");
    weekBtnNext.classList.add("week-btn", "week-btn_NeweekBtnNext");
    weekBtnNext.id = "prev-week";

    const imgBtnNext = document.createElement("img")
    imgBtnNext.classList.add("week-btn-img");
    imgBtnNext.src = "/assets/img/icon-right.svg";
    weekBtnNext.appendChild(imgBtnNext);

    // create all the elements in the header
    header?.appendChild(logo);
    header?.appendChild(mainTitle);
    header?.appendChild(currentMonthYear);
    header?.appendChild(weekBtnPrev);
    header?.appendChild(weekBtnNext);

    // BODY ELEMENTS

    const body = document.querySelector("body") as HTMLBodyElement;

    // create main container
    const main = document.createElement("main");
    main.classList.add("main");
    main.id = "main";
    // create main header
    const mainHeader = document.createElement("div");
    mainHeader.classList.add("main-header");
    mainHeader.id = "main-header";
    // create sidebar
    const sidebar = document.createElement("aside");
    sidebar.classList.add("sidebar");
    sidebar.id = "sidebar";
    // create section for the week information
    const weekContainer = document.createElement("section");
    weekContainer.classList.add("week-container")
    weekContainer.id = "week-conatiner";
    // create the hours container
    const hourSection = document.createElement("div");
    hourSection.classList.add("hours-section");

    for (let i = 0; i < 11; i++) {

        const hour = document.createElement("span");
        hour.classList.add("hour");
        hour.textContent = `${i + 1} AM`;
        if (hour.textContent === "12 AM") hour.textContent = "12 PM";
        hourSection.appendChild(hour);

    }

    for (let i = 0; i < 11; i++) {

        const hour = document.createElement("span");
        hour.classList.add("hour");
        hour.textContent = `${i + 1} PM`;
        hourSection.appendChild(hour);
        if (hour.textContent === "12 PM") hour.textContent = "";
        hourSection.appendChild(hour);

    }

    weekContainer.appendChild(hourSection);

    // create lines container
    const linesConatiner = document.createElement("div");
    linesConatiner.classList.add("lines-container");

    for (let i = 0; i < 23; i++) {

        const dayTimeLines = document.createElement("div");
        dayTimeLines.classList.add("day-time.lines");
        linesConatiner.appendChild(dayTimeLines);
    }

    weekContainer.appendChild(linesConatiner);

    // create day tasks section
    for (let i = 0; i < 6; i++) {

        const dayTaskSection = document.createElement("div");
        dayTaskSection.classList.add("day-task-section", `day-task-section-${i + 1}`);
        dayTaskSection.id = `day-task-section-${i + 1}`;
        if (dayTaskSection.id === "day-task-section-7") dayTaskSection.id = "day-task-section-0";
        weekContainer.appendChild(dayTaskSection);
    }

    // create all the elements in the body
    body?.appendChild(main);
    main.appendChild(mainHeader);
    main.appendChild(sidebar);
    main.appendChild(weekContainer);
}




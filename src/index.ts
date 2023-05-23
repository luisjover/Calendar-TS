//Header
const header=document.querySelector("#header") as HTMLElement;
const title=document.createElement("h1");
title.textContent="Calendar";

const btnTask=document.createElement("button");
btnTask.setAttribute("class","btn-task")
btnTask.textContent="New Task";

header.appendChild(title);
header.appendChild(btnTask);

//Create days of the weeek
const main=document.querySelector("#main") as HTMLElement;
// sidebar
const sidebar=document.createElement("div");
sidebar.setAttribute("class","sidebar");
sidebar.setAttribute("id","sidebar");
sidebar.textContent="Aqui va el calendario";
//Week info
const weekContainer=document.createElement("div");
weekContainer.setAttribute("class","week-container");
weekContainer.setAttribute("id","week-container");
//Hours of the day
const hoursContainer=document.createElement("div");
hoursContainer.setAttribute("class","hours-section");
weekContainer.appendChild(hoursContainer);
//Days of the week
let weekDays:string[]=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
for(let i=0 ;i<weekDays.length;i++){
    const dayContainer=document.createElement("div");
    dayContainer.setAttribute("class",`day-section-${i+1}`);
    dayContainer.textContent=weekDays[i];
    weekContainer.appendChild(dayContainer);
}

main.appendChild(sidebar);
main.appendChild(weekContainer);

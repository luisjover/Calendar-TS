window.addEventListener("load",setWeekCalendar)




function setWeekCalendar(){
    
    const weekHeader=document.querySelector("#main-header")
    const emptySpace=document.createElement("div")
    emptySpace.classList.add("empty-space")
    emptySpace.id="empty-space";
    weekHeader?.appendChild(emptySpace);
    
    let weekDays:string[]=["MON","TUE","WED","THU","FRI","SAT","SUN"];
    const today= new Date();
    const todayWeekDay=today.getDay();
    const todayRef=today.getDate();

    let firstWeekDay:Date

    if(todayWeekDay==0){
        let addMlSeconds = 6 * 24* 60 * 60000;
        firstWeekDay= new Date(today.getTime() - addMlSeconds);
    }else{
        let addMlSeconds = (todayWeekDay-1) * 24* 60 * 60000;
        firstWeekDay=new Date(today.getTime()-addMlSeconds);
    }


    for(let i=0;i<7;i++){
        let currentWeekDay;
        if(i==0){
            currentWeekDay=firstWeekDay
        }else{
            let addMlSeconds = (i) * 24* 60 * 60000;
            currentWeekDay= new Date(firstWeekDay.getTime()+addMlSeconds);

        }
        
        const dayContainer=document.createElement("div");
        dayContainer.classList.add(`day-section-${i+1}`);
        dayContainer.id=`day-section-${i+1}`
        dayContainer.textContent=weekDays[i];

        const dayNumber=document.createElement("span")
        dayNumber.classList.add("weekday")
        dayNumber.textContent=`${currentWeekDay.getDate()}`;

        
        weekHeader?.appendChild(dayContainer);
        dayContainer.appendChild(dayNumber);



    }

}
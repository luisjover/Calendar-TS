

function showmonthlyCalendar (this: HTMLElement) {

    const calendarContainer = document.createElement ("div");
    const headerCalendarContainer = document.createElement ("div");
    const weekDaysCalendarContainer = document.createElement ("div");



    const TodayDate = new Date();

    const refDate = new Date("June 1, 2023")
    const refDay = refDate.getDate();
    const refWeekDay = refDate.getDay();
    const refMonth = refDate.getMonth();
    const refYear = refDate.getFullYear();

    let refIni

    if (refWeekDay==0) {
        let addMlSeconds = 6 * 24* 60 * 60000;
        refIni = new Date(refDate.getTime() - addMlSeconds);
    }else {
        let addMlSeconds = 1 * 24* 60 * 60000;
        refIni = new Date(refDate.getTime() - addMlSeconds);
    }
    
    for (let i=0; i<42; i++) {
        let currentDate = refIni.getDate()+1;

        const date = document.createElement ("div");
        date.classList.add("day-container");
        date.id = `${i+1}`;
        date.textContent = `${currentDate}`
        date.setAttribute("data-date",`${currentDate}`)

        // lista.appendchild(date);//Atention: falta crear el elemento DOM de lista.
    }

}


function findMonthIni (month: Date) {




}



const dayNow = new Date();
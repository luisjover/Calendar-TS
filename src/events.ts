
// export function assignZIndexToTaskContainers() {
//     const taskContainers = document.getElementsByClassName("task-container") as HTMLCollectionOf<HTMLElement>;
//     const initialWidth = 80;
//     const widthDecrement = 10;

//     for (let i = 0; i < taskContainers.length; i++) {
//         const taskContainer = taskContainers[i];
//         const parentElement = taskContainer.parentElement;
//         if (parentElement) {
//             const overlap = parentElement.getElementsByClassName("task-container");
//             let hasOverlap = false;

//             for (let j = 0; j < overlap.length; j++) {
//                 if (overlap[j] !== taskContainer) {
//                     hasOverlap = true;
//                     break;
//                 }
//             }

//             if (hasOverlap) {
//                 taskContainer.style.zIndex = String(i + 1);
//                 taskContainer.style.width = `${initialWidth - (widthDecrement * i)}%`;
//             } else {
//                 taskContainer.style.width = `${initialWidth}%`;
//             }
//         }
//     }
// }

export function checkTaskContainerOverlap() {
    const dayTaskSection = document.querySelector(".day-task-section");
    const initialWidth = 90;
    const widthDecrement = 10;

    if (dayTaskSection) {

        const taskContainers = dayTaskSection.getElementsByClassName("task-container");

        for (let i = 0; i < taskContainers.length; i++) {
            const currentContainer = taskContainers[i] as HTMLElement;
            const currentStartDate = new Date(currentContainer.getAttribute("data-initialdate")!);
            const currentEndDate = new Date(currentContainer.getAttribute("data-finaldate")!);

            let isOverlapping = false;
            for (let j = 0; j < taskContainers.length; j++) {

                if (i !== j) {
                    const otherContainer = taskContainers[j] as HTMLElement;
                    const otherStartDate = new Date(otherContainer.getAttribute("data-initialdate")!);
                    const otherEndDate = new Date(otherContainer.getAttribute("data-finaldate")!);

                    if (currentStartDate.getTime() <= otherEndDate.getTime() && currentEndDate.getTime() >= otherStartDate.getTime()) {
                        isOverlapping = true;

                        if (parseInt(otherContainer.id) > parseInt(currentContainer.id)) {
                            currentContainer.classList.add("overlapped");
                            currentContainer.style.width = `${initialWidth - (widthDecrement * i)}%`
                        }
                    }
                }
            }

            if (!isOverlapping) {
                currentContainer.classList.remove("overlapped");
                currentContainer.style.width = "100%";
                currentContainer.style.left = "0%";
            }
        }
    }
}


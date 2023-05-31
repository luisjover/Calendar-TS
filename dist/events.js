export function checkTaskContainerOverlap() {
    const dayTaskSection = document.querySelector(".day-task-section");
    const initialWidth = 90;
    const widthDecrement = 10;
    if (dayTaskSection) {
        const taskContainers = dayTaskSection.getElementsByClassName("task-container");
        for (let i = 0; i < taskContainers.length; i++) {
            const currentContainer = taskContainers[i];
            const currentStartDate = new Date(currentContainer.getAttribute("data-initialdate"));
            const currentEndDate = new Date(currentContainer.getAttribute("data-finaldate"));
            let isOverlapping = false;
            for (let j = 0; j < taskContainers.length; j++) {
                if (i !== j) {
                    const otherContainer = taskContainers[j];
                    const otherStartDate = new Date(otherContainer.getAttribute("data-initialdate"));
                    const otherEndDate = new Date(otherContainer.getAttribute("data-finaldate"));
                    if (currentStartDate.getTime() <= otherEndDate.getTime() && currentEndDate.getTime() >= otherStartDate.getTime()) {
                        isOverlapping = true;
                        if (parseInt(otherContainer.id) > parseInt(currentContainer.id)) {
                            currentContainer.classList.add("overlapped");
                            currentContainer.style.width = `${initialWidth - (widthDecrement * i)}%`;
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
//# sourceMappingURL=events.js.map


export function checkTaskContainerOverlap() {
    const dayTaskSection = document.querySelectorAll(".day-task-section") as NodeListOf<HTMLDivElement>;
    const initialWidth = 80;
    const widthDecrement = 10;

    dayTaskSection.forEach(parentContainer => {
        const childrenContainers: NodeListOf<HTMLDivElement> = parentContainer.querySelectorAll(".task-container");


        if (childrenContainers.length > 1) {
            let i = 1;
            childrenContainers.forEach(childContainer => {
                const width = 10 / (childContainer.clientWidth * 0.063);
                const start = parseInt(childContainer.style.top);
                const length = childContainer.clientHeight * 0.063;
                const final = start + length;
                const storage = childContainer.getAttribute("taskId");
                if (storage === null) return;
                const id = parseInt(storage);
                console.log(`esto es length ${length}`);
                console.log(`esto es start ${start}`);
                console.log(`esto es final ${final}`);

                childrenContainers.forEach(childContainer2 => {

                    const width2 = 10 / (childContainer2.clientWidth * 0.063);
                    const start2 = parseInt(childContainer2.style.top);
                    const length2 = childContainer2.clientHeight * 0.063;
                    const final2 = start2 + length2;
                    const storage2 = childContainer2.getAttribute("taskId");

                    if (storage2 === null) return;

                    const id2 = parseInt(storage2);

                    if (id !== id2) {

                        if ((start >= start2 && start <= final2) || (start2 <= final && final <= final2)) {


                            if (id > id2) {
                                childContainer.style.width = `${(initialWidth - widthDecrement * i)}%`;

                                i += 0.2;

                            } else {
                                childContainer2.style.width = `${(initialWidth - widthDecrement * i)}%`;

                                i += 0.2;

                            }


                        }
                    }

                })
            })

        }
    })


}

//start2 <= start && start <= final2 || start2 <= final && final <= final2

// (start2 <= final &&
//     start2 >= start) ||
//     (start <= final2 &&
//         start >= start2) ||
//     (final >= start2 &&
//         final >= final2) ||
//     (final2 >= start &&
//         final2 >= final) ||
//     (start <= start2 &&
//         final >= final2) ||
//     (start2 <= start &&
//         final2 >= final)
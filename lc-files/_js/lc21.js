// Could probably make method shorter with helper functions
const mergeTwoSortedLL = (pnter1, pnter2) => {
    if(pnter1 === null && pnter2 === null) return null;
    else if(pnter1 === null) return pnter2;
    else if(pnter2 === null) return pnter1;
    else {
        // Initalizing Current Head
        let isPnter1Lesser = pnter1.value < pnter2.value;
        const currentHead = isPnter1Lesser ? pnter1 : pnter2;
        const newListPointer = currentHead;
        if(isPnter1Lesser) pnter1++;
        else pnter2++;

        // Merging the Two Lists...
        while(pnter1 !== null || pnter2 !== null) {
            if(pnter1 === null) {
                newListPointer.next = pnter2;
                newListPointer = newListPointer.next;
                pnter2 = pnter2.next;
            } else if (pnter2 === null) {
                newListPointer.next = pnter1;
                newListPointer = newListPointer.next;
                pnter1 = pnter1.next;
            } else {
                if(pnter1.value < pnter2.value) {
                    newListPointer.next = pnter1;
                    newListPointer = newListPointer.next;
                    pnter1 = pnter1.next;
                } else if(pnter1.value === pnter2.value) {
                    newListPointer.next = pnter1;
                    pnter1 = pnter1.next;
                    newListPointer = newListPointer.next;
                    newListPointer.next = pnter2;
                    pnter2 = pnter2.next;
                    newListPointer = newListPointer.next;
                } else {
                    newListPointer.next = pnter2;
                    newListPointer = newListPointer.next;
                    pnter2 = pnter2.next;
                }
            }
        }

        return currentHead;
    }
}


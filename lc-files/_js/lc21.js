const mergeTwoSortedLL = (pnter1, pnter2) => {
    if(pnter1 === null && pnter2 === null) return null;
    else if(pnter1 === null) return pnter2;
    else if(pnter2 === null) return pnter1;
    else {

    }
}


// const mergeTwoSortedLL = (pnter1, pnter2) => {
//     if(pnter1 === null) {
//         return pnter2;
//     } else if(pnter2 === null) {
//         return pnter1;
//     } else {
//         // Initalization
//         let newListHead = null;
//         if(pnter1.value <= pnter2.value) {
//             newListHead = pnter1.value;
//             pnter1 = pnter1.next;
//         } else {
//             newListHead = pnter2.value;
//             pnter2 = pnter2.next;
//         }

//         // Start merging the lists...
//         let newListPnter = newListHead;
//         while(pnter1.next != null || pnter2.next != null) {
//             if(pnter1 === null) {
//                 newListPnter.next = pnter2.value;
//                 pnter2 = pnter2.next;
//             } else if(pnter2 === null) {
//                 newListPnter.nex = pnter1.value;
//                 pnter1 = pnter1.next;
//             } else {
//                 const isPnter1Lesser = pnter1.value <= pnter2.value;
//                 newListPnter.next = isPnter1Lesser ? pnter1.value : pnter2.value;
//                 if(isPnter1Lesser) pnter1 = pnter1.next;
//                 else pnter2 = pnter2.next;
//             }

//             newListPnter = newListPnter.next;
//         }

//         return newListHead;
//     }
// }

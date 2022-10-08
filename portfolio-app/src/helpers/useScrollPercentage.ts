import { useRef, useState, useEffect } from "react";

// export const getScrollPercentage = (element: any) => {
//     console.log('el', element);
//     if (element === null) {
//         return NaN;
//     }
//     const height = element.scrollHeight - element.clientHeight;
//     console.log('height', height);
//     const perc = Math.round((element.scrollTop / height) * 100);
//     console.log('perc', perc);
//     return perc;
// }

export const getScrollPercentage = (event: Event): number => {
    const { target } = event;
    const { documentElement, body } = target as Document;
    const { scrollTop: documentElementScrollTop, scrollHeight: documentElementScrollHeight, clientHeight } = documentElement;
    const { scrollTop: bodyScrollTop, scrollHeight: bodyScrollHeight } = body;
    const percent = (documentElementScrollTop || bodyScrollTop) / ((documentElementScrollHeight || bodyScrollHeight) - clientHeight) * 100;
    return Math.ceil(percent);
}

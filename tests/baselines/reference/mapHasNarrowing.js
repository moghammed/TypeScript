//// [mapHasNarrowing.ts]
const narrowingMap = new Map<string, number>();

const key = 'one';
narrowingMap.set(key, 1);

if(narrowingMap.has(key)){
    let n = narrowingMap.get(key);
} 

//// [mapHasNarrowing.js]
"use strict";
const narrowingMap = new Map();
const key = 'one';
narrowingMap.set(key, 1);
if (narrowingMap.has(key)) {
    let n = narrowingMap.get(key);
}

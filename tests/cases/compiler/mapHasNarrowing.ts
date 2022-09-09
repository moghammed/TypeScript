// @strict: true
// @target: es2015

const narrowingMap = new Map<string, number>();

const key = 'one';
narrowingMap.set(key, 1);

if(narrowingMap.has(key)){
    let n = narrowingMap.get(key);
} 
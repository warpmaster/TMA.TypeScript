export function updateObjectInArray(initialArray, key, value, patch) {
    return initialArray.map((item) => {
        return item[key] === value ? Object.assign(Object.assign({}, item), patch) : item;
    });
}

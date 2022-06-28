export function updateObjectInArray<ObjectShape>(
    initialArray: ObjectShape[],
    key: keyof ObjectShape,
    value: ObjectShape[typeof key],
    patch: Partial<ObjectShape>): ObjectShape[] {

    return initialArray.map( (item) => {
        return item[key] === value ? { ...item, ...patch } : item;
    });
}

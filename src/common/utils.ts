export type Modify<T, R> = Omit<T, keyof R> & R;

export const cloneObjDeep = <T>(obj: T): T => {
    const duplicateObj = {} as T;
    for (const key in obj) {
        if(typeof obj[key] === 'object') {
            duplicateObj[key] = cloneObjDeep(obj[key]);
        } else {
            duplicateObj[key] = obj[key];
        }
    }
    return duplicateObj;
}
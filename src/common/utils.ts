export type Modify<T, R> = Omit<T, keyof R> & R;

export const hasKey = <T extends object>(obj: T, k: keyof any): k is keyof T => k in obj;

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
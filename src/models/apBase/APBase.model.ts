import {cloneObjDeep, hasKey} from "../../common/utils";
import { WithContext } from "../../common/types";


export class APBase<T extends WithContext> {
    public fields: T;

    protected constructor(fields: T) {
        // TODO move ordering to toPlain
        const obj = cloneObjDeep<T>(fields);
        if ('@context' in obj) {
            this.fields = {
                '@context': obj['@context'],
            } as T;
            delete obj["@context"];
        } else {
            this.fields = {} as T;
        }

        this.fields = {
            ...this.fields,
            ...obj
        };
    }

    protected static _create<T extends WithContext>(fields: T) {
        const data = new APBase<T>(fields);
        return new Proxy(data, {
            get(target: APBase<T>, p: keyof APBase<T> & keyof T) {
                return hasKey(target, p) ? target[p] : target.fields[p];
            },
            set(target: APBase<T>, p: keyof APBase<T> & keyof T, newValue: any): boolean {
                target.fields[p] = newValue;
                return true;
            }
        }) as APBase<T> & T & WithContext;
    }

    protected parseValue(value: any): any {
        return value instanceof APBase ? value.toPlain() : value;
    }

    public toPlain(): Record<string, any> {
        const result = {} as Record<string, any>;
        for (const [key, value] of Object.entries(this.fields)) {
            const isFunction = typeof value === 'function';
            const isArray = Array.isArray(value);
            const isNull = value === null;
            const isUndefined = value === undefined;
            const isObject = !isArray && !isNull && typeof value === 'object';
            const isPlain = !isArray && !isNull && !isUndefined && !isObject && !isFunction;

            if (isArray) {
                result[key] = value.map(v => this.parseValue(v));
            } else if (isNull || isUndefined) {
                result[key] = null;
            } else if (isObject) {
                result[key] = {};
                Object.entries(value).forEach(([k, v]) => result[key][k] = this.parseValue(v));
            } else if (isPlain) {
                result[key] = this.parseValue(value);
            } else {
                throw new Error(`Unable to convert key ${key} with value ${value}. Type of value: ${typeof value}`);
            }
        }
        return result;
    }

    public toJSON(): string {
        return JSON.stringify(this.toPlain());
    }
}
import {cloneObjDeep, hasKey} from "../../common/utils";
import { WithContext } from "../../common/types";


export class APBase<T extends WithContext> {
    public fields: T;

    protected constructor(fields: T) {
        this.fields = {
            ...cloneObjDeep<T>(fields),
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
        return value instanceof APBase ? value.toPlain() : value.valueOf();
    }

    public toPlain(): Record<string, any> {
        const result = {} as Record<string, any>;
        if ('@context' in this.fields) {
            result['@context'] = this.fields['@context'];
        }
        for (const [key, value] of Object.entries(this.fields)) {
            if (key === '@context') continue;

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

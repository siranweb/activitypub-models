import { contexts } from "../../common/constants";
import { ContextValue } from "../../common/types";
import { cloneObjDeep } from "../../common/utils";

interface ContextField {
    '@context'?: ContextValue | ContextValue[];
}

export class APBase<T> {
    public fields: T & ContextField;

    constructor(fields: T & ContextField) {
        const obj = cloneObjDeep<T & ContextField>(fields);
        this.fields = {
            ...obj,
        } as T & ContextField;
    }

    private parseValue(value: any): any {
        return value instanceof APBase ? value.toPlain() : value;
    }

    public withContext(context?: ContextValue): this {
        this.fields = {
            ['@context']: context || contexts.activityStreamsV2,
            ...this.fields
        }
        return this;
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
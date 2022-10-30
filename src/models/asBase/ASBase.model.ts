import { contexts } from "../../common/common.constants";

// TODO: types
// TODO: renaming/refactor
export type Context = string | any[];

export interface ModelBaseAPWithContext {
    '@context'?: Context;
}

export class ASBase<T> {
    public fields: T & ModelBaseAPWithContext;

    constructor(fields: T) {
        // TODO: make recursive copy
        this.fields = {
            ...fields,
        } as T & ModelBaseAPWithContext;
    }

    // TODO: rewrite (better option to handle multiple contexts)
    // some comment
    public setContext(context?: Context): this {
        this.fields = {
            ['@context']: context || contexts.activityStreamsV2,
            ...this.fields
        }
        return this;
    }

    public plain(): Record<string, any> {
        const result = {} as Record<string, any>;
        for (const [key, node] of Object.entries(this.fields)) {
            if (node instanceof ASBase) {
                result[key] = node.plain();
            } else {
                result[key] = node;
            }
        }
        // TODO make recursive copy
        return result;
    }

    public json() {
        return JSON.stringify(this.plain());
    }
}
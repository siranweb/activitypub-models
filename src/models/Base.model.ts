// TODO: types
export type Context = string | any[];

export interface ModelBaseAPWithContext {
    '@context'?: Context;
}

export class ModelBaseAP<T> {
    public fields: T & ModelBaseAPWithContext;

    constructor(fields: T) {
        // TODO: make recursive copy
        this.fields = {
            ...fields,
        } as T & ModelBaseAPWithContext;
    }

    // TODO: rewrite (better option to handle multiple contexts)
    public addContext(context?: Context): this {
        this.fields = {
            ['@context']: context || 'https://www.w3.org/ns/activitystreams',
            ...this.fields
        }
        return this;
    }

    public plain(): Record<string, any> {
        const result = {} as Record<string, any>;
        for (const [key, node] of Object.entries(this.fields)) {
            if (node instanceof ModelBaseAP) {
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
export class EventCenter {
    private static _ins: EventCenter = null;
    private constructor() { }
    public static get instance() {
        if (!EventCenter._ins) {
            EventCenter._ins = new EventCenter();
        }

        return EventCenter._ins;
    }

    private _handlers: Map<string, Set<EventHandler>> = new Map();

    on(eventName: string, func: (...args: any[]) => void, target: object, once?: boolean) {
        if (!target || !func || !eventName) {
            return;
        }


        let handler = new EventHandler();
        handler.func = func;
        handler.obj = target;
        handler.once = !!once;

        if (this._handlers.has(eventName)) {
            let set = this._handlers.get(eventName);
            set.add(handler);

        } else {
            let set = new Set<EventHandler>();
            set.add(handler);
            this._handlers.set(eventName, set);

        }


    }

    emit(eventName: string, ...args: any[]) {
        if (!this._handlers.has(eventName)) {
            return;
        }

        let set = this._handlers.get(eventName);

        for (const val of set.values()) {
            if (val.once) {
                set.delete(val);
            }
            
            val.handle(...args);

        }
    }

    off(eventName: string) {
        if (!this._handlers.has(eventName)) {
            return;
        }

        this._handlers.delete(eventName);
    }

    offByTarget(target: object) {
        for (const val of this._handlers) {
            for (const v of val[1]) {
                if (v.obj === target) {
                    v.off();
                    val[1].delete(v);
                }
            }

            if (val[1].size === 0) {
                this._handlers.delete(val[0]);
            }
        }
    }
}

class EventHandler {
    func: Function = () => { };
    obj: object = null;
    once: boolean = false;

    handle(...args: any[]) {
        this.func.call(this.obj, ...args);
    }

    off() {
        this.func = null;
        this.obj = null;
    }
}
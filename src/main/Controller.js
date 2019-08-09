type KeyPress = {
    pressed: boolean,
    duration: number
};

type Key = {
    code: string,
    subs: [Function]
}

type KeyName =
    'UP' |
    'DOWN' |
    'LEFT' |
    'RIGHT' |
    'A' |
    'B'|
    'START'|
    'SELECT';

const allKeys = [
    'UP',
    'DOWN',
    'LEFT',
    'RIGHT',
    'A',
    'B',
    'START',
    'SELECT'];

interface KeyMap {
    getKey(code: string): KeyName
    getCode(keyName: KeyName): string
}

// TODO: define Listener interface (?)

// TODO: codes for each key need to load from config, so we can try different setups

export default class Controller {
    /**
     * DI Constructor
     *
     * @param {KeyMap} keyMap Defines each key name to key code
     * @param {[KeyName]} [keys] Key names. Defaults to all keys
     * @param {boolean} [enableCursor]
     */
    constructor({keyMap, keys = allKeys, enableCursor = true}) {
        this.keyMap = keyMap;
        this.keys = keys;
        this.enableCursor = enableCursor;
        // init keySubs so each key has a corresponding empty Set
        this.keySubs = {};
        keys.forEach(k => this.keySubs[k] = new Set());
    }

    /**
     *
     * @param {Function} listener
     * @param {[KeyName]|KeyName} key
     */
    addListener(listener, key) {
        // turn key into an array if it isn't one
        arrayOf(key)
            .forEach(k => this.keySubs[k].add(listener))
    }

    /**
     *
     * @param {Function} listener
     * @param [key] Optional. Defaults to just removing the listener from all keys it is subbed to
     */
    removeListener(listener, key) {
        // TODO
        arrayOf(key || Object.keys(this.keySubs))
            .forEach(k => this.keySubs[k].delete(listener))
    }
}

/**
 * Helper Returns a val as an Array, whether it started as one or not.
 *
 * If input val is already an Array, returns it. If not, wraps val in an Array.
 * @param {[*]|*} val
 * @return {[*]}
 */
const arrayOf = (val) =>
    Array.isArray(val) ? val : [val];

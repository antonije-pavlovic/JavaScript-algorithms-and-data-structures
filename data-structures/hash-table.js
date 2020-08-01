class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        let PRIME = 31;
        let min = Math.min(key.length, 100);

        for (let i = 0 ; i < min ; i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = ( total * PRIME + value ) % this.keyMap.length;
        }

        return total;
    }

    /**
     *  Handle collisions with `separate chaining`
     */
    set(key, value) {
        const index = this._hash(key);
        const valueAtIndex = this.keyMap[index];

        if (!valueAtIndex) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([ key, value ]);

        return index;
    }

    get(key) {
        const index = this._hash(key);
        const valuesAtIndex = this.keyMap[index];
        let targetValue = undefined;

        if(valuesAtIndex) {
            const length = valuesAtIndex.length;
            for(let i = 0 ; i < length; i++) {
                if(valuesAtIndex[i][0] === key) {
                    targetValue = valuesAtIndex[i][1];
                    break;
                }
            }
        }

        return targetValue;
    }

    /**
     * Loops through the hash table array and return array of keys in the table
     */
    keys() {
        const lengthOfHash = this.keyMap.length;
        const keys = [];
        for(let i = 0 ; i < lengthOfHash; i++) {
            const subArray = this.keyMap[i];

            if(subArray) {
                const lengthOfSubArray = subArray.length;
                for(let j = 0 ; j < lengthOfSubArray; j++) {
                    keys.push(subArray[j][0]);
                }
            }

        }

        return keys;
    }

    /**
     * Loops through the hash table array and return array of values in the table
     */
    values() {
        const lengthOfHash = this.keyMap.length;
        const values = [];
        for(let i = 0 ; i < lengthOfHash; i++) {
            const subArray = this.keyMap[i];

            if(subArray) {
                const lengthOfSubArray = subArray.length;
                for(let j = 0 ; j < lengthOfSubArray; j++) {
                    if(!values.includes(subArray[j][1])) {
                        values.push(subArray[j][1]);
                    }
                }
            }

        }

        return values;
    }
}

const hash = new HashTable();

hash.set("yellow", 10);
hash.set("cyan", 15);
hash.set("cyan ", 12);
hash.set("cao", 15);

console.log(hash.values());

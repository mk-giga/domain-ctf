/**
 * This class can by used to represent any stat that has a current value and a maximum (base) value.
 * 
 * Examples, 
 * 
 * - [ HP: 50 / 100 ]
 * - [ 5 out of 10 seconds remaining ]
 * - [ 10/15 achievements completed ]
 */
export class Stat {

    /**
     * 
     * @param {number} current [HP: 50 / **100**] this argument would be the lefthand value (50 in this example)
     * @param {number} base [HP: **50** / 100] this argument would be the righthand value (100 in this example)
     * @param {number} max maximum value to clamp to
     * @param {number} min minimum value to clamp to
     * @param {Function} onDepleted the callback function that is triggered when the 'current' variable dips below 0 (or specified in the next argument)
     * @param {number} depleteThreshold the number for which to call onDepleted when the value of `current` is less or equal. it is 0 by default
     */
    constructor(current, base, max, min, onDepleted = (()=>{}), depleteThreshold = 0) {
        this.current = current;
        this.base = base;
        this.max = max;
        this.min = min;
        this.depleteThreshold = depleteThreshold; 
        this.onDepleted = onDepleted;
    }

    /**
     * Adds (a positive or negative number) to the stat's current variable.
     * @param {number} val 
     */
    add(val = 0) {
        let currentCurrent = this.current;
        let result = currentCurrent + val;

        if (result > this.max) {
            this.current += val;
        } else if (result < this.min) {

        }
    }
    /**
     * Sets the stat's BASE value. This number marked in bold \[50 / **100**\]
     * This number will be clamped to fit the min/max values if they have been specified.
     * @param {number} val 
     */
    setBase(val = this.current) {
        this.base = this.#clamp(val);
    }

    /**
     * Sets the stat's CURRENT value. This number marked in bold \[**50** / 100\]
     * This number will be clamped to fit the min/max values if they have been specified.
     * @param {number} val 
     */
    setCurrent(val) {
        this.current = this.#clamp(val);
    }

    #clamp(val) {

        if (this.max != undefined) {
            if (val > this.max) {
                val = this.max;
            }
        }

        if (this.min != undefined) {
            if (val < this.min) {
                val = this.min;
            }
        }

        return val;
    }
    #checkCallbackSignature() {
        
    }
    checkDepleted(...args) {

        // is a depletion function defined?
        if (this.onDepleted !== (()=>{})) {

            // is a depletion threshold defined?
            if (this.depleteThreshold != undefined) {

                // both are defined, so check if we are under depletion threshold.
                if (this.current <= this.depleteThreshold) {
                    this.onDepleted.call(this, arguments);
                    return true;
                }
            }
        }
        

        return false;
    }
}
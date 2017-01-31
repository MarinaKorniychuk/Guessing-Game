class GuessingGame {
    constructor() {
    	this._low = null;
    	this._high = null;
    	this._mid = null;
    }

    setRange(min, max) {
    	this._low = min;
    	this._high = max;
    }

    guess() {
    	this._mid = Math.ceil((this._low + this._high) / 2);
    	return this._mid;
    }

    lower() {
    	this._high = this._mid;
        return this._high;
    }

    greater() {
    	this._low = this._mid;
        return this._low;
    }
}

module.exports = GuessingGame;

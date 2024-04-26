import BearFactory from "./bearFactory";

class PolarBearFactory extends BearFactory {
    constructor() {
        super();
        this._health = 475;
        this._attackDamage = 85;
        this._moveSpeed = 0.7;
    }

    get health() { return this._health; }
    get attackDamage() { return this._attackDamage; }
    get moveSpeed() { return this._moveSpeed; }

    stats() {
        return "<b>--- Polar Bear's Stats ---</b><br>" + 
        "Health: " + this.health + 
        "<br> Attack Damage: " + this.attackDamage + 
        "<br>Move Speed: " + this.moveSpeed + "<br>"; 
    }
}

export default PolarBearFactory;
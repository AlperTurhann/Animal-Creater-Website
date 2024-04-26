import BearFactory from "./bearFactory";

class BrownBearFactory extends BearFactory {
    constructor() {
        super();
        this._health = 300;
        this._attackDamage = 70;
        this._moveSpeed = 0.8;
    }

    get health() { return this._health; }
    get attackDamage() { return this._attackDamage; }
    get moveSpeed() { return this._moveSpeed; }

    stats() {
        return "<b>--- Brown Bear's Stats ---</b><br>" + 
        "Health: " + this.health + 
        "<br> Attack Damage: " + this.attackDamage + 
        "<br>Move Speed: " + this.moveSpeed + "<br>"; 
    }
}

export default BrownBearFactory;
import WolfFactory from "./wolfFactory";

class WhiteWolfFactory extends WolfFactory {
    constructor() {
        super();
        this._health = 75;
        this._attackDamage = 15;
        this._moveSpeed = 1.2;
    }

    get health() { return this._health; }
    get attackDamage() { return this._attackDamage; }
    get moveSpeed() { return this._moveSpeed; }

    stats() {
        return "<b>--- White Wolf's Stats ---</b><br>" + 
        "Health: " + this.health + 
        "<br> Attack Damage: " + this.attackDamage + 
        "<br>Move Speed: " + this.moveSpeed + "<br>"; 
    }
}

export default WhiteWolfFactory;
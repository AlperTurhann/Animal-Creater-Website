import WolfFactory from "./wolfFactory";

class BlackWolfFactory extends WolfFactory {
    constructor() {
        super();
        this._health = 150;
        this._attackDamage = 35;
        this._moveSpeed = 2.4;
    }

    get health() { return this._health; }
    get attackDamage() { return this._attackDamage; }
    get moveSpeed() { return this._moveSpeed; }

    stats() {
        return "<b>--- Black Wolf's Stats ---</b><br>" + 
        "Health: " + this.health + 
        "<br> Attack Damage: " + this.attackDamage + 
        "<br>Move Speed: " + this.moveSpeed + "<br>"; 
    }
}

export default BlackWolfFactory;
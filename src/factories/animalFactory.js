class AnimalFactory {
    constructor() {
        if (new.target === AnimalFactory) throw new TypeError("Cannot instantiate abstract class");
    }

    get health() { throw new Error("Abstract property 'health' must be implemented"); }
    get attackDamage() { throw new Error("Abstract property 'attackDamage' must be implemented"); }
    get moveSpeed() { throw new Error("Abstract property 'moveSpeed' must be implemented"); }

    stats() { throw new Error("Abstract method 'stats' must be implemented"); }
}

export default AnimalFactory;
import AnimalFactory from "../animalFactory";

class WolfFactory extends AnimalFactory {
    constructor() {
        super();
        if (new.target === WolfFactory) throw new TypeError("Cannot instantiate abstract class");
    }
}

export default WolfFactory;
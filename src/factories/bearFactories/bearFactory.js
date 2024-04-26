import AnimalFactory from "../animalFactory";

class BearFactory extends AnimalFactory {
    constructor() {
        super();
        if (new.target == BearFactory) throw new TypeError("Cannot instantiate abstract class");
    }
}

export default BearFactory;
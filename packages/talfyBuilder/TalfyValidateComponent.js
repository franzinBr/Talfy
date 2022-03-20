import TalfyError from "./TalfyError.js";
import TalfyErrorTypes from "./TalfyErrorTypes.js";


export default class TalfyValidateComponent {
    constructor(componentFunction) {
        this.componentFunction = componentFunction;
    }

    validate() {
        if (!this.componentFunction instanceof Function) {
            throw new TalfyError("the component must be a function", TalfyErrorTypes.BUILDER);
        }

    }
}
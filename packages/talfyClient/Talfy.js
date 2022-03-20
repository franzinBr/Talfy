import TalfyValidateComponent from "../talfyBuilder/TalfyValidateComponent.js";
import TalfyComponent from "../talfyDom/TalfyComponent.js";


export default class Talfy extends TalfyComponent {
    constructor(componentFunction) {
        const talfyValidateComponent = new TalfyValidateComponent(componentFunction);
        talfyValidateComponent.validate();

        super(componentFunction);
    }
}
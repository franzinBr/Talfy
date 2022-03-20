import TalfyHTMLElement from "./TalfyHTMLElement.js";


export default class TalfyClassBuilder {
    constructor(componentFunction) {
        this.componentFunction = componentFunction;
    }

    builderHTMLClass() {
        const TalfyClassBuilder = this
        return class TalfyElement extends TalfyHTMLElement {
            constructor() {
                super(TalfyClassBuilder);
            }
        }

    }
}
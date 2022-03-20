import TalfyClassBuilder from "./TalfyClassBuilder.js";

export default class TalfyComponent {
    constructor(componentFunction) {
        this.talfyClassBuilder = new TalfyClassBuilder(componentFunction);
        this.talfyElement = this.talfyClassBuilder.builderHTMLClass();
        customElements.define(`talfy-${componentFunction.name}`, this.talfyElement);
    }
}
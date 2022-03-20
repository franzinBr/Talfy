export default class TalfyHTMLElement extends HTMLElement {
    constructor(TalfyClassBuilder) {
        super();

        this.attachShadow({ mode: 'open' });
        this.template = document.createElement('template');
        this.props = this.#getPropertys();
        this.template.innerHTML = TalfyClassBuilder.componentFunction(this.props);
        this.shadowRoot.appendChild(this.template.content);
    }

    #getPropertys() {
        return this.getAttributeNames().reduce((acc, name) => {

            const convert = function(value) {
                try {
                    return JSON.parse(value);
                } catch (error) {
                    return value
                }
            }

            return { ...acc, [name]: convert(this.getAttribute(name)) };
        }, {})
    }

}
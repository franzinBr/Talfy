export default class TalfyError extends Error {
    constructor(message, errorType) {
        super(message);
        this.errorType = errorType;
    }
}
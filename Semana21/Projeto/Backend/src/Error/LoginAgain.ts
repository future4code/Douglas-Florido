import { BaseError } from "./BaseError";

export class LoginAgain extends BaseError {
    constructor(message: string) {
        super(message, 401)
    }
}
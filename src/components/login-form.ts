import {inject} from "aurelia-framework";
import {ValidationControllerFactory, ValidationController, ValidationRules} from "aurelia-validation";

@inject(ValidationControllerFactory)
export class LoginForm {
    name: string;
    readonly controller: ValidationController;

    constructor(controllerFactory: ValidationControllerFactory) {
        this.controller = controllerFactory.createForCurrentScope();
    }

    submit(): void {
        this.controller.validate();
    }
}

ValidationRules
    .ensure((a: LoginForm) => a.name).required()
    .on(LoginForm);

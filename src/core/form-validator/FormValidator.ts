export enum RULES {
  REQUIRED = "required",
  ONLY_NUMBERS = "onlyNumbers"
}

export interface IValidatorRule {
  [field: string]: RULES[];
}

export interface IValidateError {
  [field: string]: string;
}

export default abstract class FormValidator {
  protected fields: any;

  protected errors: IValidateError = {};

  protected isValid: boolean = true;

  constructor(fields: object) {
    this.fields = fields;
  }

  abstract rules(): IValidatorRule[];

  validate(): boolean {
    this.rules().forEach((rule: IValidatorRule) => {
      const fieldName: string = Object.keys(rule)[0];
      const ruleList: RULES[] = rule[fieldName];

      ruleList.forEach((validator: RULES) => this[validator](fieldName));
    });

    return this.isValid;
  }

  getErrors(): IValidateError {
    return this.errors;
  }

  private invalidateField(fieldName: string, message: string) {
    if (!this.errors[fieldName]) {
      this.errors[fieldName] = message;
    }

    this.isValid = false;
  }

  protected required(fieldName: string): void {
    const value: any = this.fields[fieldName];
    const hasIdProp = Object.prototype.hasOwnProperty.call(value, "id");

    if (typeof value === "object" && hasIdProp && value.id !== "") {
      return;
    }

    if (typeof value === "string" && value !== "" && value !== null) {
      return;
    }

    this.invalidateField(fieldName, "Este campo é obrigatório.");
  }

  protected onlyNumbers(fieldName: string): void {
    const value = parseInt(this.fields[fieldName], 10);

    if (!isNaN(value)) {
      return;
    }

    this.invalidateField(fieldName, "Digite somente números.");
  }
}

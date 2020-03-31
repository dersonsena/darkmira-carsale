import ICar from "./ICar";
import FormValidator, {
  IValidatorRule,
  RULES
} from "../../core/form-validator/FormValidator";

export default class CarValidators extends FormValidator {
  static build(fields: ICar) {
    return new this(fields);
  }

  // eslint-disable-next-line class-methods-use-this
  rules(): IValidatorRule[] {
    return [
      { description: [RULES.REQUIRED] },
      { board: [RULES.REQUIRED] },
      { mileage: [RULES.REQUIRED, RULES.ONLY_NUMBERS] },
      { year: [RULES.REQUIRED, RULES.ONLY_NUMBERS] },
      { price: [RULES.REQUIRED] },
      { brand: [RULES.REQUIRED] },
      { model: [RULES.REQUIRED] },
      { color: [RULES.REQUIRED] },
      { city: [RULES.REQUIRED] }
    ];
  }
}

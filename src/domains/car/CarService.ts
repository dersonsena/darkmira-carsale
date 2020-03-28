import ServiceAbstract from "../../core/service/ServiceAbstract";

export default class CarService extends ServiceAbstract {
  protected collectionName: string = "cars";

  static build(options = {}) {
    return new this(options);
  }
}

import ServiceAbstract from "../../core/service/ServiceAbstract";

export default class ModelService extends ServiceAbstract {
  protected collectionName: string = "models";

  static build(options = {}) {
    return new this(options);
  }
}

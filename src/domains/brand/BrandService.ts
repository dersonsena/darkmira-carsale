import ServiceAbstract from "../../core/service/ServiceAbstract";

export default class BrandService extends ServiceAbstract {
  protected collectionName: string = "brands";

  static build(options = {}) {
    return new this(options);
  }
}

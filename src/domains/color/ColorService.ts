import ServiceAbstract from "../../core/service/ServiceAbstract";

export default class ColorService extends ServiceAbstract {
  protected collectionName: string = "colors";

  static build(options = {}) {
    return new this(options);
  }
}

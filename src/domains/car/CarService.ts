import ServiceAbstract from "../../core/service/ServiceAbstract";
import { ICarPhoto } from "./ICar";

export default class CarService extends ServiceAbstract {
  protected collectionName: string = "cars";

  static build(options = {}) {
    return new this(options);
  }

  async uploadPhoto(photo: ICarPhoto, index: number = 0) {
    const imageName = `${+new Date()}-${photo.name}`;
    const storageRef = this.getStorage().ref(`images/${imageName}`);
    const metadata = { contentType: photo.type };

    return storageRef
      .put(photo.file, metadata)
      .then(snapshot => snapshot.ref.getDownloadURL())
      .then(url => ({ url, index }));
  }
}

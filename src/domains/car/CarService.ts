import ServiceAbstract from "../../core/service/ServiceAbstract";
import { ICarPhoto } from "./ICar";
import { IQueryOptions, ORDER_DIRECTIONS } from "../../core/service/Contratcs";

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

  async getFeaturedOffers() {
    return this.getfirestore()
      .collection(this.collectionName)
      .orderBy("description", "asc")
      .get()
      .then(snapshot => {
        const data: object[] = [];

        snapshot.docs.forEach(doc => {
          const document = doc.data();
          document.id = doc.id;
          data.push(document);
        });

        return data;
      });
  }
}

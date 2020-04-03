import ServiceAbstract from "../../core/service/ServiceAbstract";
import ICar, { ICarPhoto } from "./ICar";

export default class CarService extends ServiceAbstract {
  protected collectionName: string = "cars";

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
    return this.getFirestore()
      .collection(this.collectionName)
      .orderBy("views", "desc")
      .get()
      .then(snapshot => {
        const data: object[] = [];

        snapshot.docs.forEach(doc => {
          const document = doc.data();
          document.id = doc.id;
          document.createdAt = document.createdAt.toDate();
          data.push(document);
        });

        return data;
      });
  }

  async addViewToOffer(car: ICar) {
    const views = car.views + 1;
    const data = { ...car, views };

    return this.getFirestore()
      .collection(this.collectionName)
      .doc(car.id.toString())
      .update(data)
      .then(() => views);
  }
}

import firebase from "firebase";
import { firestone } from "../firebase";
import { IQueryOptions } from "./Contratcs";

export default abstract class ServiceAbstract {
  protected abstract collectionName: string;

  private firestone: firebase.firestore.Firestore;

  constructor(options = {}) {
    this.firestone = firestone;
  }

  getFirestone(): firebase.firestore.Firestore {
    return this.firestone;
  }

  async insert(document: any) {
    return this.firestone
      .collection(this.collectionName)
      .add(document)
      .then((docRef: any) => docRef.id)
      .catch(error => {
        console.error("Error adding document: ", error);
      });
  }

  async getAllByCollection(options: IQueryOptions = {}) {
    return this.firestone
      .collection(this.collectionName)
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

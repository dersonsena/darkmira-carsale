import firebase from "firebase";
import { firestore, storage } from "../firebase";
import { IQueryOptions, ORDER_DIRECTIONS } from "./Contratcs";

export default abstract class ServiceAbstract {
  protected abstract collectionName: string;

  private storage: firebase.storage.Storage;

  private firestore: firebase.firestore.Firestore;

  constructor(options = {}) {
    this.firestore = firestore;
    this.storage = storage;
  }

  getfirestore(): firebase.firestore.Firestore {
    return this.firestore;
  }

  getStorage(): firebase.storage.Storage {
    return this.storage;
  }

  async insert(document: any) {
    return this.firestore
      .collection(this.collectionName)
      .add(document)
      .then((docRef: any) => docRef.id)
      .catch(error => {
        console.error("Error adding document: ", error);
      });
  }

  async getAllByCollection(options: IQueryOptions = {}) {
    const sortField: string = options.sort?.column
      ? options.sort.column
      : "name";

    const sortDirection: ORDER_DIRECTIONS = options.sort?.direction
      ? options.sort.direction
      : ORDER_DIRECTIONS.ASC;

    return this.firestore
      .collection(this.collectionName)
      .orderBy(sortField, sortDirection)
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

import firebase from "firebase";
import { firestore, storage } from "../firebase";
import { IQueryOptions, ORDER_DIRECTIONS } from "./Contratcs";
import { ICarPhoto } from "../../domains/car/ICar";

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

  async update(documentId: string, data: object) {
    return this.firestore
      .collection(this.collectionName)
      .doc(documentId)
      .update(data);
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

  async getById(documentId: string) {
    if (!documentId) {
      return false;
    }

    return this.firestore
      .collection(this.collectionName)
      .doc(documentId)
      .get()
      .then(snapshot => {
        if (!snapshot.exists) {
          return null;
        }

        return snapshot;
      })
      .then((snapshot: any) => {
        const data = snapshot.data();

        data.photos.map((photo: ICarPhoto) => {
          photo.image = photo.firebaseUrl;
          return photo;
        });

        return {
          ...data,
          id: snapshot.id
        };
      });
  }
}

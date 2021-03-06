import firebase from "firebase";
import { firestore, storage } from "../firebase";
import { IQueryOptions, ORDER_DIRECTIONS } from "./Contratcs";
import { ICarPhoto } from "../../domains/car/ICar";

export default abstract class ServiceAbstract {
  protected abstract collectionName: string;

  private readonly storage: firebase.storage.Storage;

  private readonly firestore: firebase.firestore.Firestore;

  static build(options = {}) {
    // @ts-ignore
    return new this(options);
  }

  constructor(options = {}) {
    this.firestore = firestore;
    this.storage = storage;
  }

  getFirestore(): firebase.firestore.Firestore {
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

  async delete(documentId: string) {
    return this.firestore
      .collection(this.collectionName)
      .doc(documentId)
      .delete();
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

          if (document.createdAt) {
            document.createdAt = document.createdAt.toDate();
          }

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
          throw new Error("Registro requisitado não foi encontrado.");
        }

        return snapshot;
      })
      .then((snapshot: any) => {
        const data = snapshot.data();

        if (data.createdAt) {
          data.createdAt = data.createdAt.toDate();
        }

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

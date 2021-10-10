import firebase from "firebase";
import FieldValue = firebase.firestore.FieldValue;

export interface Visibility {
  value: string;
  viewValue: string;
}

export interface Room {
  id: string;
  name: string;
  visibility: Visibility;
  description?: string;
  thumbnail?: string;
  link?: string;
}

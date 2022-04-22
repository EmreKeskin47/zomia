export const FETCH_REPORTS = "FETCH_REPORTS";
export const DELETE_REPORT = "DELETE_REPORT";
export const UPDATE_REPORT = "UPDATE_REPORT";
export const CREATE_REPORT = "CREATE_REPORT";

import {
  collection,
  doc,
  getDocs,
  getFirestore,
  addDoc,
} from "firebase/firestore";
import { db } from "../store";

export const saveReport = (item) => {
  return async (dispatch) => {
    try {
      const docRef = await addDoc(collection(db, "reports"), {
        report: item,
      });
      console.log("Document written with ID: ", docRef.id);
      dispatch({
        type: CREATE_REPORT,
        payload: {
          title: item.title,
          author: item.author,
          date: item.date,
          image: item.image,
          text: item.text,
          links: item.link,
          pdf: item.pdf,
        },
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
};

export const fetchArticles = () => {
  return async (dispatch) => {
    try {
      let reports = [];

      const querySnapshot = await getDocs(collection(db, "reports"));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
      });
      dispatch({
        type: FETCH_ARTICLES,
        payload: reports,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const deleteArticle = (id) => {
  return async (dispatch) => {
    try {
      const res = await db.collection("reports").doc(id).delete();
      console.log(res);
      dispatch({
        type: DELETE_ARTICLE,
        payload: id,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

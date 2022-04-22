export const FETCH_ARTICLES = "FETCH_ARTICLES";
export const CREATE_ARTICLE = "CREATE_ARTICLE";
export const DELETE_ARTICLE = "DELETE_ARTICLE";
export const UPDATE_ARTICLE = "UPDATE_ARTICLE";
import { collection, getDocs, getFirestore, addDoc } from "firebase/firestore";
import { title } from "process";
import { db } from "../store";

export const saveArticle = () => {
  return async (dispatch) => {
    try {
      const docRef = await addDoc(collection(db, "articles"), {
        title: "trial",
      });
      console.log("Document written with ID: ", docRef.id);
      dispatch({
        type: CREATE_ARTICLES,
        payload: { title: "trial" },
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  //   console.log("save article", image);
  //   const newArticle = new Article(
  //     0,
  //     title,
  //     image,
  //     date,
  //     author,
  //     category,
  //     description,
  //     link,
  //     text
  //   );
};

// const deleteArticle = () => {
//     console.log("delete article");
// };

export const fetchArticles = () => {
  return async (dispatch) => {
    try {
      let articles = [];

      const querySnapshot = await getDocs(collection(db, "articles"));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
      });
      dispatch({
        type: FETCH_ARTICLES,
        payload: articles,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const deleteArticle = (id) => {
  return async (dispatch) => {
    try {
      const res = await db.collection("articles").doc(id).delete();
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

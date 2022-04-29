export const FETCH_ARTICLES = "FETCH_ARTICLES";
export const CREATE_ARTICLE = "CREATE_ARTICLE";
export const DELETE_ARTICLE = "DELETE_ARTICLE";
export const UPDATE_ARTICLE = "UPDATE_ARTICLE";
import {
    collection,
    getDocs,
    addDoc,
    doc,
    updateDoc,
    deleteDoc,
    deleteField,
} from "firebase/firestore";
import { db } from "../store";
import { Article } from "../../models/Article";

export const saveArticle = (item) => {
    return async (dispatch) => {
        try {
            const docRef = await addDoc(collection(db, "articles"), {
                article: item,
            });
            console.log("Document written with ID: ", docRef.id);
            dispatch({
                type: CREATE_ARTICLE,
                payload: {
                    title: item.title,
                    author: item.author,
                    date: item.date,
                    image: item.image,
                    text: item.text,
                    description: item.description,
                    links: item.link,
                },
            });
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };
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
                articles.push(
                    new Article(
                        doc.id,
                        doc.data().article.title ?? "",
                        doc.data().article.image ?? "",
                        doc.data().article.date ?? "",
                        doc.data().article.author ?? "",
                        doc.data().article.category ?? "",
                        doc.data().article.description ?? "",
                        doc.data().article.link ?? "",
                        doc.data().article.text ?? "",
                        doc.data().article.additionalImages ?? ""
                    )
                );
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
            const cityRef = doc(db, "articles", id);
            console.log(cityRef);

            await deleteDoc(cityRef);
            dispatch({
                type: DELETE_ARTICLE,
                payload: id,
            });
        } catch (err) {
            console.log(err);
        }
    };
};

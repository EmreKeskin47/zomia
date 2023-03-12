export const FETCH_CAROUSEL_CONTENT = "FETCH_CAROUSEL_CONTENT";
export const ADD_TO_CAROUSEL = "ADD_TO_CAROUSEL";
export const DELETE_FROM_CAROUSEL = "DELETE_FROM_CAROUSEL";
export const UPDATE_CAROUSEL_ORDER = "UPDATE_CAROUSEL_ORDER";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
  setDoc,
} from "firebase/firestore";
import { db } from "../store";
import { Article } from "../../models/Article";
import { Post } from "../../models/Post";
import { toast } from "react-toastify";

export const addToCarousel = (item) => {
  return async (dispatch) => {
    try {
      await addDoc(collection(db, "carousel"), {
        post: item,
      });

      dispatch({
        type: ADD_TO_CAROUSEL,
        payload: {
          title: item.title,
          image: item.image,
          description: item.description,
          link: item.link,
        },
      });
      toast("Post has been successfully added to carousel");
    } catch (e) {
      toast("Error adding post to carousel: " + e);
    }
  };
};

export const fetchCarouselPosts = () => {
  return async (dispatch) => {
    try {
      let posts = [];

      const querySnapshot = await getDocs(collection(db, "carousel"));

      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log("<<<<<<<doc", doc.data());
        posts.push(
          new Post(
            doc.id,
            doc.data().post.title ?? "",
            doc.data().post.image ?? "",
            doc.data().post.category ?? "",
            doc.data().post.description ?? "",
            doc.data().post.link ?? ""
          )
        );
      });

      dispatch({
        type: FETCH_CAROUSEL_CONTENT,
        payload: posts,
      });
    } catch (err) {
      toast("fetch posts error" + err);
    }
  };
};

export const deleteArticle = (id) => {
  return async (dispatch) => {
    try {
      await deleteDoc(doc(db, "articles", id));
      dispatch({
        type: DELETE_ARTICLE,
        payload: id,
      });
      toast("Article has been successfully deleted");
    } catch (err) {
      toast("delete article error" + err);
    }
  };
};

export const updateArticle = (item) => {
  return async (dispatch) => {
    try {
      await setDoc(doc(db, "articles", item.id), {
        article: item,
      });

      dispatch({
        type: UPDATE_ARTICLE,
        payload: {
          title: item.title,
          image: item.image,
          date: item.date,
          author: item.author,
          description: item.description,
          links: item.link,
          text: item.text,
          photoAttribution: item.photoAttribution,
          additionalImg: item.additionalImg,
        },
        id: item.id,
      });
      toast("Article has been successfully updated");
    } catch (e) {
      toast("Error updating document: " + e);
    }
  };
};

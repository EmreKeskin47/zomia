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

export const deleteFromCarousel = (id) => {
  return async (dispatch) => {
    try {
      await deleteDoc(doc(db, "carousel", id));
      dispatch({
        type: DELETE_FROM_CAROUSEL,
        payload: id,
      });
      toast("Post has been successfully deleted");
    } catch (err) {
      toast("delete post error" + err);
    }
  };
};

export const updateCarouselOrder = (items) => {
  // hard coded id to keep updating the same array
  const id = "lFtEzre8cWH2kCq9Ht3M";
  return async (dispatch) => {
    try {
      setDoc(doc(db, "carousel-order", id), {
        order: [...items],
      });

      dispatch({
        type: UPDATE_CAROUSEL_ORDER,
        payload: {
          items,
        },
        id: id,
      });

      toast("Order has been successfully updated");
      console.log("in-actions: ", items);
    } catch (e) {
      toast("Error updating order: " + e);
    }
  };
};

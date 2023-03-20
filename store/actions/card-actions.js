export const FETCH_CARDS = "FETCH_CARDS";
export const ADD_TO_CARD = "ADD_TO_CARD";
// export const DELETE_FROM_CAROUSEL = "DELETE_FROM_CAROUSEL";
export const UPDATE_CARD_ORDER = "UPDATE_CARD_ORDER";
export const FETCH_CARD_ORDER = "FETCH_CARD_ORDER";
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  doc,
  deleteDoc,
  setDoc,
} from "firebase/firestore";
import { db } from "../store";
import { Article } from "../../models/Article";
import { Post } from "../../models/Post";
import { toast } from "react-toastify";
import { Card } from "../../models/Card";
// hard coded id of oredered card content to keep updating the same array

const id = "miAfvZeyenVPFl4yVjMY";
export const addToCard = (item) => {
  return async (dispatch) => {
    try {
      await addDoc(collection(db, "cards"), {
        card: item,
      });

      dispatch({
        type: ADD_TO_CARD,
        payload: {
          title: item.title,
          image: item.image,
          description: item.description,
          link: item.link,
        },
      });
      toast("Card has been successfully added");
    } catch (e) {
      toast("Error adding card to homepage: " + e);
    }
  };
};

export const fetchCards = () => {
  return async (dispatch) => {
    try {
      let cards = [];

      const querySnapshot = await getDocs(collection(db, "cards"));

      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log("<<<<<<<doc", doc.data());
        cards.push(
          new Card(
            doc.id,
            doc.data().card.title ?? "",
            doc.data().card.image ?? "",
            doc.data().card.category ?? "",
            doc.data().card.description ?? "",
            doc.data().card.links ?? ""
          )
        );
      });

      dispatch({
        type: FETCH_CARDS,
        payload: cards,
      });
    } catch (err) {
      toast("fetch cards error" + err);
    }
  };
};

// export const deleteFromCarousel = (id) => {
//   return async (dispatch) => {
//     try {
//       await deleteDoc(doc(db, "carousel", id));
//       dispatch({
//         type: DELETE_FROM_CAROUSEL,
//         payload: id,
//       });
//       toast("Post has been successfully deleted");
//     } catch (err) {
//       toast("delete post error" + err);
//     }
//   };
// };

export const updateCardOrder = (items) => {
  return async (dispatch) => {
    try {
      setDoc(doc(db, "card-order", id), {
        order: [...items],
      });

      dispatch({
        type: UPDATE_CARD_ORDER,
        payload: {
          items,
        },
        id: id,
      });

      toast("Card order has been successfully updated");
      console.log("in-actions: ", items);
    } catch (e) {
      toast("Error updating card order: " + e);
    }
  };
};

export const fetchCardOrder = () => {
  return async (dispatch) => {
    try {
      let order;
      const docRef = doc(db, "card-order", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        order = docSnap.data();
        dispatch({
          type: FETCH_CARD_ORDER,
          payload: order,
        });
      } else {
        console.log("No such document!");
      }
    } catch (err) {
      toast("fetch card order error" + err);
    }
  };
};

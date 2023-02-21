export const FETCH_REPORTS = "FETCH_REPORTS";
export const DELETE_REPORT = "DELETE_REPORT";
export const UPDATE_REPORT = "UPDATE_REPORT";
export const CREATE_REPORT = "CREATE_REPORT";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../store";
import { Report } from "../../models/Report";
import { toast } from "react-toastify";
import { mockReports } from "../../MOCK_PDF";

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
          photoAttribution: item.photoAttribution,
          description: item.description,
          links: item.link,
          pdf: item.pdf,
          featured: item.featured ? item.featured : false,
        },
      });
      toast("Report has been successfully created");
    } catch (e) {
      toast("Error creating report: " + e);
    }
  };
};

export const fetchReports = () => {
  return async (dispatch) => {
    try {
      let reports = [];

      const querySnapshot = await getDocs(collection(db, "reports"));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        reports.push(
          new Report(
            doc.id,
            doc.data().report.title,
            doc.data().report.image,
            doc.data().report.date,
            doc.data().report.author,
            "cat",
            doc.data().report.text,
            doc.data().report.description,
            doc.data().report.photoAttribution,
            doc.data().report.pdf,
            doc.data().report.link,
            doc.data().report.featured
          )
        );
      });

      // USE THIS TO CONNECT TO HARDCODED DATA IF GOOGLE CLOUD IS DOWN
      // reports = mockReports;

      dispatch({
        type: FETCH_REPORTS,
        payload: reports,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const deleteReport = (id) => {
  return async (dispatch) => {
    try {
      const cityRef = doc(db, "reports", id);
      console.log(cityRef);

      await deleteDoc(cityRef);
      dispatch({
        type: DELETE_REPORT,
        payload: id,
      });
      toast("Report has been successfully deleted");
    } catch (e) {
      toast("Error deleting report: " + e);
    }
  };
};

export const updateReport = (item) => {
  return async (dispatch) => {
    try {
      await setDoc(doc(db, "reports", item.id), {
        report: item,
      });

      dispatch({
        type: UPDATE_REPORT,
        payload: {
          title: item.title,
          author: item.author,
          date: item.date,
          image: item.image,
          text: item.text,
          photoAttribution: item.photoAttribution,
          description: item.description,
          pdfLink: item.pdfLink,
          featured: item.featured ? item.featured : false,
        },
        id: item.id,
      });
      toast("Report has been successfully updated");
    } catch (e) {
      toast("Error updating report: " + e);
    }
  };
};

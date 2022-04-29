export const FETCH_REPORTS = "FETCH_REPORTS";
export const DELETE_REPORT = "DELETE_REPORT";
export const UPDATE_REPORT = "UPDATE_REPORT";
export const CREATE_REPORT = "CREATE_REPORT";
import {
    collection,
    getDocs,
    addDoc,
    doc,
    updateDoc,
    setDoc,
    deleteDoc,
    deleteField,
} from "firebase/firestore";
import { db } from "../store";
import { Report } from "../../models/Report";

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
                        doc.data().report.pdf,
                        doc.data().report.link
                    )
                );
            });
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
        } catch (err) {
            console.log(err);
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
                    pdfLink: item.pdfLink,
                },
                id: item.id,
            });
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };
};

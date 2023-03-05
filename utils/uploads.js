import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

export const handleSnapshot = async (snapshot) => {
  const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  // setPercent(progress);
  console.log("Upload is " + progress + "% done");
  switch (snapshot.state) {
    case "paused":
      console.log("Upload is paused");
      break;
    case "running":
      console.log("Upload is running");
      break;
  }
};

export const preserveLineBreak = (text) => {
  while (text.includes("\n")) {
    text = text.replace("\n", "\\n");
  }
  return text;
};

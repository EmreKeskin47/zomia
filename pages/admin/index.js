import React, { useContext, useEffect, useState } from "react";
import { Grid, TextField, Button } from "@mui/material";
import Box from "@mui/material/Box";
import CreateReportForm from "../../components/admin/CreateReportForm";
import AdminAppBar from "../../components/admin/AdminAppBar";
import { useDispatch } from "react-redux";
import * as articleActions from "../../store/actions/article-actions";
import singleContext from "../../SingleContext";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Admin = () => {
  const dispatch = useDispatch();
  const context = useContext(singleContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [adminAuth, setAdminAuth] = useState(false);
  useEffect(() => {
    dispatch(articleActions.fetchArticles());
    dispatch(articleActions.deleteArticle(2));
  }, []);

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  //Firebase sign in
  const auth = getAuth();
  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        context.signInAdmin();
        setAdminAuth(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("error message");
        console.log(error.message);
      });
  };

  return (
    <Box
      sx={{
        width: "80%",
        marginTop: 8,
        marginX: "10%",
      }}
    >
      {context.auth || adminAuth ? (
        <Grid>
          <AdminAppBar />
          <Grid container direction={"column"} width={"90%"} marginX={"5%"}>
            <CreateReportForm pageTitle={"Create Report"} />
          </Grid>
        </Grid>
      ) : (
        <Grid container flexDirection={"row"} justifyContent={"center"}>
          <Grid
            container
            item
            justifyContent={"center"}
            flexDirection={"column"}
          >
            <Grid item>
              <TextField
                id="filled-basic"
                label="Email"
                variant="filled"
                sx={{ backgroundColor: "whitesmoke" }}
                onChange={handleEmail}
              />
            </Grid>
            <Grid item>
              <TextField
                id="filled-basic"
                label="Password"
                variant="filled"
                sx={{ backgroundColor: "whitesmoke" }}
                onChange={handlePassword}
              />
            </Grid>
            <Grid item>
              <Button variant="contained" onClick={signIn}>
                SignIn
              </Button>
            </Grid>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default Admin;

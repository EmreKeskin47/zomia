import React, { useState, useEffect } from "react";
import palette from "../theme/palette";
import { Grid, Typography, Box, TextField, Button } from "@mui/material";
import styled from "@emotion/styled";
import { isMobile } from "react-device-detect";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../store/store";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import * as articleActions from "../store/actions/article-actions";
import * as reportActions from "../store/actions/report-actions";
import { useArticleData, useReportData } from "../store/hooks/useData";
import Link from "next/link";
//Icons
import { FaTwitter } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaBook } from "react-icons/fa";

const StyledButton = styled(Button)(({ theme }) => ({
  color: "#000",
  "&:hover": {
    color: "white",
    backgroundColor: "transparent",
  },
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: "#000",
  "&:hover": {
    color: "white",
    backgroundColor: "transparent",
  },
}));

const StyledLink = styled(Link)(({ theme }) => ({
  color: "#000",
  "&:hover": {
    color: "purple",
    backgroundColor: "transparent",
  },
}));

const Footer = (props) => {
  const [email, setEmail] = useState("");
  const router = useRouter();
  const articleList = useArticleData();
  const reportList = useReportData();

  const [connectArticle, setConnectArticle] = useState([]);
  const [connectReport, setConnectReport] = useState([]);
  var writingList = [];
  useEffect(() => {
    const fetch = async () => {
      await props.fetchArticles();
      await props.fetchReports();
      setConnectArticle(props.articles);
      setConnectReport(props.reports);
    };
    fetch();
  }, [
    props.articles,
    props.reports,
    connectArticle,
    connectReport,
    articleList,
    reportList,
  ]);

  if (reportList && reportList != []) {
    writingList.push(...reportList);
  }
  if (articleList && articleList != []) {
    writingList.push(...articleList);
  }

  const monthList = {
    january: "1",
    february: "2",
    march: "3",
    april: "4",
    may: "5",
    june: "6",
    july: "7",
    august: "8",
    september: "9",
    october: "10",
    november: "11",
    december: "12",
  };

  const getLatestWriting = () => {
    let years = [];
    let months = [];
    let days = [];
    let index = 0;
    let route = "";
    writingList.map((writing) => {
      let sepArr = writing.date.split(" ");
      years.push(Number(sepArr[2]));
      months.push(sepArr[0].toLowerCase());
      days.push(Number(sepArr[1]));
    });
    years.push(9999);
    for (let i = 0; i < years.length - 1; i++) {
      if (years[i] > years[i + 1]) {
        if (years[i] > years[index]) {
          index = i;
        }
      } else if (years[i] === years[i + 1]) {
        if (
          monthList[months[i].toLowerCase()] >
          monthList[months[i + 1].toLowerCase()]
        ) {
          index = i;
        } else if (
          monthList[months[i].toLowerCase()] ===
          monthList[months[i + 1].toLowerCase()]
        ) {
          if (days[i] > days[i + 1]) {
            index = i;
          }
        }
      }
    }
    if (writingList[index].desciption) {
      route = `/analysis/${writingList[index].id}`;
    } else {
      route = `/investigations/${writingList[index].id}`;
    }
    router.push(route);
  };

  const saveEmail = async () => {
    try {
      const docRef = await addDoc(collection(db, "emails"), {
        email: email,
      });
      toast("Your email has been successfully added to the newsletter");
    } catch (e) {
      toast("HAVING PROBLEMS GETTING YOUR EMAIL`");
    }
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent={"space-evenly"}
      bgcolor={palette.orange.main}
      sx={{ padding: "1rem" }}
    >
      {/* <Grid item sx={{ padding: "1rem" }}>
        <StyledButton>
          <Grid container direction={"row"} sx={{ paddingLeft: isMobile && 5 }}>
            <Grid
              item
              sx={{
                paddingTop: "0.25rem",
              }}
            >
              <FaBook
                style={{
                  color: palette.black.main,
                  marginRight: "5px",
                }}
              />
            </Grid>
            <StyledTypography
              variant="h6"
              component="div"
              item
              onClick={getLatestWriting}
            >
              Read latest
            </StyledTypography>
          </Grid>
        </StyledButton>
      </Grid> */}
      {/* Third Column */}
      <Grid item>
        <Grid container direction="column" justifyContent={"space-around"}>
          <Grid item>
            <Grid container direction={"row"} justifyContent="space-evenly">
              <Grid item>
                <Typography
                  variant="h6"
                  color={palette.black.main}
                  sx={{ padding: "1rem" }}
                >
                  Subscribe to our newsletter
                </Typography>
              </Grid>
              <Grid item paddingLeft={"1rem"}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-end",
                    marginBottom: "2rem",
                  }}
                >
                  <TextField
                    id="input-with-sx"
                    label="Email"
                    variant="standard"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Box>
              </Grid>
              <Grid item sx={{ padding: "1rem", border: "2px #000" }}>
                <StyledButton>
                  <StyledTypography
                    variant="h6"
                    component="div"
                    onClick={saveEmail}
                  >
                    Sign Up
                  </StyledTypography>
                </StyledButton>
                <ToastContainer />
              </Grid>
              <Grid item sx={{ padding: "1rem", border: "2px #000" }}>
                <Grid
                  container
                  flexDirection={"row"}
                  justifyContent={"space-around"}
                  sx={{ marginTop: "1rem" }}
                >
                  <Grid item>
                    <Link
                      href="https://mobile.twitter.com/centerzomia"
                      passhref="true"
                    >
                      <FaTwitter
                        style={{
                          color: "#000",
                          marginRight: "5px",
                        }}
                      />
                    </Link>
                  </Grid>

                  <Grid item>
                    <Link href="mailto: info@zomiacenter.org" passhref="true">
                      <a target="_blank" rel="noopener noreferrer">
                        <FaEnvelope
                          style={{
                            color: "#000",
                            marginRight: "5px",
                          }}
                        />
                      </a>
                    </Link>
                  </Grid>

                  <Grid item>
                    <Link
                      href="https://www.linkedin.com/company/the-zomia-center/about/?viewAsMember=true"
                      passhref="true"
                    >
                      <a target="_blank" rel="noopener noreferrer">
                        <FaLinkedin
                          style={{
                            color: "#000",
                          }}
                        />
                      </a>
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
 <Grid container justifyContent={"flex-start"} flexDirection={"row"}>
            <Typography
              variant="caption"
              sx={
                !isMobile && {
                  paddingRight: "3rem",
                  paddingTop: "1rem",
                }
              }
            >
              <span style={{ color: "black !important" }}>Zomia is a 501(c)(3) nonprofit</span>
            </Typography>
          </Grid>
          <Grid container justifyContent={"flex-end"} flexDirection={"row"}>
            <Typography
              variant="caption"
              sx={
                !isMobile && {
                  paddingLeft: "3rem",
                  paddingTop: "1rem",
                }
              }
            >
              <span style={{ color: "black !important" }}>Developed by</span>
              <Link href="https://www.wowfreelance.com" passhref="true">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  {" wowfreelance.com"}
                </a>
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      {/* <Grid container justifyContent={"flex-end"} flexDirection={"row"}></Grid> */}
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    articles: state.articleStore.articles,
    reports: state.reportStore.reports,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchArticles: () => dispatch(articleActions.fetchArticles()),
    fetchReports: () => dispatch(reportActions.fetchReports()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);

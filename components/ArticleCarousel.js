import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { mockArticles } from "../MOCK_DATA";

function ArticleCarousel() {
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = mockArticles.length;

    const handleNext = () => {
        if (activeStep === maxSteps - 1) {
            setActiveStep(0);
        } else {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
    };

    const handleBack = () => {
        if (activeStep === 0) {
            setActiveStep(maxSteps - 1);
        } else {
            setActiveStep((prevActiveStep) => prevActiveStep - 1);
        }
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <Box
            sx={{
                maxWidth: 1400,
                flexGrow: 1,
                width: "80%",
                marginLeft: "10%",
            }}
        >
            <SwipeableViews
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {mockArticles.map((article, index) => (
                    <div key={article.id}>
                        {Math.abs(activeStep - index) <= 1 ? (
                            <Box>
                                <Box
                                    display={"flex"}
                                    alignContent="center"
                                    justifyContent={"center"}
                                    sx={{
                                        position: "absolute",
                                        width: "100%",
                                        height: "40%",
                                        top: "30%",
                                        alignItems: "center",
                                        textAlign: "center",
                                    }}
                                >
                                    <Button
                                        size="large"
                                        onClick={handleBack}
                                        sx={{
                                            left: "0",
                                        }}
                                    >
                                        <KeyboardArrowLeft
                                            fontSize={"large"}
                                            style={{ color: "whitesmoke" }}
                                        />
                                    </Button>
                                    <Paper
                                        elevation={2}
                                        sx={{
                                            width: "70%",
                                            marginLeft: "15%",
                                            marginRight: "15%",
                                            opacity: 0.89,
                                        }}
                                    >
                                        <Box padding={3}>
                                            <Typography
                                                variant="h6"
                                                fontWeight={"bold"}
                                            >
                                                {article.title}
                                            </Typography>
                                            <Typography
                                                sx={{ padding: "15px" }}
                                            >
                                                {article.text.substring(
                                                    0,
                                                    240
                                                ) + "..."}
                                            </Typography>

                                            <Typography
                                                variant="body2"
                                                fontStyle={"italic"}
                                            >
                                                {article.date +
                                                    " / " +
                                                    article.author}
                                            </Typography>
                                        </Box>
                                    </Paper>
                                    <Button
                                        size="large"
                                        onClick={handleNext}
                                        sx={{
                                            right: "0",
                                        }}
                                    >
                                        <KeyboardArrowRight
                                            fontSize={"large"}
                                            style={{ color: "whitesmoke" }}
                                        />
                                    </Button>
                                </Box>

                                <Box
                                    component="img"
                                    sx={{
                                        height: 455,
                                        display: "block",
                                        maxWidth: 1400,
                                        overflow: "hidden",
                                        width: "100%",
                                    }}
                                    src={article.image}
                                    alt={article.title}
                                />
                            </Box>
                        ) : null}
                    </div>
                ))}
            </SwipeableViews>
        </Box>
    );
}

export default ArticleCarousel;

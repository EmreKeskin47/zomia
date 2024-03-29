import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import workerSrc from "../../pdf-worker";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AppBar from "@mui/material/AppBar";

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

const style = {
    maxWidth: 700,
    width: "100%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

const modalStyle = {
    position: "absolute",
    top: "10%",
    width: "100%",
    height: "100%",
    overflow: "scroll",
    display: "block",
};

export default function PDFViewer(props) {
    const { article } = props;
    const [file, setFile] = useState("1.pdf");
    const [numPages, setNumPages] = useState(null);

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    function onDocumentLoadSuccess({ numPages: nextNumPages }) {
        setNumPages(nextNumPages);
    }

    return (
        <div>
            <Box width={"100%"} textAlign={"center"} paddingY={5}>
                <Button onClick={handleOpen}>
                    <Typography variant="h4">READ MORE</Typography>
                </Button>
            </Box>

            <Modal
                open={open}
                onClose={handleClose}
                sx={modalStyle}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box>
                        <Document
                            file={file}
                            onLoadSuccess={onDocumentLoadSuccess}
                        >
                            {Array.from({ length: numPages }, (_, index) => {
                                return (
                                    <>
                                        <AppBar position="sticky">
                                            <Box
                                                display="flex"
                                                justifyContent="space-around"
                                                alignItems="center"
                                            >
                                                <Typography variant="body1">
                                                    PROXY WAR IN THE NORTHERN
                                                    CORRIDOR
                                                </Typography>
                                                <Typography variant="subtitle1">
                                                    {index +
                                                        1 +
                                                        " / " +
                                                        numPages}
                                                </Typography>
                                            </Box>
                                        </AppBar>

                                        <Page
                                            key={`page_${index + 1}`}
                                            pageNumber={index + 1}
                                            renderAnnotationLayer={true}
                                            renderTextLayer={true}
                                        />
                                    </>
                                );
                            })}
                        </Document>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}

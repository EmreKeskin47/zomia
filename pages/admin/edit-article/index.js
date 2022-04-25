import { Grid } from "@mui/material";
import React from "react";
import AdminAppBar from "../../../components/admin/AdminAppBar";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Box } from "@mui/system";
import EditArticleForm from "../../../components/admin/EditArticleForm";

const EditArticle = () => {
    const [age, setAge] = React.useState("");

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const data = [1, 2, 3, 4];
    return (
        <>
            <Box sx={{ width: "80%", marginTop: 8, marginX: "10%" }}>
                <AdminAppBar />

                <Grid
                    container
                    direction={"column"}
                    width={"90%"}
                    marginX={"5%"}
                >
                    <FormControl sx={{ minWidth: 100 }}>
                        <InputLabel id="demo-simple-select-autowidth-label">
                            Select article
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            value={age}
                            onChange={handleChange}
                            sx={{
                                background: "whitesmoke",
                                width: " 100%",
                            }}
                            label="Article"
                        >
                            {data.map((item, id) => {
                                return (
                                    <div
                                        style={{
                                            color: "white",
                                            padding: 5,
                                            paddingLeft: 20,
                                        }}
                                        key={id}
                                    >
                                        <MenuItem value="">
                                            <em>{item + "article"}</em>
                                        </MenuItem>
                                    </div>
                                );
                            })}
                        </Select>
                    </FormControl>
                    <EditArticleForm pageTitle={"Edit Article"} />
                </Grid>
            </Box>
        </>
    );
};

export default EditArticle;

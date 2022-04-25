import { Box, Grid } from "@mui/material";
import React from "react";
import AdminAppBar from "../../../components/admin/AdminAppBar";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import EditReportForm from "../../../components/admin/EditReportForm";

const EditReport = () => {
    const [age, setAge] = React.useState("");

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const data = [1, 2, 3];
    return (
        <Box sx={{ width: "80%", marginTop: 8, marginX: "10%" }}>
            <AdminAppBar />
            <Grid container direction={"column"} width={"90%"} marginX={"5%"}>
                <FormControl sx={{ minWidth: 100 }}>
                    <InputLabel id="demo-simple-select-autowidth-label">
                        Select report
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
                        label="Report"
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
                                        <em>{item + "report"}</em>
                                    </MenuItem>
                                </div>
                            );
                        })}
                    </Select>
                </FormControl>
                <EditReportForm pageTitle={"Edit Report"} />
            </Grid>
        </Box>
    );
};

export default EditReport;

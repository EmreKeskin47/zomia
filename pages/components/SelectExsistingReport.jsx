import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import "react-toastify/dist/ReactToastify.css";
import { useReportData } from "../../store/hooks/useData";

const SelectExsistingReport = ({ setSelectedVal }) => {
  const reports = useReportData();
  const [title, setTitle] = useState();

  const handleChange = (event) => {
    console.log(event.target.value);
    setTitle(event.target.value);
  };
  return (
    <FormControl sx={{ minWidth: 100, width: "90%" }}>
      <InputLabel>Select report</InputLabel>
      <Select
        sx={{
          background: "whitesmoke",
          width: " 100%",
        }}
        label="Report"
        onChange={handleChange}
        value={title}
      >
        {reports &&
          reports !== [] &&
          reports.map((item) => {
            return (
              <MenuItem
                style={{
                  color: "#F9A21B",
                  padding: 5,
                  paddingLeft: 20,
                }}
                key={item.id}
                value={item.title}
                onClick={() => {
                  setSelectedVal({
                    id: item.id,
                    title: item.title,
                    image: item.image,
                    description: item.description,
                    links: `Reports/${item.id}`,
                  });
                }}
              >
                <em>{item.title}</em>
              </MenuItem>
            );
          })}
      </Select>
    </FormControl>
  );
};

export default SelectExsistingReport;

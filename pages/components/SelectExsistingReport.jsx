import React from "react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import "react-toastify/dist/ReactToastify.css";
import { useReportData } from "../../store/hooks/useData";

const SelectExsistingReport = ({ setSelectedVal }) => {
  const reports = useReportData();
  return (
    <FormControl sx={{ minWidth: 100, width: "90%" }}>
      <InputLabel id="demo-simple-select-autowidth-label">
        Select report
      </InputLabel>
      <Select
        labelId="demo-simple-select-autowidth-label"
        id="demo-simple-select-autowidth"
        sx={{
          background: "whitesmoke",
          width: " 100%",
        }}
        label="Report"
      >
        {reports &&
          reports !== [] &&
          reports.map((item, id) => {
            return (
              <div
                style={{
                  color: "#F9A21B",
                  padding: 5,
                  paddingLeft: 20,
                }}
                key={id}
              >
                <MenuItem
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
              </div>
            );
          })}
      </Select>
    </FormControl>
  );
};

export default SelectExsistingReport;

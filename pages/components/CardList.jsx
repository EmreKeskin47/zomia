import React, { useEffect, useState } from "react";
import { Grid, Link } from "@mui/material";
import { mockReports } from "../../MOCK_PDF";
import NewsSummary from "./NewsSummary";
import { useSelector } from "react-redux";
import { useReportData } from "../../store/hooks/useData";

const CardList = ({ type }) => {
    const reportList = useReportData();
    const generateList = () => {
        if (type === "report") {
            return (
                <Grid
                    container
                    direction={"row"}
                    justifyContent={"space-around"}
                >
                    {reportList &&
                        reportList.map((item) => (
                            <Grid
                                item
                                key={item.id}
                                sx={{ paddingLeft: 5, paddingRight: 5 }}
                            >
                                <Link
                                    href={`/investigations/${item.id}`}
                                    sx={{ paddingLeft: 5, paddingRight: 5 }}
                                    replace="true"
                                >
                                    <NewsSummary
                                        image={item.image}
                                        title={item.title}
                                        date={item.date}
                                        description={
                                            item.text.slice(0, 140) + "..."
                                        }
                                        author={item.author}
                                    />
                                </Link>
                            </Grid>
                        ))}
                </Grid>
            );
        } else {
            return <Grid>Articles part is under construction.</Grid>;
        }
    };
    return <Grid>{generateList()}</Grid>;
};

export default CardList;

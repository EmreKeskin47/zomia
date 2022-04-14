import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
    Button,
    CardActionArea,
    CardActions,
    Grid,
    Paper,
} from "@mui/material";
import palette from "../../theme/palette";
import { mockReports } from "../../MOCK_PDF";
import { useRouter } from "next/router";

const Investigations = () => {
    const router = useRouter();
    return (
        <Paper sx={{ paddingTop: 5 }}>
            {mockReports.map((report) => {
                return (
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        lg={3}
                        key={report.id}
                        sx={{
                            borderRadius: 0,
                            borderColor: palette.orange.main,
                            border: "10px",
                            paddingBottom: "5rem",
                            marginX: "2rem",
                        }}
                    >
                        <Card>
                            <CardActionArea
                                onClick={() =>
                                    router.push(`/investigations/${report.id}`)
                                }
                            >
                                <CardMedia
                                    component="img"
                                    height="450"
                                    image={`/reports/${report.image}`}
                                    alt="green iguana"
                                />
                                <CardContent
                                    sx={{ backgroundColor: palette.black.main }}
                                >
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="div"
                                        color="whitesmoke"
                                    >
                                        {report.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="whitesmoke"
                                    >
                                        {report.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions
                                sx={{ backgroundColor: palette.black.main }}
                            >
                                <Button
                                    size="small"
                                    sx={{ color: palette.orange.main }}
                                >
                                    4 min read
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                );
            })}
        </Paper>
    );
};

export default Investigations;

import { Grid, Typography } from '@mui/material';
import React from 'react';

const ContentSummary = ({ category, heading, date, author }) => {
    return (
        <Grid direction="column" justifyContent="center"
            sx={{padding: '2rem'}}
        >
            <Grid item sx={{paddingBottom: "1rem"}}>
                <Typography align='left' variant="overline" >{category.toUpperCase()}</Typography>
            </Grid>
            <Grid item sx={{paddingBottom: "0.5rem"}}>
                <Typography align='left' variant="h6" sx={{fontWeight: "bold"}} pb-2>{heading}</Typography>
            </Grid>
            <Grid item>
                <Typography align='left' variant="caption" sx={{fontStyle: "italic"}} pb-2>{date} /</Typography>
            </Grid>
            <Grid item sx={{paddingBottom: "1rem"}}>
                <Typography align='left' variant="caption" sx={{fontStyle: "italic"}} pb-2>{author}</Typography>
            </Grid>
            <Grid item><hr/></Grid>
        </Grid>
    );
};

export default ContentSummary;
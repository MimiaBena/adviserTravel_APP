import React from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenyItem, FormControl, Select } from '@material-ui/core';

import useStyles from './styles';

const List = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Typography variant='h4'> Resta</Typography>
        </div>
    );
};

export default List;
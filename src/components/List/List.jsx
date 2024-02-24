import React, { useState } from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';

import PlaceDetails from '../PlaceDetails/PlaceDetails';

import useStyles from './styles';
 

const List = () => {

    const classes = useStyles();
    const [type, setType] = useState('restaurants');
    const [rating, setRating] = useState('restaurants');

    const places = [{ name: 'cool place'} , 
                    { name: 'hot place'},
                    { name: 'nice place'},
                ];

    return (
      <div className= {classes.constainer}>
        <Typography variant="h4">Restaurants, Hotels and attractions around you</Typography>
        <FormControl className = {classes.FormControl}>
            <InputLabel>Type</InputLabel>
            <Select value={type} onChange={(e)=> setType(e.target.value)}>
                <MenuItem value = "restaurants">restaurants</MenuItem>
                <MenuItem value = "hotes">hotels</MenuItem>
                <MenuItem value = "attractions">attractions</MenuItem>
            </Select>
        </FormControl>

        <FormControl className = {classes.FormControl}>
            <InputLabel>Rating</InputLabel>
            <Select value={rating} onChange={(e)=> setRating(e.target.value)}>
                <MenuItem value = {0}>All</MenuItem>
                <MenuItem value = {3}>Above 3.0</MenuItem>
                <MenuItem value = {4}>Above 4.0</MenuItem>
                <MenuItem value = {4.5}>Above 4.5</MenuItem>
            </Select>
        </FormControl>
        
        <Grid constainer spacing={3} className={classes.list}>
            {places?.map((place, i) => (
                <Grid item key = {i} xs={12}>
                    <PlaceDetails place = {place}/>
                </Grid>
            
            ))}
        </Grid>

      </div>

    );
}

export default List;
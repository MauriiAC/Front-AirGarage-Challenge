import React from 'react'
import { useSelector } from 'react-redux';
import ParkingCard from './ParkingCard';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 140,
    },
    control: {
      padding: theme.spacing(10),
    },
}));

const ParkingList = () => {
    
    const { parkingList, searching, errSearch } = useSelector(state => 
        {
            return {
              parkingList: state.parkingList,
              searching: state.searching,
              errSearch: state.errSearch
            };
        });

    const classes = useStyles();

    return (
        <>
            {
                searching
                ?
                <div>
                    <h1>
                        Searching
                    </h1>
                    <img
                        src='https://acegif.com/wp-content/uploads/loading-23.gif'
                        alt='loading'
                        style={ { width: "50%", top: "50%", left: '50%'} }
                    />
                </div>
                :
                parkingList
                ?
                <Grid container className={classes.root} spacing={2}>
                    <Grid item xs={12}>
                        <Grid container justifyContent="center" spacing={10}>
                        { parkingList?.businesses?.map((parking) => (
                            <Grid key={parking.id} item>
                                <ParkingCard
                                    className = { classes.paper }
                                    name = { parking.name }
                                    image = { parking.image_url }
                                    address = { parking.location.address1 }
                                    rating = { parking.rating }
                                    review_count = { parking.review_count }
                                    url = { parking.url }
                                    score = { (( parking.review_count * parking.rating ) / ( parking.review_count + 1 )).toFixed(2)}                                    
                                />
                            </Grid>
                        ))}
                        </Grid>
                    </Grid>
                </Grid>
                :
                false
            }

            {
                errSearch
                ?
                <h1>No results</h1>
                :
                false
            }
        </>
    );
}

export default ParkingList

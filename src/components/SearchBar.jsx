import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { searchParkings, cleanErr } from '../redux/actions';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(5, 2),
      width: '25ch',
    },
  },
}));

const SearchBar = () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const [input, setInput] = useState('');
    
    function handleSearch(e){
        dispatch(cleanErr())
        dispatch(searchParkings(input))
    }
    
    function handleChange(e){
        setInput(e.target.value)
    }
    
    function handleSubmit(e){
        e.preventDefault()
        dispatch(cleanErr())
        dispatch(searchParkings(input))
    }
    
    return (
        <>
            <form 
                className={classes.root}
                noValidate 
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <TextField 
                    id="outlined-basic" 
                    label="City"
                    variant="outlined"
                    value={input}
                    onChange={handleChange}
                    style={{ height: "56px", width: "30%" , color: 'white' }}
                />
                <Button
                    variant="contained" 
                    color="primary"
                    onClick={handleSearch}
                    style={{ height: "56px", width: "90px" }}
                >
                    Search
                </Button>
            </form>

        </>
    )
}

export default SearchBar

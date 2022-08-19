import {  Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CardSmall from '../component/CardsSmall';
import React, { useState } from 'react';

function Browse() {
    const [count, setCount] = useState(1);
    const items = [];
    for(let i = 0; i < count; i++){
        items.push(<CardSmall nb={i}></CardSmall>)
    }


    return (
      <>
        <Container >
            <Grid container spacing={4}>
                {items}
            </Grid>
        </Container>
        <button onClick={() => setCount(count + 1)}>
        Cliquez ici
      </button>
      </>
    );
  }

  export default Browse;
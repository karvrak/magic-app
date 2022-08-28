import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { CardsItem } from '../component/CardsItem';
import React, { useState } from 'react';
import items from  '../data/item.json';
export function Browse() {
  /*
    const [count, setCount] = useState(1);
    const items = [];
    for(let i = 0; i < count; i++){
        items.push(<CardSmall nb={i}></CardSmall>)
    }
    */

    return (
      <>
        <Container >
            <Grid container spacing={3}>
            
                {items.map(item => (
                  <Grid item xs={6}>
                    <CardsItem {...item}></CardsItem>
                  </Grid>
                ))}
            </Grid>
        </Container>
        
      </>
    );
  }

